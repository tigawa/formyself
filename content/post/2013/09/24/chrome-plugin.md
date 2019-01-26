+++
title = "chromeの拡張機能の実装方法"
date = "2013-09-24"
tags = ["chrome"]
+++

chromeの拡張機能が意外に簡単に実装できるので、ご紹介したいと思います。

ざっくり説明するとhtmlで実装できます。

<!--more-->

# 用意するファイル
適当なフォルダに以下を用意してください。
- manifest.json
- popup.html
- icon.png (19X19)

`manifest.json`は、次のように拡張機能の基本的な情報を設定します。

```json:manifest.json
{
  "name": "ever paster",
  //必須（適当なアプリケーション名)
  "version": "0.1",
  //必須(適当なバージョン）
  "manifest_version": 2,
  //必須（お決まり）
  "description": "evernoteで管理しているメールアドレス、ID、雛形文書等などを呼び出して、貼り付けることができます。",
  "browser_action": {
    "default_icon": "icon.png",　  //chromeに表示するするアイコン
    "default_title": "ever paster",
    "default_popup": "popup.html" //アイコンをクリックした時に表示するhtml
  }
}
```

`popup.html`は、アイコンをクリックした時に、表示するhtmlです。上記の`manifest.json`で呼び出すように定義しています。

今回は単純にリンクを表示するだけのhtmlを用意しました。

```html:popup.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
</head>
<body>
<ul>
    <li><a href="http://tigawa.github.io" target="_blank">igawa</a></li>
    <li><a href="http://fukuishere.github.io" target="_blank">fukuda</a></li>
</ul>
</body>
</html>
````

# 実行方法
storeで公開する方法もありますが、今回は手っ取り早くchromeで自作した拡張機能を動作させる方法を紹介します。

- chromeの設定から拡張機能を選択する

   ![chromeの設定から拡張機能を選択する](/images/chrome_tool.png)

- "デベロッパーモード"にチェックをつけて、"パッケージ化されていない拡張機能を読み込む"を選択します。

   ![「パッケージ化されていない拡張機能を読み込む」を選択します](/images/chrome2.png)

- 上記で用意したディレクトリを選択します。

   ![ディレクトリを選択します](/images/chrome3.png)

- ここまでで、先ほど登録した拡張機能がchromeから使えるようになります。次は実行イメージです。

   ![実行イメージ](/images/chrome4.png)

どうでした？

簡単に実装できたでしょうか？

次回は、もう少し踏み込んだ機能を解説できたらと思います。
