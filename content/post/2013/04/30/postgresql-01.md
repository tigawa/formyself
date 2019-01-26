+++
title = "postgreSQL特徴"
date = "2013-04-30"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

### なぜPostgreSQLなのか?

- MySQLと違い商用でも無償で利用可能で、改変も自由にできる。
- 自社製品にPostgreSQLを組み込んで販売してもOKということ！！
- しかも自社製品のソースを公開する必要がない!!

<!--more-->

### 他のDBMSにないであろう機能

- シーケンス専用のデータ型(serial,bigserial)がある。このデータ型にするとシーケンスを自動的に作ってくれる！！(なんとすばらしい)
- データ型に配列がある。（非正規形やり放題！！）
- 関数インデックス -> インデックスに関数が使用できる

		CRATE INDEX tbl_idx2 ON tbl (upper(c1));

- 部分インデックス -> あるカラムが、9割が同じ値の場合、残り１割にだけインデックスを作成できる機能

		/* c1の値が100より小さい部分にインデックスを作成 */
		CRATE INDEX tbl_idx ON tbl (c1) WHERE c1 < 100;

- psqlのメタコマンドで簡単にテーブル、インデクスの一覧が確認できる。

### オープンソースデータベース

PostgreSQL Global Development Groupによりコミュニティベースで公開され、開発、配布されている。

### マルチプラットフォーム

LinuxやWindwosなど様々なOSで動作する。

### レプリケーション

PostgreSQL 9.0からは、ホットスタンバイとストリーミングレプリケーションによる非同期レプリケーションが利用可能

### リンク

- [PostgreSQLとは?](http://www.postgresql.jp/document/9.0/html/intro-whatis.html "PostgreSQLとは?")
- [PostgreSQL9.0の新機能](http://lets.postgresql.jp/documents/technical/9.0/ "PostgreSQL9.0の新機能")

### 用語

 用語 | 説明
:-----------------|:-------------------------------
 データベースクラスタ | データベースの格納領域(以下ディレクトリ）
 ディレクトリ構造 | ![ツリー構造](/images/PostgreSQL_Tree.png "ツリー構造")
 PostgreSQLサーバ | PostgreSQLのデーモン、サービス
 インスタンス | データベースクラスタとPostgresQLサーバの組
 PostgreSQLの管理ユーザ | データベースクラスタを作成したOSユーザ
 データベースユーザ | その名の通りデータベースのユーザ、但しデータベースクラス全体で共通
 スーパーユーザ | データベースに対するあらゆる操作が可能<br>データベースクラスタ作成時のOSユーザで、スーパーユーザが初期状態で作成される
 一般ユーザ | スーパーユーザ権限を持たないユーザ
