+++
title = "ピボットテーブルを棒グラフで表示する"
tags = ["機械学習"]
date = "2016-07-16T02:00:00+09:00"
banner = "banners/pandas.png"
author = "igawa.taiichi"
type = "post"
+++

[前回]({{< relref "pivot2.md" >}})ピボットテーブルで、割合を表示するテクニックを載せました。

今回はその応用で、割合を棒グラフで表示する方法を紹介します。

<!--more-->

- コード

    ```python
    pt2.plot(kind='bar', ylim=(0,1))
    ```

ylimは、ｙ軸の表示メモリの範囲を指定します。

今回は割合なので、0から1までをy軸のメモリとしています。

`pt2`は、[前回]({{< relref "pivot2.md" >}})の記事を参照してください。

- 出力結果

<p style="float:left">
![出力結果](/banners/output_7_1.png)
<p>
