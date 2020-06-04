+++
date = "2020-06-04T08:35:36+09:00"
tags = ["TIL"]
categories = ["TIL"]
banner = "banners/til.png"
author = "taiichi.igawa"
type = "post"
title = "特定のフォルダにファイルをコピーして開くサンプル"
+++

```
@echo off
setlocal

set cached_folder=%userprofile%\cached_delete_ok\
set dst_file="%cached_folder%%~n1%~x1"
set src_file=%1

if not exist %cached_folder% mkdir %cached_folder%

copy /Y %src_file% %dst_file%
start "hoge" %dst_file%

endlocal
```

## ちょっとはまったところ
- ファイル名に空白を含むと正しく起動しない。

## 解決方法
- `start "hoge"`のように`hoge`を付けて回避する。