+++
title = "Web API 導入の勘どころ"
date = "2013-10-09"
tags = ["WebAPI"]
+++

Web APIはクライアント側からAjaxで呼び出した方がいいの？

それともサーバ側から呼び出した方がいいの？

そんな素朴な疑問にお答えします。

<!--more-->

すばり導入するWeb APIによります。

順を追って説明します。

### Ajaxの制限

何でもできそうなAjaxですが、**同一生成元ポリシー**(Same-Origin Policy)という制約があります。

この制約があるため、簡単にはAjaxでWeb APIを呼び出す事ができません。

一言でいうと自サーバへは通信できますが、他のサーバへは通信できません。

#### Ajax通信できるURL

**http://example.com/a.html**上でJavaScriptから直接Ajax通信できるのは次のURLです。

つまりドメインの異なるWebAPIに対してAjax通信できません!!

URL | 通信可否 | 備考
:--- | :--- | :---
http://example.com/check  | ○可能 | http://example.comまで同じなので通信可能
http://xxxxxxxx.com/check | ×不可能 | ドメインが異なる
https://example.com/check | ×不可能 | プロトコルが異なる
http://example.com:8080 | ×不可能 | ポートがことなる。

### じゃあどうやって、異なるドメインのWebAPIをAjaxで呼び出すのか？
WebAPI側が**JSONP**または**CORS(Cross-Origin Resouce Sharing)**のどちらかに対応している必要があります。

JSONPはその名の通り、WebAPIの戻りのフォーマットがJSONである必要があります。

WebAPIがXMLのみ対応している場合は、JSONPは諦めて下さい。

JSONPとCORSの詳細は下記を参照してください。

- [JSONP](http://gihyo.jp/dev/serial/01/crossbrowser-javascript/0011)
- [CORS](http://dev.classmethod.jp/cloud/cors-cross-origin-resource-sharing-cross-domain/)

### WebAPIが、JSONPにもCORSにも対応していない場合

Ajaxで異なるドメインのWebAPIを呼び出すのは諦めてください。
じゃーどうするか!!

サーバ側からWebAPiを呼び出すようにしてください。

クライアントからすると、常にサーバと通信するので同一生成元ポリシーには違反しません。

### おまけ

リバースプロキシサーバを用意できる場合は、異なるドメインのWebAPIを呼び出す事が可能です。

異なるドメインのWebAPIにアクセスする場合でも、リバースプロキシを経由するイメージです。

クライアントからすると、リバースプロキシサーバとしか通信しないので、同一生成元ポリシーに違反しません。

以上
