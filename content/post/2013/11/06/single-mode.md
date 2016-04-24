+++
title = "Ubuntuのログインパスワードを忘れた"
date = "2013-11-06"
tags = ["ubuntu"]
+++

ubuntuでrootのパスワードを忘れたらどうするか

その解決方法を教えます。

<!--more-->

### 手順

簡単に説明するとシングルモードでubuntuにログインして、強制的にrootユーザのパスワードを変更します。
以下のサイトの手順でrootのパスワードを変更できました。

[Ubuntuのログインパスワードを忘れた場合の解決法](https://wiki.ubuntulinux.jp/UbuntuTips/Others/Password%20Forgot)

### おまけ

ubuntuはrootでログインできないようにパスワードを設定していない事が多いです。

次のコマンドでrootのパスワードを設定することができます。

	sudo -s

以上でーす。
