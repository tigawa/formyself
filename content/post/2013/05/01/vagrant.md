+++
title = "vagrantインストール"
date = "2013-05-01"
tags = ["vagrant"]
+++

chef soloの記事を読んでいたら、vagrantという面白いツールを見つけたので、とりあえずインストール

<!--more-->

### vagrantってなに？

- Vagrant は、Ruby で組まれたスクリプトで、仮想マシン上の開発環境の構築・配布の自動化を支援するためのツールらしい。
- CentOSとかのイメージがありそのまま使える！！

### インストール環境

- ホストOS windows7 64bit
- ruby 1.9.3

### インストール手順

1. VirtualBoxインストール
2. vagrentインストール

		gem install vagrent

**注意* サイトからダウンロードしてインストールすると、設定ファイルの内容がちょっと違っていた。

gemからインストールを推奨

### 参考サイト

- [saharaをインストール](http://qiita.com/items/c145e1759f9441c22feb)
