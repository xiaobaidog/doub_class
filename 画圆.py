# -*- coding: utf-8 -*-
# @Time : 2021/10/16 13:47
# @Author : jin
# @Site : 
# @File : 画圆.py
# @Software: PyCharm

from matplotlib import pyplot as plt
from matplotlib.patches import Circle


# 画圆函数
def plot_circle():
  fig = plt.figure()
  ax = fig.add_subplot(111)

  cir1 = Circle(xy=(0.0, 0.0), radius=2, alpha=0.5, color='r')  # 圆

  ax.add_patch(cir1)

  x, y = 0, 0

  ax.plot(x, y, 'ro')

  plt.axis('scaled')

  plt.axis('equal')  # 更改x或y轴的限制，使x和y的梯度增量具有相同的长度

  plt.show()


def main():
  plot_circle()


if __name__ == '__main__':
  main()
