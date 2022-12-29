+++
date = "2022-12-29T14:58:30+09:00"
title = "Goモジュール"
tags = ["golang"]
categories = ["プログラミング言語"]
banner = "banners/Go-Logo_Aqua.png"
author = "igawa.taiichi"
type = "post"
+++

## go mod tidy
- Go 1.15 まで、 `go build`, `go test` などのコマンドを実行するタイミングで、自動的に外部ライブラリをダウンロードされていた。
- Go 1.16 から、`go mod tidy` コマンドを手動で実行する必要がある

## 明示的にバージョンを指定する場合
コミットID=`abcdef999`を指定する場合
```shell
go mod edit -replace github.com/hoge/xxx@v1.0.0=github.com/igawa/xxx@abcdef999
```