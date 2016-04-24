+++
title = "Gitで作成者毎にコミットログの統計を表示する"
date = "2013-05-30"
tags = ["Git"]
banner = "banners/git-logo.png"
+++

誰が一番コミットしているのとかを調べる時に重宝しそう！！ <!--more-->

```
git shortlog

 -s 作成者とコミット件数をサマライズする
 -n コミット件数の降順にソートする
 -e 作成者のemailアドレスを表示する
```

出力例

```
tigawa (33):
    テストデータを追加
    Profile.rb belong_to -> belongs_to に変更
    テストデータを追加
    テストデータ　プロファイル追加
```
