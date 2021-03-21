+++
title = "dataFrameから欠損値を削除"
tags = ["機械学習"]
date = "2016-07-16"
banner = "banners/pandas.png"
author = "igawa.taiichi"
type = "post"

+++

欠損値があると、機械学習する際にエラーになるため、何かしら値を埋める必要があります。

ですが、とりあえず欠損値を覗いてくれるのがこれです。

<!--more-->

```python
dfna = df.dropna();
```

`df`はデータフレーム

これで欠損値が除外できます。


# 参考サイト

以下のサイトを参考にさせて頂きました。
ありがとうございます。

http://qiita.com/okadate/items/7b9620a5e64b4e906c42
