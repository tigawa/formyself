+++
title = "pythonのpass文について"
tags = ["python"]
date = "2016-07-30"
banner = "banners/python.png"
+++

pythonのpass文について、ピンとこなかったのでまとめました。

<!--more-->

関数を定義して何も処理をしないってときに、`pass`を使うらしいです。

```python
>>> def do_nothing():
...     pass
...
>>> do_nothing()
>>>
```

んで、`pass`を書かなかったらどうなる？

ってことで、やってみたら構文エラーになりました。

必要なんですね。

```python
>>> def do_nothing2():
...
  File "<stdin>", line 2
```

例外クラスを作るときは、`pass`を使うのは多用しそうですね。

```python
class UppercaseException(Exception):
    pass
```

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
