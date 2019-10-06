+++
date = "2019-10-06T13:46:38+09:00"
tags = ["TIL"]
categories = ["TIL"]
banner = "banners/til.png"
author = "taiichi.igawa"
type = "post"
title = "Hugoのserverコマンドでブラウザも同時に起動する方法"
+++

Hugoのserverコマンドでブラウザも同時に起動する方法を紹介します。
<!--more-->

```
ugo server -w & sleep 1 && chrome http://localhost:1313 && fg
```

### aliasに設定すると便利です

~/.bashrc
```
alias hs='hugo server -w & sleep 1 && chrome http://localhost:1313 && fg'
```
