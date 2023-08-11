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
        init_x = 664 + random.choice([-1,1,2,3])
        init_y = 595 + random.choice([-1,1,2,3])
        total_distance = distance + init_x + 1
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
        while flag:
            if(_x >= total_distance):
                flag = False
                break
            # 已滑动的横向距离
            x = _x + self.set_x(probability)
            slide +=  x -_x
            probability = slide / distance
            # 已滑动的纵向距离
            y = random.uniform(-2, 2)
            # 滑动过程消耗的时间
            if x == _x:
                continue
            t += self.set_t(probability)
            slide_track.append([x, _y + y, t])
            _x = x
        return slide_track #, slide_track[-1][2]   # 大数组，滑动时间

    def set_x(self,pro):
        if pro <= 0.18:
            return random.choice([9, 11, 11, 15, 16, 19, 20, 19, 19, 16, 20, 16, 13, 12, 12])
        elif pro <= 0.9:
            return random.choice([9, 11, 11, 15, 16, 19, 20, 19, 19, 16, 20, 16, 13, 12, 12])
        else:
            return random.choice([1, 1, 1, 1, 2, 1, 1, 1, 2, 3, 2, 2, 1, 1, 1, 1, 2])

    def set_t(self,pro):
        if pro <= 0.5:
            return self.generate_t_pre()
        elif pro <= 0.75:
            return random.choice([77, 185, 15, 120, 15, 16, 8, 17, 23, 24])
        elif pro <= 0.84:
            return self.generate_t_pre()
        else:
            return random.choice([68, 15, 8, 40, 56, 8, 8, 8, 16, 8, 18, 24, 34, 49, 39, 8, 57, 24])

    def generate_t_pre(self):
        num = 0
        arr = [6, 7, 9, 10]
        random_num = random.randint(0, 99)
        if random_num < 77:
            num = 8
        else:
            num = random.choice(arr)
        return num


