+++
title = "PostgreSQL すぐに使える小技"
tags = ["PostgreSQL"]
date = "2016-11-23"
banner = "banners/postgres-banner.png"
draft = "true"
+++

PostgreSQLで すぐに使える小技を紹介します。

<!--more-->

## SQLの１レコードを縦に表示する方法

psqlでアクセスして、`\x'と入力

```
\x
Expanded display is on.

benchdb=# select * from pgstattuple('pgbench_accounts');
-[ RECORD 1 ]------+---------
table_len          | 13434880
tuple_count        | 100000
```

## SQLを1秒毎実行する。

アクセス統計情報を繰り返し表示したい場合などに便利です。

例）時刻を1秒奥に実行する例
```sql
$SELECT clock_timestamp();

¥watch 1;
```

## 大量のテストデータを作成する方法

PostgreSQLで大量のテストデータを生成したい時に、`generate_series(ジェネレートシリーズ)`関数が便利です。

使い方は下記のサイトが参考になります。

[PostgreSQLでテストデータを作成する](http://lets.postgresql.jp/documents/technical/gen_data/1)
