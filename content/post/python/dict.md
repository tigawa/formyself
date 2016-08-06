+++
title = "Pythonの辞書を知る"
tags = ["python"]
date = "2016-06-30"
banner = "banners/python.png"
+++

基本中の基本ですね。しっかり抑えておきたいところです。

<!--more-->
## 辞書の操作

メソッドと関数があるので要注意です。

操作       | メソッド     | 使用例
:------- | :------- | :-------
取得(キーがない＝例外)| -  | `dict_a['tanaka']`
取得(キーがない＝None)| get()  | `dict_a.get('tanaka')`
取得(キーがない＝'default')| get()  | `dict_a.get('tanaka', 'default')`
追加,変更 | -  | `dict_a['tanaka'] = 'tarou'`
削除 | del  | `del dict_a['tanaka']`
全削除 | clear() | `dict_a.clear()`
結合 | update()  | `dict_a.update(dict_b)`
キーを含むか | in  | `'tanaka' in dict_a`
全てのキーを取得 | keys() | `dict_a.keys()`
全ての値を取得 | values() | `dict_a.values()`
全てのキーと値を取得 | items() | `dict_a.items()`

## 宣言

- リストは`{}`で囲む

    ```python
    >>> empty_dict = {}
    >>> dict = {
        'igawa' : 'taiichi',
        'yamada': 'tarou',
        'suzuki': 'ichirou',
        }
    ```

- dict()関数を使った宣言

    ```python
    >>> lol = [ ['a', 'b'], ['c','d'], ['e','f']]
    >>> dict(lol)
    ```
    タプルも同様

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

[pythonの制御文]({{< relref "list.md" >}})
