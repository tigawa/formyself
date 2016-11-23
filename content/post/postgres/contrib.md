+++
title = "contribモジュールについて"
date = "2016-11-23T02:34:18+09:00"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
draft = "true"
+++

contribというPostgreSQLの拡張モジュールについての覚書です。

<!-- more -->

- contribution(コントリビュー)の省略
- PostgreSQLの拡張モジュール
- デフォルトではインストールされていない。
- DDLの発行でインストールが可能
  - 'CREATE EXTENSION pgstattuple;'


## データベースクラスタ内の各データベースが持つOIDを一覧表示
```
$ oid2name

All databases:
    Oid  Database Name  Tablespace
----------------------------------
  32768        benchdb  pg_default
  16385         docker  pg_default
  12032       postgres  pg_default
  12027      template0  pg_default
      1      template1  pg_default
```

## テーブル空間のOIDを一覧表示
```
$ oid2name -s

All tablespaces:
   Oid  Tablespace Name
-----------------------
  1663       pg_default
  1664        pg_global
```

## テーブル、インデックス、シーケンスのOIDを一覧表示
```
$ oid2name -d benchdb -i

From database "benchdb":
  Filenode             Table Name
---------------------------------
     32781       pgbench_accounts
     32786  pgbench_accounts_pkey
     32778       pgbench_branches
     32782  pgbench_branches_pkey
     32794        pgbench_history
     32772        pgbench_tellers
     32784   pgbench_tellers_pkey
```

# pgstattuple

## インストール (9.1以降)
    create extension pgstattuple;

## インストール済みか確認
    select extname, extversion FROM pg_extension;
```
extname   | extversion
-------------+------------
plpgsql     | 1.0
pgstattuple | 1.1
(2 rows)
```

## テーブル情報の取得
    select * from pgstattuple('pgbench_accounts');

## インデックス情報の取得
    select * from pgstatindex('pgbench_accounts_pkey');
