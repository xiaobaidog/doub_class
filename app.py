from flask import Flask, render_template
import sqlite3

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
  return render_template("index.html")


@app.route('/movie')
def movie():
  datalist = []
  con = sqlite3.connect("movie.db")
  cur = con.cursor()
  sql = "select * from movie250"
  data = cur.execute(sql)
  for item in data:
    datalist.append(item)
  cur.close()
  con.close()

  return render_template('movie.html', movies=datalist)


@app.route('/score')
def score():
  score1 =[]  # 评分
  count1 = []  # 每个评分统计出的电影数量
  con = sqlite3.connect("movie.db")
  cur = con.cursor()
  sql = "select score,count(score) from movie250 group by score"
  data = cur.execute(sql)
  for item in data:
    score1.append(item[0])
    count1.append(item[1])
  cur.close()
  con.close()
  return render_template('score.html', score=score1, num=count1)


@app.route('/word')
def word():
  return render_template('word.html')


@app.route('/team')
def team():
  return render_template('team.html')


if __name__ == '__main__':
  app.run(debug=True)
