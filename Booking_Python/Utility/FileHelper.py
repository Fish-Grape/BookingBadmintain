import requests
import os
import cv2
import random
import math
import time

class FileHelper:

    def downloadFileByURL(self,url):
        filename ='Image/' + os.path.split(url)[-1]
        response = requests.get(url)

        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f'{filename} 下载完成')
        else:
            print(f'无法下载 {filename}')
        return  filename

    def clearImages(self):
        target_dir = 'Image'
        for filename in os.listdir(target_dir):
            file_path = os.path.join(target_dir, filename)
            try:
                if os.path.isfile(file_path):
                    os.unlink(file_path)
            except Exception as e:
                print(f'Failed to delete {file_path}. Reason: {e}')

    def identify_gap(self,bg, tp, out):

        # 读取背景图片和缺口图片
        bg_img = cv2.imread(bg)  # 背景图片
        tp_img = cv2.imread(tp)  # 缺口图片

        # 识别图片边缘
        bg_edge = cv2.Canny(bg_img, 100, 200)
        tp_edge = cv2.Canny(tp_img, 100, 200)

        # 转换图片格式
        bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
        tp_pic = cv2.cvtColor(tp_edge, cv2.COLOR_GRAY2RGB)

        # 缺口匹配
        res = cv2.matchTemplate(bg_pic, tp_pic, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配
        X = max_loc[0]  # 缺口的X轴坐标

        # 绘制方框
        th, tw = tp_pic.shape[:2]
        tl = max_loc  # 左上角点的坐标
        br = (tl[0] + tw, tl[1] + th)  # 右下角点的坐标
        cv2.rectangle(bg_img, tl, br, (0, 0, 255), 2)  # 绘制矩形
        cv2.imwrite(out, bg_img)  # 保存在本地
        return X

    def get_slide_track(self,distance):
        slide_array = self.get_tracks(distance)
        return slide_array

    def get_tracks(self,distance):
        """
        传入经过计算的实际缺口距离，用于生成轨迹
        :param distance:
        :return:
        """
        valve = round(random.uniform(0.55, 0.75), 2)  # 分割加减速路径的阀值
        distance += 20  # 划过缺口20px
        v, t, sum = 0, 0.2, 0  # 初始速度，初始计算周期，累积滑动总距的变量
        plus = []  # 用于记录轨迹
        mid = distance * valve  # 将滑动距离分段，一段加速度，一段减速度
        while sum < distance:
            if sum < mid:
                a = round(random.uniform(2.5, 3.5), 1)  # 指定范围随机产生一个加速度
            else:
                a = -(round(random.uniform(2.0, 3.0), 1))  # 指定范围随机产生一个减速的加速度
            s = v * t + 0.5 * a * (t ** 2)  # 一个周期需要滑动的距离
            v = v + a * t  # 一个周期结束时的速度
            sum += s
            plus.append(round(s))

        reduce = [-3, -3, -2, -2, -2, -2, -2, -1, -1, -1]  # 手动制造回滑的轨迹累积20px
        print({'plus': plus, 'reduce': reduce})
        return {'plus': plus, 'reduce': reduce}

    def generate_trace(self,distance, start_time):
        """
        生成轨迹
        :param distance:
        :param start_time:
        :return:
        """
        back = random.randint(2, 6)
        distance += back
        # 初速度
        v = 10
        # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
        tracks_list = []
        # 当前的位移
        current = 6
        while current < distance - 13:
            # 加速度越小，单位时间的位移越小,模拟的轨迹就越多越详细
            a = random.randint(1000, 1200)  # 加速运动
            # 初速度
            v0 = v
            t = random.randint(9, 18)
            s = v0 * t / 1000 + 0.5 * a * ((t / 1000) ** 2)
            # 当前的位置
            current += s
            # 速度已经达到v,该速度作为下次的初速度
            v = v0 + a * t / 1000
            # 添加到轨迹列表
            if current < distance:
                tracks_list.append(round(current))
        # 减速慢慢滑
        if round(current) < distance:
            for i in range(round(current) + 1, distance + 1):
                tracks_list.append(i)
        else:
            for i in range(tracks_list[-1] + 1, distance + 1):
                tracks_list.append(i)
        # 回退
        for _ in range(back):
            current -= 1
            tracks_list.append(round(current))
        tracks_list.append(round(current) - 1)
        if tracks_list[-1] != distance - back:
            tracks_list.append(distance - back)
        # 生成时间戳列表
        timestamp_list = []
        timestamp = int(time.time() * 1000) + 100
        for i in range(len(tracks_list)):
            t = random.randint(11, 18)
            timestamp += t
            timestamp_list.append(timestamp)
            i += 1
        y_list = []
        zy = 0
        for j in range(len(tracks_list)):
            y = random.choice(
                [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
                 0, -1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1, 0, 0])
            zy += y
            y_list.append(zy)
            j += 1
        trace = []
        for index, x in enumerate(tracks_list):
            trace.append([x, y_list[index], timestamp_list[index] - start_time])
        return trace
