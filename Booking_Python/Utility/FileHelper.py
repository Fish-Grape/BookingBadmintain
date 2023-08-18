import requests
import os
import cv2
import random
import numpy as np  # numpy 数学函数库
import pandas as pd  # pandas 数据分析库
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
        """
        根据滑动距离生成滑动轨迹
        :param distance: 需要滑动的距离
        :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
            x: 已滑动的横向距离
            y: 已滑动的纵向距离, 除起点外, 均为0
            t: 滑动过程消耗的时间, 单位: 毫秒
        """
 
        if not isinstance(distance, int) or distance < 0:
            raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")

        # 初始化滑动时间
        t = random.randint(95, 98)
        init_x = 650 + random.randint(-10,10)
        init_y = 605 + random.randint(-15,15)
        total_distance = distance + init_x + random.choice([-2, 1, 2])
        # 初始化轨迹列表
        slide_track = [
            [init_x, init_y, t],
        ]
        # 共记录count次滑块位置信息
        flag = True
        # 记录上一次滑动的距离
        _x = init_x
        _y = init_y
        probability = 0
        slide = 0
        slide_x = 0
        while flag:
            if _x == total_distance:
                flag = False
                break
            # 已滑动的横向距离
            slide_x = self.set_x(probability,distance,slide_x)
            if _x > total_distance:
                slide_x = -slide_x
            x = _x + slide_x
            slide += slide_x
            probability = slide / distance
            # 已滑动的纵向距离
            y = self.set_y()
            # 滑动过程消耗的时间
            if x == _x:
                continue
            t += self.set_t(probability)
            slide_track.append([x, _y + y, t])
            _x = x
        return slide_track #, slide_track[-1][2]   # 大数组，滑动时间

    def set_y(self):
        return random.choice([0, 0, 0, 0, 0, 0, 0, 0, 1, -1, 2])

    def set_x(self,pro,distance,slide_x):
        if distance < 210:
            if pro <= 0.55:
                if slide_x > 0:
                    x = self.getStep(slide_x,3,10)
                    return x
                x = random.choice([8, 8, 9, 9, 10, 8, 8, 7, 7, 8, 6, 6])
                return x
            else:
                # if slide_x > 3:
                #     x = slide_x + random.randint(-2, -1)
                #     return x
                return random.choice([3,3,3,2,1,1,1,1,2,3,2,3,2,3,2,2,1,2,2,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,2,0,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
        else:
            if pro <= 0.58:
                if slide_x > 0:
                    x = self.getStep(slide_x,6,12)
                    return x
                x = random.choice([10,9,8,7])
                return x
            elif pro <= 0.86:
                if slide_x > 4:
                    x = slide_x + random.randint(-2, -1)
                else:
                    x = self.getStep(slide_x, 1, 4)
                return x
            else:
                if slide_x > 3:
                    x = slide_x + random.randint(-2, -1)
                    return x
                return random.choice([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0])

    def getStep(self,slide_x,min,max):
        step = slide_x + random.randint(-2, 2)
        flag = True
        while flag:
            if step<=max and step >=min:
                flag = False
            else:
                step = slide_x + random.randint(-2, 2)
        return step


    isFirst = True
    def set_t(self,pro):
        if pro <= 0.87:
            return self.generate_t_pre()
        else:
            if self.isFirst:
                self.isFirst = False
                return random.randint(113,280)
            temp_pro = round(pro,2)
            # if temp_pro == 0.92 or temp_pro == 0.98:
            #     self.isFirst = True
            return random.choice([15,16,8,16,8,8,7,17,24,8,15,16,73,8,81,15,24,7,25,32,64,16,8,16,15,16,7,8,8,8,8,8,6,8,9,8,16,81,7,24,32,16,16,32,24,24,8,23])


    def generate_t_pre(self):
        num = 0
        arr = [7, 9]
        random_num = random.randint(0, 99)
        if random_num < 77:
            num = 8
        else:
            num = random.choice(arr)
        return num


