+++
title = "pythonのNoneについて"
tags = ["python"]
date = "2016-07-30"
banner = "banners/python.png"
+++

pythonのNoneについて紹介します。

<!--more-->

`None`は、rubyでいう`nil`です、javaのnullとは違い、`None`というクラスがあるイメージ。

厳密には違うかもです。

Noneに対して、存在しないメソッドを実行してみました。

```python
>>> None.a()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'a'
```

Javaなら`NullPointerException`が発生しますが

pythonなら、`a()`メソッドがないってエラーになります。

# Noneの判定

Noneを判定したい場合は、`is`を使用します。

```python
>>> None is None
True
```

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
