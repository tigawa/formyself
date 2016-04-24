+++
title = "Gitで特定の文字列を含むファイルを検索する"
date = "2013-05-31"
tags = ["Git"]
banner = "banners/git-logo.png"
+++

git grepコマンドは、インデックスやワーキングツリーに対して文字列を検索する。

git grep --no-index Saitama

kantou.txt:Saitama

正規表現で検索する。

```
#Kaで始まる行を検索する
git grep -e ^Ka
```
