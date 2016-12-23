+++
title = "PostgreSQLのテーブル空間について"
date = "2016-11-24"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
draft = "true"
+++

PostgreSQLのテーブル空間についての覚書です。

<!-- more -->

デフォルトでは、$PGDATA/base配下に、物理ファイルが生成される。

PostgreSQLではテーブル空間と呼ばれる、別のディレクトリにデータを配置する機能がある

テーブルスペースを作成
```
CREATE TABLESPACE data LOCATION '/home/postgres/data';
```

テーブルを作成
```
CREATE TABLE store (id serial, name text) TABLESPACE data;
```

物理ファイルの場所を確認
```
$ oid2name
All databases:
    Oid      Database Name  Tablespace
--------------------------------------
  24582            benchdb  pg_default
```

```
$ oid2name -d benchdb -i
From database "benchdb":
  Filenode             Table Name
---------------------------------
     57358                  store
     57356           store_id_seq
```

```
/home/postgres/data/PG_9.3_201306121/24582/
```
