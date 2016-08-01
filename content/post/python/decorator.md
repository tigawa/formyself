+++
title = "pythonのデコレータについて"
tags = ["python"]
date = "2016-07-31"
banner = "banners/python.png"
+++

pythonのデコレータについて紹介します。

<!--more-->

デレコータは、javaの *Spring Framework* のAOPだなと思いました。

AOPについて知りたい方は、 [ここ](http://blog.codebook-10000.com/entry/20130615/1371313615)を参照してください。

- デコレータのコード

    ```python
    >>> def document_it(func):
    ...     def new_function(*args, **kwargs):
    ...         print('Runting function:', func.__name__)
    ...         print('Positional arguments:', args)
    ...         print('Keyword arguments:', kwargs)
    ...         result = func(*args, **kwargs)
    ...         print('Result:', result)
    ...         return result
    ...     return new_function
    ```

関数の実行する前と実行した後に、引数と返り値を`print()`するデコレータです。

- デレコートする前のコードと実行結果

    ```python
    >>> def add_ints(a, b):
    ...     return a + b

    >>> add_ints(3, 5)
    8
    ```

- デレコートした後のコードと実行結果

    ```python
    >>> @document_it
    ... def add_ints(a, b):
    ...     return a + b
    ...
    >>> add_ints(3,5)
    Runting function: add_ints
    Positional arguments: (3, 5)
    Keyword arguments: {}
    Result: 8
    8
    ```

アノテーションで、`document_it`関数を指定することでデレコートできます。

いきなりアノテーションを使った例を示しましたが、使わない例も示します。

- アノテーションを使わずに書いた例

    ```python
    >>> def add_ints(a, b):
    ...     return a + b
    ...
    >>> cooler_add_ints = document_it(add_ints)
    >>> cooler_add_ints(3,5)
    Runting function: add_ints
    Positional arguments: (3, 5)
    Keyword arguments: {}
    Result: 8
    8
    ```
つまりアノテーションは、`cooler_add_ints = document_it(add_ints)`の代わりです。

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
