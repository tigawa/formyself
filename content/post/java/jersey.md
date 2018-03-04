+++
banner = "banners/java-logo.png"
date = "2018-03-04T14:37:06+09:00"
description = "jersey 紹介"
tags = ["java"]
title = "jerseyの紹介"
+++

jersey(ジャージー)について紹介します。

jerseyとは、 Sun による JAX-RS のリファレンス実装です。
つまりは、JAX-RS という、RESTful APIを作るのに特化した仕様があり、それをSunが実装したものです。

jersey以外にも、JAX-RS実装はいくつかあります。

<!--more-->

| ライブラリ名 | 説明　      | GitHubの⭐の数(執筆時点) |
|:----------|:---------| -------------------------------: |
| jersey     | sunによる実装 |  2,624件 |
| CXF        | Apacheによる実装　SOAPなど幅広い | 398件 |
| RESTEasy |JBoss の JAX-RS プロジェクト | 687件 |
| Restlet  | JAX-RS が生まれる前から存在している | 553件 |

なぜ、jerseyを選んだかというと、`REST java`で検索した際に、一番先に見つかったのと、GitHubでStarの数が一番多いからです。

## 実装例

### bulid.gradle　

以下を追加する。

```
// 2.26だと、ClientBilderが使用できない　なぜ？
compile group: 'org.glassfish.jersey.core', name: 'jersey-client', version: '2.25'
// json->オブジェクトに変換するライブラリ
compile group: 'org.glassfish.jersey.media', name: 'jersey-media-json-jackson', version: '2.25' 

```

### java　(Getの実装例)

```
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.GenericType;

〜 省略 〜

Client client = ClientBuilder.newClient();

List<Person> list = 
client.target("http://localhost:8882")
  .path("/sample_json")
  .queryParam("token", "xxxxx")
  .request()
  .get(new GenericType<List<Person>>() {});
```

### java (Postの実装例)

```
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedHashMap;

〜 省略 〜

Client client = ClientBuilder.newClient();

String result =
client.target("http://localhost:8882")
      .path("/sample_json")
      .request(MediaType.APPLICATION_XML_TYPE)
      .header("X-token", "ID:xxxxxx")
      .post(Entity.entity(dto, MediaType.APPLICATION_FORM_URLENCODED_TYPE),;
```

HTTPステータスが404や、500の場合は、例外が発生します。
どんな例外が発生するか調べてみました。

| httpStatus | 例外                                    |
|:----------|:--------------------------------------- |
| 接続エラー | javax.ws.rs.ProcessingException          |
| 400      | javax.ws.rs.BadRequestException          |
| 404      | javax.ws.rs.NotFoundException            |
| 409      | javax.ws.rs.ClientErrorException         |
| 500      | javax.ws.rs.InternalServerErrorException |

簡単につかえて、とても便利です。積極的に使って行きたいですね。

以上です。