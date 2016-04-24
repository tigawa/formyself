+++
title = "rails関連コマンドの実行速度を数倍速くする方法"
date = "2013-06-08"
tags = ["rails","SublimeText2"]
+++

自分のノートパソコンは、SSDではないのでどうしても、railsのコマンドやRspecの実行が遅い orz

数行のRspecの実行に、３～４秒くらいかかる。これではよい開発のリズムに乗れない。

Rspecの実行を速くする方法がないか、探したところあった。

それがこれ！！

<!--more-->

[zeus](https://github.com/burke/zeus#readme)  

**まさに神のようなライブラリ**<br>SSDを買わなくても、よい開発のリズムに乗れる。

どのくらい速いか、次の動画で紹介されています!!

![Watch the screencast!](http://s3.amazonaws.com/burkelibbey/vimeo-zeus.png)](http://vimeo.com/burkelibbey/zeus)

# 【試した環境】
Ubuntu 13.04

# 【インストール方法】

```
gem install zeus
```

# 【使い方】
対象のrailsアプリのフォルダに移動して、zeusのスタートコマンドを実行する。

** これは必ず実行する必要がある。毎回端末の起動時に１回だけ実行すればOK！！ **

```
cd <Rails.Root>
zeus start
```

上記のコマンド実行後に、次のコマンドが使えるようになる。

```
zeus console
zeus server
zeus test test/unit/igawa_test.rb
zeus test spec/igawa_spec.rb
zeus generate model omg
zeus rake -T
zeus runner omg.rb
```

- railsを起動する時は、`rails server`でなく`zeus server`を実行してください。 一瞬で起動します。
- Rspecを実行する時は、`zeus test spec/igawa_spec.rb`のように実行してください、

## 追加 2013/06/09
- Zeus Test で スペックを実行すると 2度実行されることの解決方法が紹介されていました。
- [こちらを参考にしてください。](http://blog.eiel.info/blog/2012/12/27/zeus-test-twice/)


## Sublime Text2からzeusを介してRspecを実行する方法
### 【前提】
Sublime Text2をRubyTestをインストールしておくこと。 [こちらを参考にしてください](/blog/2013/06/06/rspec)

### 【設定方法】
- Sublime Text2から次のように設定ファイルを開く

  ```
   メニュー > Preferences > Package Settings > RubyTest> Settings-User
  ```

- 設定ファイルに以下を貼り付ける。

  ```
   {
     "run_cucumber_command": "zeus cucumber {relative_path} --no-color",
     "run_single_cucumber_command": "zeus cucumber {relative_path}:{line_number} --no-color",

     "run_rspec_command": "zeus test {relative_path}",
     "run_single_rspec_command": "zeus test {relative_path}:{line_number}"
   }
  ```

### 【使い方】
[こちらを参考にしてください](/blog/2013/06/06/rspec)

以上
