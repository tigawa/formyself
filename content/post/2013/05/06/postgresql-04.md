+++
title = "PostgreSQL コマンド"
date = "2013-05-06"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

PostgreSQLでよく使いそうなコマンド
<!--more-->

コマンド                                                                         | 説明　                        | 使用例
:--------------------------------------------------------------------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
[initdb](http://www.postgresql.jp/document/9.2/html/app-initdb.html)         | 指定したディレクトリにデータベースクラスタを作成する | initdb --encoding=UTF8 --no-locale /home/postgres/data
[pg_ctl](http://www.postgresql.jp/document/9.1/html/app-pg-ctl.html)         | PostgreSQLサーバの初期化、起動、停止、制御 | pg_ctl start -D /home/postgre/data -w -t 120
[createuser](http://www.postgresql.jp/document/9.2/html/app-createuser.html) | データベースユーザを登録する             | createuser -U user1 -P
[dropuser](http://www.postgresql.jp/document/9.2/html/app-dropuser.html)     | データベースユーザを削除する             | dropuser -i user1
[cratedb](http://www.postgresql.jp/document/9.2/html/app-createdb.html)      | データベースを作成する                | createdb -U user1 examdb <br>  ★=> *user1でexamdbを作成、テンプレートデータベースはtemplate1*
psql -l                                                                      | データベースを確認する                | psql -l
[dropdb](http://www.postgresql.jp/document/9.2/html/app-dropdb.html)         | データベースを削除する                | dropdb -U user1 -i  examdb <br>  ★=> *user1でexamdbを削除 -iは削除前に確認する*
[createlang](http://www.postgresql.jp/document/9.2/html/app-createlang.html) | 手続き言語を登録する                 | createlang plpgsql template1<br>  ★=> *plpgsqlをtemplate1に登録*<br>                                                                                            createlang -l template1
[droplang](http://www.postgresql.jp/document/9.2/html/app-droplang.html)     | 手続き言語を削除する                 | droplang plpgsql template1<br>  ★=> *plpgsqlをtemplate1から削除*
[reindexdb](http://www.postgresql.jp/document/9.2/html/app-reindexdb.html)   | インデックスを再作成する               | reindexdb test
[psql](http://www.postgresql.jp/document/9.2/html/app-psql.html)             | データベースへ接続する                | psql -U user1 examdb

よく使いそうなpsqlのメタコマンド

メタコマンド | 説明
:----- | :----------------------------------------------
\q     | psqlを終了する。
\l     | データベースの一覧を表示する。"psql -l"と同じ効果
\dパターン | 指定したパターンに名前が一致するテーブル、インデックス、ビュー、シーケンスの攻勢情報を表示する
\d     | テーブル、ビュー、シーケンスの一覧を表示する
\du    | データベースユーザの一覧を表示する
\dn    | スキーマの一覧を表示する
\dt    | テーブルの一覧を表示する
\di    | インデックスの一覧を表示する
\dv    | ビューの一覧を表示する
\ds    | シーケンスの一覧を表示する
\?     | メタコマンドの一覧を表示する

よく使いそうなpsqlのコマンド

コマンド | 説明          | 使用例
:--- | :---------- | :--------------------------------
SET  | パラメータを設定する。 | SET search_path TO 'exam_schema';
SHOW | パラメータを確認する。 | SHOW search_path / SHOW ALL
