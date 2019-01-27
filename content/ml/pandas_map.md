+++
title = "pandasで性別を数値に変更する方法"
tags = ["機械学習"]
date = "2016-07-18"
banner = "banners/pandas.png"
author = "taiichi.igawa"
type = "post"
+++

pandasで性別コードを数値に変更する方法を紹介します。

機械学習するためには、全て数値(float)に変換する必要があります。

性別も同じです。

<!--more-->

今回は、`male`,`female`で入っているコードを`1`,`0`の数値に変換します。

```python
df['Sexnum'] = df['Sex'].map({'female': 0, 'male': 1})
```

- df['Sexnum']項目を追加して、そのに数値に変換した値を設定します。

以上です。
