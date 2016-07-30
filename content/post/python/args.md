+++
title = "pyhoneの引数について"
tags = ["python"]
date = "2016-07-30"
banner = "banners/python.png"
+++

pythonの引数について説明します。

<!--more-->

関数を定義する側は、こんな感じ

- 特に変わったことはありません。

    ```python
    def menu(wine, entree, dessert):
        print(wine, entree, dessert)
    ```

ですが、呼び出す側では色々な呼び出し方があります。

# 位置引数

これが一般的なパターンですね。

- 引数の位置を意識して、値を渡す方法です。

    ```python
    >>> menu('chardonnay', 'chicken', 'cake')
    chardonnay chicken cake
    ```

# キーワード引数

- キーワードで指定するので、順番は気にしなくていいです。

    ```python
    >>> menu(dessert='cake', entree='chicken', wine='chardonnay')
    chardonnay chicken cake
    ```

# デフォルト値の指定

- 呼び出す際に指定がなかった場合に、採用されるデフォルト値を指摘できます。

    ```python
    >>> def menu(wine, entree, dessert='pudding'):
    ...   print(wine, entree, dessert)

    >>> menu('chardonnay', 'chicken')
    chardonnay chicken pudding
    ```

## 注意

デフォルト値の指定は、引数の最後にする必要があります。

- 途中にデフォルト値を指定するとエラーになります。

    ```python
    >>> def menu(wine, entree='chicken', dessert):
    ...     print(wine, entree, dessert)
    ...
      File "<stdin>", line 1
    SyntaxError: non-default argument follows default argument
    ```

# *による位置引数のタプル化

- `*args`で定義すれば、タプルとして引数を取得できます。

    ```python
    >>> def print_args(*args):
    ...   print('Positional argument tuple:', args)
    ```

`*args`を指定するのが、Pythonコミュニティの一般的な慣習らしいです。

- 実行結果

    ```python
    >>> print_args()
    Positional argument tuple: ()
    >>>
    >>> print_args(3, 2, 1, 'wait!', 'uh...')
    Positional argument tuple: (3, 2, 1, 'wait!', 'uh...')
    ```

# **によるキーワード引数の辞書化

- `**wkargs`で定義すれば、キーワード引数を辞書として引数を取得できます。

    ```python
    >>> def print_kwargs(**kwargs):
    ...   print('Keyword arguments:', kwargs)
    ```

`*kwargs`を指定するのが、Pythonコミュニティの一般的な慣習らしいです。

- 実行結果

    ```python
    >>> print_kwargs()
    Keyword arguments: {}
    >>>
    >>> print_kwargs(wine='merlot', entree='mutton', dessert='macaroon')
    Keyword arguments: {'dessert': 'macaroon', 'entree': 'mutton', 'wine': 'merlot'}
    >>>
    ```

- もちろん位置引数で指定するとエラーになります。

    ```python
    >>> print_kwargs('merlot', 'mutton', dessert='macaroon')
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: print_kwargs() takes 0 positional arguments but 2 were given
    ```

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
