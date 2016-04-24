+++
title = "コマンド一発でGistへソースを登録する方法"
date = "2013-07-28"
tags = ["gist","octopress"]
+++

今までGitHubのサイトを開いてGistに登録していました。

調べてみるとコマンド一発で、ローカルのソースをGistに登録する方法がありました。

<!--more-->

[gist](https://github.com/defunkt/gist)コマンドを利用します。

# ブログの環境
-ubuntu 12.04 LTS

# 事前準備
- gistをインストールしてください。

  ```
   gem install gist
  ```

- GitHubのユーザとパスワードを設定してください。

  <font color="red">※これをしないと自分のGistに登録されません</font>

  ```
   gist --login
  ```

# よく使いそうなコマンド
よく使いそうなコマンドを紹介します。
- install.shをGistに**public**で登録する

  ```
   gist install.sh
  ```

- install.shをGistに**private**で登録する

  ```
   gist -p install.sh
  ```

- Gistにコメント付きで登録する

  ```
   gist -d "コメント" install.sh
  ```

- Gistのファイルを更新する

  ```
   #-uの後ろのNoは、新規登録した後に表示される番号を指定すればOK
   gist install.sh -u 6093395
  ```

# おまけ
Gistに登録したソースをoctopressで公開する方法
- Gistにソースを登録する

  ```
   gist jdk_install.sh
   https://gist.github.com/6098050   #←★(1)★
  ```

- octopressの記事にGistのソースを指定する

  記事に`★(1)★`で表示された番号を指定します。

`text : xxxx.markdown {% raw %}{% gist 6098050 %}{% endraw %}`

`gen_deploy`して確認すると次のように表示されます。

{{< gist tigawa 6098050 >}}

以上
