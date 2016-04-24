+++
title = "Gitですべて修正前にリセットしたい。"
date = "2013-05-31"
tags = ["Git"]
banner = "banners/git-logo.png"
+++

HEADの状態にリセットしたい。

<!--more-->

# HEADの状態にワーキングツリーとインデックス、リポジトリを戻す。

		git reset --hard HEAD

# gitで管理されていないファイルについては、上記のコマンドでは元に戻らないので、次のコマンドでクリア

		git clean -fd

# 特定のファイルのみリセットしたい

		git reset --mixed HEAD data1
