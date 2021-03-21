+++
date = "2019-08-15T12:28:01+09:00"
title = "文字列"
tags = ["C#"]
categories = ["プログラミング言語"]
description = "JavaプログラーマーによるC言語のちょっとした記事"
banner = "banners/csharp.png"
author = "igawa.taiichi"
type = "post"
+++

よくつかう文字列に関する部品をJavaとC#で対比してまとめます。

<!--more-->

## null 空白文字列のチェック

| Java  **[Apache]**    | C#  **[標準]**              | 用途                                                         |
| --------------------- | --------------------------- | ------------------------------------------------------------ |
| StringUtils.isEmpty() | String.IsNullOrEmpty()      | nullか空文字の場合にtrueを返す。                             |
| StringUtils.isBlank() | String.IsNullOrWhiteSpace() | nullか空文字か空白文字列(全角空白も含む)の場合にtrueを返す。 |

### 実行例

```
Assert.AreEqual(true, String.IsNullOrEmpty(null));
Assert.AreEqual(true, String.IsNullOrEmpty(""));
Assert.AreEqual(false, String.IsNullOrEmpty(" "));//半角空白
Assert.AreEqual(false, String.IsNullOrEmpty("　"));//全角空白
Assert.AreEqual(false, String.IsNullOrWhiteSpace("a　"));

Assert.AreEqual(true, String.IsNullOrWhiteSpace(null));
Assert.AreEqual(true, String.IsNullOrWhiteSpace(""));
Assert.AreEqual(true, String.IsNullOrWhiteSpace(" "));//半角空白
Assert.AreEqual(true, String.IsNullOrWhiteSpace("　"));//全角空白
Assert.AreEqual(false, String.IsNullOrWhiteSpace("a　"));
```
