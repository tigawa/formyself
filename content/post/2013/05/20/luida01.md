+++
title = "Facebook的なユーザ検索を実装したの時のメモ"
date = "2013-05-20"
tags = ["rails"]
+++

# 実装イメージ

こんな感じの検索を実装したい。とりあえずはユーザ検索を実現する。

![実装イメージ](images/Facebookからの検索.png)

<!--more-->

# 実装手順

- トピックブランチの作成

  ``` text
    #readmineのチケット番号でトピックブランチを作成
    git checkout -b ticket25
  ```

- コントローラを追加

  ```
    be rails g controller serach index
  ```

- viewの編集

**編集中**
