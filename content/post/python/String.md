+++
title = "pythonの数値、文字列を知る"
tags = ["Python"]
date = "2016-06-25"
banner = "banners/python.png"
+++

今回は、第2章を取り上げます。

勉強会で使用している本は最後に紹介しています。

<!--more-->

[1章 Pyの味 へ]({{< relref "overview.md" >}})

# 2章 Pyの成分：数値、文字列、変数

数値や文字列の扱いについて書かれていました。

## 気になったこと・今後使いそうなコード

- 整数の除算(切捨て)がある。

    ```python
    # 整数の除算(切捨て)
    >>> 7 // 2
    3
    ```
- 型変換
    ```python
    # int
    >>> int(98.6)
    98
    # float
    >>> float(98)
    98.0
    >>> float('99')
    99.0
    # String
    >>> str(98.6)
    '98.6'
    ```

- `int`はPyhon2までは、32ビットに制限されていたがPyhone3から制限はなくなった。こんなに大きな数字でも整数オーバーフローは発生しません。

    ```python
    >>> 10**100
    10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    ```

- print()
    ```python
    >>> print('aa', 'bb', 'cc')
    aa bb cc
    ```

- 文字列のスライス [start : end : step ]
    ```python
    >>> letters = 'abcdefghijklmnopqrstuvwxyz'
    >>> letters[0]
    a
    >>> letters[-1]
    z
    >>> letters[20:]
    'uvwxyz'
    >>> letters[4:20:3] #4文字目から 19文字目までを3文字毎に抽出
    'ehknqt'
    ```

- 文字の結合　Joinはなんか気持ち悪いです。
    ```python
    >>> arr = ['a', 'b', 'c']
    >>> print(', '.join(arr))
    a, b, c
    ```
- 多彩な文字列操作　特に目新しものはないですね

        >>> poem = '''All that doth flow we cannot liguid name
        ... Or else would fire and water be the same;
        ... But that is liquid which is moist and wet
        ... Fire that property can never get.
        ... Then 'tis not cold that doth the fire put out
        ... But 'tis the wet that makes it die, no doubt.'''

    ```python
    >>> len(poem)
    250
    >>> poem.startswith('All') #先頭一致
    True
    >>> poem.endswith('That\'s all, folks!') #後方一致
    False
    >>> poem.find('the') # 前から一致位置を取得
    73
    >>> poem.rfind('the') #後ろから一致位置を取得
    214
    >>> poem.count('the')
    3
    >>> poem.isalnum() #英数字かどうか（記号は除く）
    False
    ```

- 大文字と小文字の区別、配置　`title()`タイトルケースがいいですね。
    ```python
    >>> setup = 'a duck goes into a bar...'
    >>> setup.strip('.')
    'a duck goes into a bar'
    >>> setup.capitalize()
    'A duck goes into a bar...'
    >>> setup.title()
    'A Duck Goes Into A Bar...'
    >>> setup.lower()
    'a duck goes into a bar...'
    >>> setup.swapcase()
    'A DUCK GOES INTO A BAR...'
    ```

# 勉強会で使用している本

<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>


第2章は以上です。
