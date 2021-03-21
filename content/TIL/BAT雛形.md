+++
date = "2019-11-27T08:07:30+09:00"
tags = ["TIL"]
categories = ["TIL"]
banner = "banners/til.png"
author = "igawa.taiichi"
type = "post"
title = "BAT雛形"
+++
## コード

```
setlocal
@echo off
CD /D "%~dp0"


endlocal
```

## 補足説明

@は、そこコマンド自体をECHOしないための設定
ECHO OFF だけだと ECHO OFFがOFFする前だからコンソールに出力される。
そのため＠ECHOにして防いでいる。

