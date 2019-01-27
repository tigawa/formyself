+++
title = "pandasで特定の項目を編集する方法"
tags = ["機械学習"]
date = "2016-12-23"
banner = "banners/pandas.png"
author = "taiichi.igawa"
type = "post"
+++

pandasで特定の項目を編集する方法を紹介します。

<!--more-->

以下は、時刻から時間だけを抽出します。

- サンプルコード

    ```python
    train_df['time'].apply(lambda x: x.split(':')[0])
    ```

- 実行結果

19:30 -> 19

# 参考サイト

以下のサイトを参考にさせて頂きました。
ありがとうございます。

http://sinhrks.hatenablog.com/entry/2015/06/18/221747
