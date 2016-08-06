+++
title = "collectionsライブラリについて"
tags = ["python"]
date = "2016-08-06"
banner = "banners/python.png"
+++

pyhonの標準ライブラリである。`collections`について紹介です。

<!--more-->

# defaultdict

これめっちゃ便利です！！

辞書でキーが見つからなかった場合に、defaultを指定できます。

そんなことかと思いますが、以下のように応用が可能です。

以下の例は、キー毎にリストを生成するサンプルです。

- コード

    ```python
    >>> from collections import defaultdict
    >>>
    >>> list = [('A',1),('A',2),('B',3),('B',4)]
    >>> groups = defaultdict(lambda: [])
    >>>
    >>> for key, value in list:
    ...     groups[key].append(value)
    ...
    >>> groups
    defaultdict(<function <lambda> at 0x10140a9d8>, {'A': [1, 2], 'B': [3, 4]})```
    ```

# OrderedDict

辞書とリストの両方の性質をもつクラスです。(Javaでいう`LinkedHashMap`みたいなやつです。)

- コード

    ```python
    >>> from collections import OrderedDict
    >>> quotes = OrderedDict([
    ... ('Mce', 'A wise guy, huh?'),
    ... ('Larry', 'Ow!'),
    ... ('Curly', 'Nyuk nyuk!'),
    ... ])
    >>>
    >>> for key, value in quotes.items():
    ...   print(key, value)
    ...
    Mce A wise guy, huh?
    Larry Ow!
    Curly Nyuk nyuk!
    ```

辞書の部分は、タプルで記述します。

(key, value)


以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
