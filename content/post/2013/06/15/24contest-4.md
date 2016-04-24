+++
title = "24コンテストメモ"
date = "2013-06-15"
tags = ["コンテスト"]
+++

24時間コンテストに参加した時の作業メモを残します。

<!--more-->

# open shift Clientのインストール

```
sudo gem install rhc
rhc setup
```

# rails プロジェクト
## .gitignoreの設定
.gitignore     /vendor/bundle     /public/assets/*     /db/schema.rb

## タイムゾーンの設定
[タイムゾーンの設定](http://qiita.com/items/68341489a9c5149b815d)

# cronのファイルから定期的に実行する
curl [http://www.example.com/](http://www.example.com/)

# bootstrap_and_overrides.css.less
body { padding-top: 50px; }

# open shift cron設定
```
rhc cartridge list
rhc cartridge start -a lifeplus -c cron-1.4
rhc cartridge stop -a lifeplus -c cron-1.4
rhc cartridge restart -a lifeplus -c cron-1.4
rhc cartridge reload -a lifeplus -c cron-1.4
rhc cartridge status -a lifeplus -c cron-1.4
```
