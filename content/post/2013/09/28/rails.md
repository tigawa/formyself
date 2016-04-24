+++
title = "railsの初歩 > コントローラ名の付け方"
date = "2013-09-28"
tags = ["rails"]
+++

モデルに関連するコントローラと、モデルに関連しないコントローラで名前の付け方に違いがあるようなのでメモしまーす。

<!--more-->

# モデルを扱うコントローラ → コントローラ名を複数形にする。

      rails generate controller items

上記のコマンドを実行すると、以下のコントローラが作成される。

名称              | 例
:-------------- | :------------------
コントローラ名         | items
コントローラクラス名      | ItemsController
コントローラクラスのファイル名 | items_controller.rb

# モデルを扱わないコントローラ → コントラー名を複数形にする必要はない。

      rails generate controller item

# 参考

以下のサイトを参考にさせていただきました。

ありがとうございました。

> [コントローラの作成と命名規則(命名規約)](http://www.rubylife.jp/rails/controller/index1.html)
