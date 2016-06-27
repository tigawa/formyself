+++
title = "Pythonのリスト、タプル、辞書、集合"
tags = ["Python"]
date = "2016-06-27"
banner = "banners/python.png"
+++

Pythonのリスト、タプル、辞書、集合について触れていきます。
特にタプルと集合は、他の言語で扱ったことがなったので新鮮でした。そのあたりを中心にまとめます。

<!--more-->

# タプル

  リストと使い方ほぼ同じだが、イミュータブル（変更不可）という点が違います。

  - 宣言
    ```python
    # 最後にカンマをつける
    >>> tuple1 = 'a','b','c',
    # カッコで囲む
    >>> tuple2 = ('a','b','c')
    # tuple関数で生成
    >>> tuple(['a','b','c'])
    ```

  - ちょっとしたテクニック
  ```python
  # 一度に複数の変数に代入する方法
  >>> t = ('1', '2', '3')
  a, b, c = t

  # 変数の値を入れ替える（タプルのアンパックという手法らしい）
  >>> password = 'swordfish'
  >>> icecream = 'tuttifrutti'
  password, icecream = icecream, password
  ```

# 集合

  JavaのHashSetとよく似ていますが、和集合や積集合が使えるところが違います。

  








## 勉強会で使用している本

非常に分かりやすくておすすめです。とても丁寧に説明してあり、Pythonの初心者から中級者に最適だと思います。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

第3章は以上です。
