# -*- coding: utf-8 -*-
# @Time : 2021/9/24 12:56
# @Author : jin
# @Site : 
# @File : test_could.py
# @Software: PyCharm

import jieba    # 分词
from matplotlib import pyplot as plt  # 绘图，数据可视化
from wordcloud import WordCloud  # 词云
from PIL import Image   # 图片处理
import numpy as np  # 矩阵运算
import sqlite3  # 数据库

con = sqlite3.connect('movie.db')
cur = con.cursor()
sql = 'select instr from movie250'
data = cur.execute(sql)
text = ""
for item in data:
  text = text + item[0]

# print(text)

cur.close()
con.close()

# 分词
cut = jieba.cut(text)
string = ' '.join(cut)
print(len(string))

img = Image.open('1.png')
img_array = np.array(img)  # 将图片转换为数组
wc = WordCloud(
  scale=5,
  background_color='white',
  mask=img_array,
  font_path="STXIHEI.TTF"
)
wc.generate_from_text(string)

# 绘制图片
fig = plt.figure(1)
plt.imshow(wc)
plt.axis('off')  # 是否显示坐标轴

# plt.show()  # 显示生成的词云图片

# 输出词云图片到文件
plt.savefig('./static/assets/images/word1.jpg', dpi=500)