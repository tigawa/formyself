+++
title = "OpenShift railsのgenerateでエラー"
date = "2013-09-28"
tags = ["OpenShift","rails"]
+++

OpenShiftでrailsプロジェクトを作成して、`git clone`してローカルにプロジェクトを取り込み

`bundle install`して`rails generate`コマンドを実行するとエラーになりました。

なぜいきなり!!

その時の回避方法をメモします。

<!--more-->

# 実行したコマンド

```
bundle exec rails generate controller sentence
```

# エラーログ
```text:log     /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/execjs-1.4.0/lib/execjs/runtimes.rb:51:in `autodetect': Could not find a JavaScript runtime. See https://github.com/sstephenson/execjs for a list of available runtimes. (ExecJS::RuntimeUnavailable)     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/execjs-1.4.0/lib/execjs.rb:5:in `<module:ExecJS>'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/execjs-1.4.0/lib/execjs.rb:4:in `<top (required)>'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/coffee-script-2.2.0/lib/coffee_script.rb:1:in `require'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/coffee-script-2.2.0/lib/coffee_script.rb:1:in `<top (required)>'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/coffee-script-2.2.0/lib/coffee-script.rb:1:in `require'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/coffee-script-2.2.0/lib/coffee-script.rb:1:in `<top (required)>'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/coffee-rails-3.2.2/lib/coffee-rails.rb:1:in `require'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/coffee-rails-3.2.2/lib/coffee-rails.rb:1:in `<top (required)>'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler/runtime.rb:72:in `require'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler/runtime.rb:72:in `block (2 levels) in require'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler/runtime.rb:70:in `each'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler/runtime.rb:70:in `block in require'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler/runtime.rb:59:in `each'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler/runtime.rb:59:in `require'     from /home/igawa/.rbenv/versions/1.9.3-p362/lib/ruby/gems/1.9.1/gems/bundler-1.3.5/lib/bundler.rb:132:in `require'     from /home/igawa/repo/proofreadingchecker/config/application.rb:7:in `<top (required)>'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/railties-3.2.13/lib/rails/commands.rb:24:in `require'     from /home/igawa/repo/proofreadingchecker/vendor/bundle/ruby/1.9.1/gems/railties-3.2.13/lib/rails/commands.rb:24:in `<top (required)>'     from script/rails:6:in `require'     from script/rails:6:in `<main>'
```

# 対応方法

Gemfileに以下のライブラリを追加して、もう一度`bundle install`すると正常に、`generate`を実行できました。

初めからGamefileに追加してくれてもいいのにorz

`Gamefile`

```
gem 'therubyracer'
```

以上でーす。
