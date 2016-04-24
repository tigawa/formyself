+++
title = "特定の環境を除いてgemをインストールしたい"
date = "2013-05-23"
tags = ["rails"]
+++

毎回忘れるので、とりあえずメモしまーす。

Gemfileを次のように記述する。

<!--more-->

```ruby
group :production do
  gem 'mysql2'
end
```

次のようにbundle installすれば、開発環境では、mysql2を除外できる。
      bundle install --path=vendor/bundle --without production
