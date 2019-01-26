+++
title = "GitからGUIなマージツールを起動してソースを比較し編集したい(ubuntu)"
date = "2014-02-20"
tags = ["Git"]
banner = "banners/git-logo.png"
+++

windowsでは、WinMargeを使って比較する方法を紹介しました。  
ubuntuでは、**meld**というマージツールで実現する方法を紹介します。  

[windowsでは、WinMargeを使って比較する方法](/blog/2014/02/12/difftool/index.html)

<!--more-->

### Ubuntu
#### 設定手順

1. Meidのインストール  

        sudo apt-get install meld

2. .gitconfigを次のように編集してください。

	```text:.gitignore
	[core]
		quotepath = false
	[user]
		name = tigawa
		mail = ihciiat@gmail.com
		email = ihciiat@gmail.com
	[color]
		ui = true
	#▼▼ここ以下を追加
	[diff]
	    tool = meld
	```

3. Git の 1.7.11 以上がインストールされている必要があります。

	バージョンを確認して、古い場合は、最新のgitをインストールしてください。

        git --version

	インストール方法

        $ sudo add-apt-repository ppa:git-core/ppa
        $ sudo apt-get update
        $ sudo apt-get install git

#### 実行結果

1. 実行環境の前提

        $ git branch
        * gps            <-topicBranch
          master         <-masterBranch

2. 次のコマンドを実行して、meldを起動する。

チェックアウト中の`topicBranch`と`masterBranch`を比較しています。

        git difftool -d master

以下のように起動します。左が`masterBranch`で、右がチェックアウト中の`topicBranch`になります。
![スクリーンショット](/images/octopress/WS000001.JPG)

3. meldから直接編集して保存し閉じてください。

4. 変更ソースをコミットしてください。

      git add .
      git commit -m "コメント"

以上です。
