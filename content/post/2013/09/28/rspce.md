+++
title = "railsの初歩 > rspecのインストール"
date = "2013-09-28"
tags = ["rails"]
+++

今更ながらrailsにrspeceをインストール手順を紹介しまーす。

<!--more-->

# インストール手順

- `Gemfile`に以下のように追記します。

  ```
   group :development, :test do
         gem "rspec"
         gem "rspec-rails"
   end
  ```

  > **注意**`:development`をつけないと`generate`した時にrspecの雛形が自動生成されないので注意してください。

- rspceのライブラリのインストール  

  ```
   bundle install --path=vendor/bundle --without production
  ```

- `spec/spec_helper.rb`の作成  

   次のコマンドで`spec/spec_helper.rb`を作成する。

  ```
   bundle exec rails g rspec:install
  ```

- テストクラス  

   各テストクラスの先頭に次を記載する。

  ```
   require 'spec_helper'
  ```

- rspecのクラスをgenerateする

   senteceモデルをgenerateする。  

  ```
   be rails g rspec:model sentence
  ```

# 参考

以下のサイトを参考にさせていただきました。<br>ありがとうございました。  

> [RSpecでRailsのテストをしてみるテスト。](http://ginpen.com/2012/02/14/rspec-rails/)
> [Railsの自動テスト(RSpecでModelのテスト編)](http://tech.gmo-media.jp/post/45955244694/rails-rspec-model)
> [RSpec without Railsなspec_helper](http://qiita.com/hash/items/b7a5d5d0e9b1132a5bdf)  

以上
