+++
title = "GitからWinMergeを起動してソースを比較し編集したい"  
date = "2014-02-12"  
tags = ["Git"]  
banner = "banners/git-logo.png"
+++

CUIでソースの差分を比較するのは、結構つらいのでGUIで比較及び、そのまま編集ができないか調べたところあったので紹介します。  
`window`での設定手順と実行結果を解説します。

<!--more-->

### Windows
#### 設定手順
1. WinMergeのインストール

マージツールには、定番中の定番`WinMerge`を使用します。以下のサイトからダウンロードしてインストールしてください。

[ダウンロードサイト](http://www.geocities.co.jp/SiliconValley-SanJose/8165/winmerge.html)

インストールは、`次へ`ボタンを押してどんどん進めて下さい。とくにつまづくことはないと思います。  

2. `c:\Users\ユーザ名\.gitconfig`の編集

{{<gist tigawa 8938085>}}

#### 実行結果

1. 実行環境の前提

		$ git branch
		* gps            <-topicBranch
		  master         <-masterBranch

2. 次のコマンドを実行して、WinMergeを起動する。

チェックアウト中の`topicBranch`と`masterBranch`を比較しています。
		git difftool -d master

以下のように起動します。左が`masterBranch`で、右がチェックアウト中の`topicBranch`になります。
![スクリーンショット](/images/octopress/WS000000.JPG)

3. WinMergeから直接編集して保存しWinMergeを閉じてください。

4. 変更ソースをコミットしてください。

		git add .
		git commit -m "コメント"

以上でーす。

### 予告
次回は`ubuntu`でGUIなマージツールを使う方法を紹介します。

### 参考サイト
以下のサイトを参考にさせて戴きました。  
ありがとうございました。  
> [いろいろ備忘録日記](http://devlights.hatenablog.com/entry/20121114/p2)  
