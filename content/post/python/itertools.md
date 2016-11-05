+++
title = "itertoolsライブラリについて"
tags = ["python"]
date = "2016-08-07"
banner = "banners/python.png"
+++

pyhonの標準ライブラリである。`itertools`について紹介です。

[公式ドキュメント](http://docs.python.jp/2/library/itertools.html#module-itertools)

<!--more-->

# accumulate

1から4までの数値を、乗算していくサンプルです。

lamdbaを指定しなければ、デフォルトでは加算します。

- コード

    ```python
    >>> for item in itertools.accumulate(range(1,5), lambda a, b : a * b):
    ...   print(item)
    ...
    1
    2
    6
    24
    ```

# count

機械学習で、コードを数値に変換したときなど、以下のように`count`を使用すれば簡単にできます。

```python
from itertools import count
dict(zip(['a','b'], count(1)))
#=>
# {'a': 1, 'b': 2}
```

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
