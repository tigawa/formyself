+++
banner = "banners/html5.png"
date = "2017-06-17T19:11:00+09:00"
description = "CSS プロパティの順序の統一"
tags = ["html"]
title = "CSS プロパティの順序の統一"
+++

CSS プロパティの順序の統一するのは大変ですが、ツールを使って統一することができます。

[CSScomb](http://csscomb.com/)というツールを紹介します。

<!--more-->

インストール

    npm install csscomb -g

使用方法

    csscomb 変換したパス


そのほかに以下を統一することができます。

* プロパティの：の後ろに空白を付ける
* セレクタの後ろに空白を付ける


毎回、コマンドで変換するのは手間なので、gulpなどのタスクランナーから使用するのがいいと思います。
