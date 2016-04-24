+++
title = "SwiftからWKWebViewを触ってみる"  
date = "2015-06-24"  
tags = ["swift"]  
menu = ""  
banner = "banners/Swift_logo.jpg"
+++

以下のサンプルを解説します。 手探り状態なので、 わかっていることを徐々に追加していきます。

<!--more-->

{{< gist tigawa 9043ba5afe98131e4fba >}}

# 登場人物
- UIViewController
- WKWebView
- CGRect

# UIViewController

プロパティ | 説明
----- | ----------------
title | ナビゲーションバーに表示する名前
view  | コントローラーに紐づくビュー
      |

メソッド                          | 説明
----------------------------- | -----------------
loadView                      |
viewDidLoad                   | 初回ロードされた時のみ呼び出される
viewWillAppear:(BOOL)animated | 画面が表示される都度呼び出される

# サイズや位置の指定
UIViewやそのサブクラスでサイズや位置を指定するにはCGRect、CGPoint、CGSizeクラスを使用します。
各クラス毎に、サイズおよび、位置が指定できるものが違います。

| クラス  | サイズ |  位置  |
| ------ | ----- | ----- |
| CGRect |   ○︎   |   ○   |
| CGPoint|   -   |   ○   |
| CGSize |   ○   |   -   |

凡例）○：指定必須 -：指定不可

## 参考
以下を参考にさせていただきました。

- [[Swift] WKWebViewを使ってみる(1) - ウェブページを表示する](http://log.whitebook.info/swift/2014/11/swift-wkwebview-1.html)
- [iPhoneアプリ開発の虎の巻](http://iphone-tora.sakura.ne.jp/uiviewcontroller.html)
- [iPhone画面名称](http://iphone-tora.sakura.ne.jp/iphone_screenname.html)
- [UIViewControllerまとめ](http://qiita.com/edo_m18/items/189acd18f1ecc368b5b0)
