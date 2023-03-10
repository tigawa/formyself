+++
title = "Pythonのリスト"
tags = ["Python"]
date = "2016-06-30"
banner = "banners/python.png"
+++

リストは基本中の基本ですね。しっかり抑えておきたいところです。

<!--more-->
## リストの操作

メソッドと、関数があるので要注意です！。

操作       | メソッド     | 使用例
:------- | :------- | :-------
追加(最後) | append() | `list.append('d')`
取得(先頭) | - | `list[0]`
取得(最後) | - | `list[-1]`
取得(最後)+削除| pop() | `list.pop() オフセットの指定なければ、-1`
追加(任意の場所) | insert() | `list.insert(4,'z')`
削除 | del | `del list[2]`
削除 | remove() | `list.remove('c')`
リストの結合| extend() | `list.extend(list2)`
リストの結合| += | `list += list2`
オフセットの取得 | index() | `list.index('b')`
要素を含むか　| in | `'a' in list`
個数の計算　| count() | `list.count('a')`
文字列変換　| join() | `', '.join(list)`
ソート(破壊的) | sort() | list.sort()
ソート | sorted | sorted(list)
長さの取得| len | len(list)

insert()で、リストのサイズを超えるオフセットを指定した場合は、一番最後に追加されます。
いけてる！

## 宣言

- リストは`[]`で囲む

    ```python
    >>> empty_list = [ ]
    >>> list = ['a','b','c']
    ```

- list()関数で、リストを生成

    ```python
    >>> empty = list()
    ```

- タプル -> リスト

    ```python
    >>> a_tuple = ('a','b','c')
    >>> list(a_tuple)
    ['a','b','c']
    ```

## 要素の取り出し

- オフセットを使用した参照 文字列をスライスする時と同じ感覚で扱えます。

    ```python
    >>> list = ['a','b','c']
    >>> list[0]
    'a'
    >>> list[-1]
    'c'
    >>> list[0:2]
    ['a','b']
    >>> list[::2]
    ['a','b']
    ```

    **注意** データを超えるオフセットをした場合にエラーになるので注意してください。

- リストを逆順にするワザ

    ```python
    >>> list[::-1]
    ['c','b','a']
    ```

## リストのコピー

  - 色々コピーの仕方があります。

    ```python
    >>> list_copy1 = a.copy()
    >>> list_copy2 = list(a)
    >>> list_copy3 = list[:]
    ```

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

[Pythonの辞書を知る]({{< relref "list.md" >}})
