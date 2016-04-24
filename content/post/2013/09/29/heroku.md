+++
title = "herokuにrailsアプリを配備する"
date = "2013-09-29"
tags = ["rails","heroku"]
+++

railsアプリをherokuに配備する方法を紹介します。

<!--more-->

# 環境
- ubuntu 12.04LTS
- Rails 3.2.14

# 事前準備
## 1.herokuにユーザ登録
以下のサイトからユーザ登録してください。

[herokuのユーザ登録サイト](https://id.heroku.com/signup)  

## 2.herokuのアプリをローカルにインストール

次のコマンドを実行して`heroku toolbelt`をインストールします。

- `gem`からインストールするより、次のコマンドでインストールするのが推奨のようです。

        wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh

- herokuツールからログインします。 ※初めの１回だけログインすれば、OKです。

        heroku auth:login #対話式にログインを行います。

# 配備手順
簡単なrailsのアプリを作成して、herokuへ配備するまで説明します。

## 1.railsアプリの作成
- railsアプリの新規作成

        rails new memoller --skip-bundle

- Gemfileの編集

Gemfileに追記します。

  ``` ruby
  gem 'therubyracer'
  group :production do
    gem 'pg'
  end
  ```

**※注意**

`sqlite3`がherokuで有効になっているとエラーになります。

Gemfileが次のようになっていない場合は修正してください。デフォルトから変更していない場合は特に気にする必要はありません。

  ```ruby
  group :development,:test do
    gem 'sqlite3'
  end
  ```

- bundleインストール

        bundle install --path=vendor/bundle

- scaffold

        bundle exec rails g scaffold memo title:string content:text

- migrate

        bundle exec rake db:migrate

- ローカルのサーバを起動

        bundle exec rails s

- 次のurlをクリックして、動作確認します。

    [http://localhost:4000/memos](http://localhost:4000/memos)

## 2.herokuに配備

- herokuにアプリを登録します。 ※最後の引数はアプリ名です、herokuの全ユーザの中で一意にする必要があります。

        heroku create memoller

- herokuにソースをアップロードします。

        git add .
        git commit -m "first committed."
        git push heroku master

- heroku上のデータベースにテーブルを作成します。

        heroku run rake db:create
        heroku run rake db:migrate

- ブラウザから確認します。　※なんと次のコマンドでブラウザを起動して確認できます。

        heroku apps:open

# 参考サイト

以下のサイトを参考にさせていただきました。<br>ありがとうございました。  

> [Railsで簡単なアプリをscaffoldで作ってHerokuにデプロイするまで](http://qiita.com/tstomoki/items/cd2391e028dc44dd6f409)  
> [heroku postgresのDBにローカルPCから遠隔アクセスする](http://qiita.com/emadurandal/items/b955a4eaa273529ebba0)  
> [HerokuにRails 3.2.9/Bootstrapでデプロイ 最短・簡単ガイドだよ！](http://morizyun.github.io/blog/heroku-rails-postgresql/)

以上
