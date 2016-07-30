+++
title = "Pythonのタプル、集合"
tags = ["Python"]
date = "2016-06-27"
banner = "banners/python.png"
+++

Pythonのタプル、集合について触れていきます。
特にタプルと集合は、Javaで扱ったことがなったので新鮮でした。そのあたりを中心にまとめます。

<!--more-->

# タプル

  リストとほぼ同じです。イミュータブル（変更不可）という点が違います。

## 宣言

  - カッコで囲む。 配列は`[]`で表しますが、タプルは`()`で表します。

    ```python
    >>> tuple2 = ('a','b','c')
    ```

  - カッコをつけなくて、最後にカンマをつけるだけでもOK

    ```python
    >>> tuple1 = 'a','b','c'
    ```

  - tuple関数で配列をタプルに変換

    ```python
    >>> tuple(['a','b','c'])
    ```

## ちょっとしたテクニック

  - 一度に複数の変数に代入する方法

    ```python
    >>> t = ('1', '2', '3')
    >>> a, b, c = t
    ```

  - 変数の値を入れ替える（タプルのアンパックという手法らしい）

    ```python
    >>> password = 'swordfish'
    >>> icecream = 'tuttifrutti'
    >>> password, icecream = icecream, password
    ```


# 集合

  JavaのHashSetとよく似ていますが、和集合や積集合が使えるところが違います。

## 宣言

- 空の集合を定義

    ```python
    >>> empty_set = set()
    >>> even_numbers = {0, 2, 4, 6, 8}
    >>> odd_numbers = {1, 3, 5, 7, 9}
    ```

- 文字列　-> 集合

    ```python
    >>> set( 'letters' )
    {'r', 't', 's', 'e', 'l'}
    ```

- 配列　-> 集合 (タプルも同様)

    ```python
    >>> set( ['Dasher', 'Dancer', 'Prancer', 'Mason-Dixon'])
    {'Prancer', 'Dancer', 'Dasher', 'Mason-Dixon'}
    ```

## HashSetとしての使い方

  - sqlだと'a'が右になるのでちょっと気持ちわるい。でも英語の文法的にはこちらのほうが正しいのかな？

    ```python
    >>> al = {'a','b','c'}
    >>> 'a' in al
    True
    >>> 'x' in al
    ```

## 集合的な使い方

- 積集合

    ```python
    >>> a = {1, 2}
    >>> b = {2, 3}
    >>> a & b
    {2}
    >>> a.intersection(b)
    {2}
    ```

- 和集合

    ```python
    >>> a | b
    {1, 2, 3}
    >>> a.union(b)
    {1, 2, 3}
    ```

- 差集合

    ```python
    >>> a - b
    {1}
    >>> a.difference(b)
    {1}
    ```

- 排他的OR

    ```python
    >>> a ^ b
    {1, 3}
    >>> a.symmetric_difference(b)
    {1, 3}
  ```

- 部分集合

    ```python
    >>> a <= b
    False
    >>> a.issubset(b)
    False
    ```

- 真部分集合

    ```python
    >>> a < b
    False
    >>> a < a
    False
    ```

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

[Pythonのリストへ]({{< relref "list.md" >}})
