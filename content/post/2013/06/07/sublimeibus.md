+++
title = "UbuntuのSublimeText2で日本語を直接入力する"
date = "2013-06-07"
tags = ["SublimeText2"]
+++

今まで「InputHelper」を導入して、`ctrl + shift + z`でWindowを起動して日本語を入力していたので手間だった。
そんな時、[SublimeIBus](https://github.com/chikatoike/SublimeIBus)と運命の出会い。これはSublime Text2で直接日本語を入力できる優れも！！

<!--more-->

**これは使える。あの手間から開放される。 開発者の方々に感謝！！、感謝!!です。**

# 注意事項
開発者の方がアルファ版以下ですと説明されていますが、それなりに使えました。
しばらく使っていると、入力中の文字が見えなくなることがありました。

# 試した環境
Ubuntu 13.04

# 前提
Gitがインストール済みであること → [Gitのインストールはここを参照してね♪](/blog/2013/05/30/git_install/)

# インストール方法

```
sudo apt-get install python-xlib

cd ~/.config/sublime-text-2/Packages
git clone git@github.com:chikatoike/SublimeIBus.git
```

# 使い方

次のショートカットキーで日本語をON/OFFする。

		ctrl + ￥

以上
