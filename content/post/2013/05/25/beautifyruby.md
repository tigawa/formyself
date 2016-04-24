+++
title = "Sublime Text2でRubyソースをフォーマットしたい"
date = "2013-05-25"
tags = ["SublimeText2"]
+++

Sublime Text2でrubyのソースのフォーマットしたいですよね

<!--more-->

はい、これ →   [BeautifyRuby](https://github.com/CraigWilliams/BeautifyRuby)

# サポート範囲
次がフォーマットできます     .html .erb .rb .rake Rakefile Gemfile

# インストール方法
インストールは次の２つから選べる、どちらでもどうぞ！！<br>詳しくは、[BeautifyRuby](https://github.com/CraigWilliams/BeautifyRuby)のReadmeにもインストール方法の記載があるよ。

## (1)自動でインストール

1. Sublime Text2上で、次のキーを打つべし!!
2. "cmd + shift + p"
3. Package Controlに次を入力、Enter
4. BeautifyRuby
5. はい、終わり！！

## (2)手動でインストール

```
cd "~/Library/Application Support/Sublime Text 2/Packages/"
git clone git://github.com/CraigWilliams/BeautifyRuby.git
```

はい、終わり！！

# 実行方法

フォーマットしたソースを開いて     ctrl + alt + k

## 困っていること。

rbenvを利用しているとなぜだかできない。<br>フォーマットしようとすると、次のようなエラーが発生する     「check your ruby interpreter settings」 githubで[issues](https://github.com/CraigWilliams/BeautifyRuby/issues/12)で解決方法が上がっていて試したけど、だめだった。

くやしー
