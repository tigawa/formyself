+++
title = "PostgreSQLメモ"
date = "2016-06-07T10:34:18+09:00"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
draft = "true"
+++

# データ構想
## プロセス構造

PostgreSQL起動時に起動するプロセスと接続ごとに起動するプロセスに大別される

バックグラウンド・プロセス

| プロセス       　| 説明 |
| :------------- | :------------- |
| postmaster | 最初に起動するプロセス。他のバックグラウンド・プロセスを起動し、クライアントからの接続要求を待ち続ける。oracleでいうリスナーみたいなやつかな？ |
| /var/lib/pgsql-9.0/bin/postgres | 親玉(リスナ) |
| postgres: logger process | サーバログ出力 |
| postgres: writer process | データ書き出し |
| postgres: wal writer process | WAL書き出し |
| postgres: autovacuum launcherprocess | VACUUM実行 |
| postgres: archiver process | WALアーカイブ |
| postgres: stats collector process | 統計情報収集 |
| wal sender/receiver process | マスタ/スタンバイサーバ間でWALの送受信を行うプロセス。PostgreSQL9.0で導入されたストリーミング・レプリケーションを実行する主なプロセス |

バックエンド・プロセス

| プロセス       　| 説明 |
| :------------- | :------------- |
| postgres: postgres postgres [local]idle | クライアントから接続 |


# contribモジュール

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

初期設定

    $ psql <db> -f <PGHOME>/share/contrib/pgstatuple.sql
