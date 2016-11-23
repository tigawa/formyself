+++
title = "pgstattuple関数の使い方"
tags = ["PostgreSQL"]
date = "2016-11-23"
banner = "banners/postgres-banner.png"
draft = "true"
+++

pgstattuple関数の使い方を紹介します。

<!--more-->

## テーブル情報の取得

```
select * from pgstattuple('pgbench_accounts')

-[ RECORD 1 ]------+---------
table_len          | 13434880
tuple_count        | 100000
tuple_len          | 12100000
tuple_percent      | 90.06
dead_tuple_count   | 0
dead_tuple_len     | 0
dead_tuple_percent | 0
free_space         | 188920
free_percent       | 1.41
```

### ここから読み取れる情報
- table_len ファイルサイズ 約13MB
- tuple_count レコード数 10万件
- tuple_len 行データのバイト数  約12MB
- １レコードのバイト数 tuple_len / tuple_count = 121byte
- free_percent table_len(約13MB)のうち、1.41%がフリースペースが占める割合

## index情報の取得

```
select * from pgstatindex('pgbench_accounts_pkey');

-[ RECORD 1 ]------+--------
version            | 2
tree_level         | 1
index_size         | 2260992
root_block_no      | 3
internal_pages     | 1
leaf_pages         | 274
empty_pages        | 0
deleted_pages      | 0
avg_leaf_density   | 89.84
leaf_fragmentation | 0
```

### ここから読み取れる情報

- tree_level インデックスの深さ 1段
-
