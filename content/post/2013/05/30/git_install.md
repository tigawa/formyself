+++
title = "Gitのインストール及び、初期設定"
date = "2013-05-30"
tags = ["Git"]
banner = "banners/git-logo.png"
+++

Gitのインストール及び、初期設定についてまとめています。
<!--more-->

# インストール環境

Ubuntu 13.04

# インストール手順

```
#git本体
sudo apt-get install git

#git標準のguiツール
sudo apt-get install gitk
sudo apt-get install git-gui
```

# 初期設定

```
#コミット時のユーザ名を指定
git config --global user.name ”(your name)"

#コミット時のメールアドレスを指定
git config --global user.email "(your email)"

#コンソールをカラフルにする。（おすすめ）
git config --global color.ui true

#マルチバイト対応
git config --global core.quotepath false
```
