+++
title = "SublimeText3でRubyをコーディングする際の最低限のインストール&設定（Windows）"
date = "2014-03-09"
tags = ["SublimeText3","ruby"]
+++

RubyからExcelを操作するコードを書きたかったので、WindowsマシーンにRubyの開発環境を用意しました。
せっかくなのでインストールした時のメモを残します。

エディタは使いやすいSublimeText3をインストールする事にしました。
プラグインはRubyをコーディングする上で必要最小限のものを厳選しました。

<!--more-->

### 環境
Windows7 64ビット

### 今回インストールするもの

- Ruby
- SublimeText3
- SublimeText3のプラグイン

	プラグイン名 | 効果
	:--- | :----
	[IME Support](#IMESupport) | デフォルトでは日本語入力がインラインで入力できない。それを解決してくれるやつ
	[SublimeCodeIntel](#SublimeCodeIntel)  | Rubyのクラス、メソッドなど`shift` + `ctrl` + `space`で入力補完してくれる。クラスの定義先、定義元のファイルへジャンプしてくれる。
	[SublimeLinter](#SublimeLinter) | Rubyの文法チェックをリアルタイムでしてくれるやつ
	[BeautifyRuby](#BeautifyRuby) | Rubyのソースコードをフォーマットしてくれるやつ ※windowsだと改行が余分に挿入されるためインストールしないようがよいかも

- [その他設定](#etc)  *2014/05/22 追記*  



cTagというプラグインを選ばなかった理由
	cTagは定義先ファイルへジャンプはしますが、入力補完はしてくれないので、プラス入力補完をしてくれるSublimeCodeIntelを選択しました。



### Rubyインストール

1. Rubyのインストールについては、以下のサイトの`MatzRuby`のインストールを参考にしてください。

	* [Windows にいろんな Ruby をインストール(MatzRuby, IronRuby, JRuby, Topaz, mruby)](http://yohshiy.blog.fc2.com/blog-entry-239.html)
	* [本家ダウンロードサイト](http://Rubyinstaller.org/downloads/)

### SublimeText3本体のインストール

1. 次のリンクから、SublimeText3本体をダウンロードしてください。

	* [SublimeText3](http://www.sublimetext.com/3)

		自分の環境は、Windows7 64ビット環境なので以下をダウンロードします。
 		![ダウンロードサイト](/images/octopress/WS000002.JPG)

2. インストール

	ダウンロードしたファイルを実行して、インストラーを起動します。  
	どんどん進めてインストールを完了してください。  

3. プラグインをインストールする前の準備

	1. SublimeText3を起動します。
	2. メニューから　`View > Show Console` を選択
	3. 以下をコピーしてください。  (Text3専用)

		```text
		import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
		```

	4. 狭いですが画面下のテキストボックスに貼り付けてEnterを押下してください。
	![貼り付け先](/images/octopress/sublimetext3.png)

	**これでプラグインをインストールする準備が整いました。**

### <span id="IMESupport"/>IME Supportのインストール

1. 'Ctrl+Shift+p'でPackage Controlを起動します。

2. "install"と入力して、以下を選択します。

![選択したイメージ](/images/octopress/WS000003.JPG)

3. "IME Support"と入力して、以下を選択します。

![実行結果](/images/octopress/WS000004.JPG)

### <span id="SublimeCodeIntel" /> SublimeCodeIntelのインストール

1. 'Ctrl+Shift+p'でPackage Controlを起動します。

2. "install"と入力して、以下を選択します。

![選択したイメージ](/images/octopress/WS000003.JPG)

3. "SublimeCodeIntel"と入力して、以下を選択します。

![実行結果](/images/octopress/WS000005.JPG)

4. 初期設定

	1. メニューから　`Preferences > Package Settings > SublimeCodeIntel > Settings-Default`を選択します。  
	2. 開いたファイルの内容を全てコピーします。  
	3. メニューから　`Preferences > Package Settings > SublimeCodeIntel > Settings-User`を選択します。  
	4. 2 でコピーした内容を貼り付けます。  
	5. 次のコードをコピーします。以下の赤枠の場所に貼り付けてください。  
			"Ruby": {
				"ruby": "C:\\Ruby193\\bin\\ruby",
				"rubyExtraPaths": ["C:\\Ruby193\\lib\\ruby\\gems\\1.9.1"]
			}
		![追記した結果](/images/octopress/WS000006.JPG)
	6. 5で追記した部分を、Rubyのインストール場所に合わせて変更してください。  
	　 **※少しハマったポイント**
	   * ruby.exeまで指定するとエラーになります、rubyと指定してください。  
	   * パスの/(バックスラッシュ)は、//と指定してください。  


### <span id="SublimeLinter" />SublimeLinterのインストール
1. メニューから　`Preferences > Browse Packages`を選択して、Pakagesフォルダを開きます。  
2. コマンドプロンプトを起動して、１で開いたPakagesフォルダを指定してカレントディレクトリを移動します。  
3. 次のコマンドを実行します。  
		git clone https://github.com/SublimeLinter/SublimeLinter3.git SublimeLinter
	gitをインストールしていない場合は、次のサイトを参考にインストールしてから、上記のコマンドを実行して下さい。  
	[WindowsにGit環境をインストールする](http://codezine.jp/article/detail/7077?p=2)  

4. SublimeText3を再起動します。  
5. 'Ctrl+Shift+p'でPackage Controlを起動します。  
6. "install"と入力して、以下を選択します。  
![選択したイメージ](/images/octopress/WS000003.JPG)
7. "SublimeLinter-ruby"と入力して、以下を選択します。  
![実行結果](/images/octopress/WS000007.JPG)
8. 初期設定
	1. メニューから　`Preferences > Package Settings > SublimeLinter > Settings-User`を選択します。  
	2. "-Ku"を追記してください。  
	![追記した結果](/images/octopress/WS000014.JPG)

### <span id="BeautifyRuby" />BeautifyRubyのインストール
1. 'Ctrl+Shift+p'でPackage Controlを起動します。  

2. "install"と入力して、以下を選択します。  
![選択したイメージ](/images/octopress/WS000003.JPG)

3. "BeautifyRuby"と入力して、以下を選択します。  
![実行結果](/images/octopress/WS000015.JPG)

4. 初期設定
	1. メニューから　`Preferences > Package Settings > BeautifyRuby > Settings-User`を選択します。  
	2. 次のように環境に合わせて変更してください フォーマットすると同時に保存されるのが嫌だったので`false`に変更しています。  

	変更前  
	![変更前](/images/octopress/WS000019.JPG)

	変更後  
	![変更後](/images/octopress/WS000018.JPG)


### 全てのプラグインをインストールしたら
念のため、SublimeText3を再起動します。

### 使い方 ＆ 動作確認
#### IME Supportの動作確認  
次のように全角の”あ”が入力できればOKです。  
![IME Supportの動作確認](/images/octopress/WS000009.JPG)

#### SublimeCodeIntelの動作確認
次のように、Hashのメソッドを補完できればOKです。  
![SublimeCodeIntelの動作確認](/images/octopress/WS000012.JPG)

#### SublimeLinterの動作確認
次のように、クラスとメソッドの区切りを、".(ピリオド）"ではなく、",（カンマ）"に変更して、左側に赤●が付けばOKです。  
![SublimeCodeIntelの動作確認](/images/octopress/WS000011.JPG)

#### BeautifyRubyの動作確認
`ctrl + alt + k`を押下して、ソースコードがフォーマットされることを確認します。

### <span id=etc />その他設定
* インデントを整形してくれるコマンドのショートカットキーを設定  
  メニューの`Preferences -> Key Bindings - User`を選択して以下の一文を追加します。
		{"keys": ["ctrl+alt+]"], "command": "reindent", "args": { "single_line": false }}

`ctrl + alt + ]`でインデントが整形されます。



### 使ってみて気づいたこと。
BeautifyRubyはwindowsで改行すると`CR`が余分につくため、うまく改行されない。  
また、正しくフォーマットでいる回避方法がわかったら、ブログに記載しようと思います。  


以上でーす。
