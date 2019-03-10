"+++
title = "pythonの文字列、数値を知る"
tags = ["Python"]
date = "2016-06-25"
banner = "banners/python.png"
+++

今回は文字列や数値の扱い方についてまとめています。

<!--more-->
- 文字列のフォーマット

  - % 古い書式指定
    ```python
    >>> "%02d" % (1)
    '01'
    ```

  - format 新しい書式指定

    - インデックスによるアクセス

    ```python
    >>> '{0:02d}, {1}, {2}'.format(2, 'b', 'c')
    'a, b, c'
    >>> '{}, {}, {}'.format('a', 'b', 'c')  # 2.7+ only
    'a, b, c'
    >>> '{2}, {1}, {0}'.format('a', 'b', 'c')
    ```

    - keyによるアクセス

    ```python
    >>> 'Coordinates: {latitude}, {longitude}'.format(latitude='37.24N', longitude='-115.81W')
    'Coordinates: 37.24N, -115.81W'

    >>> coord = {'latitude': '37.24N', 'longitude': '-115.81W'}
    >>> 'Coordinates: {latitude}, {longitude}'.format(**coord)
    'Coordinates: 37.24N, -115.81W'
    ```

    - 参考サイト
      - [公式ドキュメント](http://docs.python.jp/2/library/string.html#formatexamples)



- 文字の比較

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

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>


[Pythonのタプル、集合へ]({{< relref "tuple.md" >}})
