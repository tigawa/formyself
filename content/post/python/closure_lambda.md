+++
title = "pythonでクロージャ・ラムダ関数"
tags = ["python"]
date = "2016-07-30"
banner = "banners/python.png"
+++

pythonでクロージャ・ラムダ関数について勉強しました。

<!--more-->

# クロージャ

クロージャの使い所がピンと着てないですが、クロージャについて説明します。

- これがクロージャ

    ```python
    >>> def knights2(saying):
    ...   def inner2():
    ...       return "We are the knights who say: '%s'" % saying
    ...   return inner2
    >>>
    >>>
    >>> a = knights2('igawa')
    >>> b = knights2('taiichi')
    ```

- inner2は、動的に作られた関数のため、aとbではアドレスが違う！

    ```python
    >>> a
    <function knights2.<locals>.inner2 at 0x101afba60>
    >>> b
    <function knights2.<locals>.inner2 at 0x101afbbf8>
    ```

- クロージャで作った関数を実行

    ```python
    >>> a()
    "We are the knights who say: 'igawa'"
    >>> b()
    "We are the knights who say: 'taiichi'"
    ```

inner2は、動的に作成された関数であり、どのように作成されたかを覚えている。

これがクロージャらしい。

# ラムダ関数

GUIのコールバック関数を定義するときには、ラムダ式は役にたつとのこと。

- 関数を引数に渡して実行する例

    ```python
    >>> def edit_story(words, func):
    ...   for word in words:
    ...     print(func(word))
    ```

- 関数部分をラムダで定義している。

    ```python
    >>> words = ['apple','melon','strawberry']
    >>> edit_story(words, lambda x : x + '!')
    apple!
    melon!
    strawberry!
    ```

以上です。


# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
