+++
title = "chrome拡張機能 > background.jsからcontentscript.jsにメッセージを送る方法"
date = "2013-10-13"
tags = ["chrome"]
+++

わかる人にはわかるbackground.jsからcontentscript.jsにメッセージを送る方法を紹介します。

### 簡単にやりたい事を説明します。

chromeの右クリックメニューを追加して、追加したメニューをクリックした時に、表示しているサイトのベースカラーを変更したい。

- 右クリックメニューを拡張してメニューを追加する場合は、`background.js`に処理を記載します。
- 表示しているサイトに何か表示した場合は、`contentscript.js`に処理を記載します。

background.jsから、contentscript.jsの関数は直接呼び出すことができません。その逆も同じです。

じゃーどうすればいいのか?

<!--more-->

chrome拡張機能には、メッセージという仕組が用意されています。

メッセージを使ってbackground.jsからcontentscript.jsの関数を呼び出すことができます。

関数のパラメータはjson形式で渡す事ができます。

### 実装の方法
簡単に実装方法を紹介します。

#### メッセージを送信する側

1. `chrome.tabs.sendRequest`を実装します。
2. 必要なデータをjson形式で渡します。
3. 受信側からレスポンスが返った時に実行する処理をコールバック関数に記述します。

#### メッセージを受信する側

1. `chrome.extension.onRequest.addListener`を実装します。
2. 必要なデータをjson形式で受け取ります。
3. 任意の処理を記載します。
4. 送信側にレスポンスを返します。


必要最小限ソースと実行結果を次の載せます。

### メッセージの送信側
```javascript:background.js
chrome.contextMenus.create({
	"title": "校正チェック",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": function(info) {
		chrome.tabs.getSelected(null, function(tab) {
			// ★現在選択中のtab.idが必要なので、getSelectedメソッドの中にsendRequestを記述する。
			alert("step1");
			chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(response) {
				// ここに受信側からレスポンスが返ってきた時にする処理を記述する。
				alert("step3 " + response.farewell);
			});
		});
	}
});
```

### メッセージの受信側
```javascript:contentscript.js
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    alert("step2 " + request.greeting);

    //★ここに★ 表示しているサイトのベースカラーを変更する処理を記述する。

    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
    else
      //★ここ重要★ レスポンスがない場合でも、必ず空のオブジェクトを返す。
      sendResponse({}); // snub them.
  }
);
```

```json:manifest.json
{
    "name": "contentsスクリプト",
    "version": "0.1",
    "manifest_version": 2,
    "description": "選択中の文書の校正チェックを行うツールです。",
    "permissions": [
        "tabs", "<all_urls>", "contextMenus"
    ],
    "icons": {
        "16": "Apply.png"
    },
    "content_scripts": [
    	{
		"matches": ["<all_urls>"],
		"css": ["css/custom-theme/jquery-ui-1.10.3.custom.css"],
      		"js": [	"js/jquery-1.9.1.js",
       		    	"js/jquery-ui-1.10.3.custom.min.js",
       		    	"contentscript.js"
       		]
       	}
    ],
    "background": {
    	"scripts": ["background.js"]
    }
}
```

### 実行結果

	step1
	step2 hello
	step3 goodbye

### 参考

>[Chrome Extensions API リファレンス](http://dev.screw-axis.com/doc/chrome_extensions/guide/message_passing/)

以上
