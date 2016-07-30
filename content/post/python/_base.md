+++
title = "pythonのジェネレータについて"
tags = ["python"]
date = "2016-07-31"
banner = "banners/python.png"
+++

pythonのジェネレータについて、紹介します。

<!--more-->

range(1,10)は、ジェネレータのひとつです。

ジェネレータは、メモリに全ての数字を展開しないというのが特徴

大きくなる可能性があるシーケンスを作りたい場合に便利に、ジェネレータ関数は便利です。

- ジェネレータ関数の例

    ```python
    >>> def my_range(first=0, last=10, step=1):
    ...   number = first
    ...   while number < last:
    ...     yield number
    ...     number += step
    ...
    >>>
    >>> list(my_range(step=2))
    [0, 2, 4, 6, 8]
    ```

値を`return`でなく、`yield`で返すことを除けば通常の関数と同じです。

## 注意
python2ではrangeはジェネレータではなく、xrange()がジェネレータとして用意されています。

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
