+++
title = "PostgreSQLメモ"
date = "2016-06-07T10:34:18+09:00"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
draft = "true"
+++

PostgreSQLのデータ構造についてまとめています。

<!--more-->

# データ構造
## メモリ
- 共有バッファ（shared_buffers)

  テーブルやインデクスのデータをメモリ上にキャッシュしておくためのバッファ
  共有バッファにキャッシュすることで、デスクからの読み取り回数を減らす

- WALバッファ（wal_buffers)

  WALに書き込むときに使用されるバッファ、WALはトランザクション毎に書き込まれるため、あまり大きくしすぎる必要はない

- ワークメモリ (work_mem)

  ソートやハッシュ操作などで、バックエンドごとに確保されるメモリ。ワークメモリが大きいと、一時ファイルを作成せずにオンメモリでのソート処理やハッシュ操作が可能

- メンテナンスワークメモリ (maintenance_work_mem)

  VACUUMやCREATE INDEX 等のメンテナンスコマンド実行時に、バックエンド毎に確保されるメモリ。メンテナンスワークメモリが大きいと効率幼駒メンテサク業ができる


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

## インストール (9.1以降)
  =# create extension pgstattuple;

## インストール済みか確認
  =# select extname, extversion FROM pg_extension;
```
extname   | extversion
-------------+------------
plpgsql     | 1.0
pgstattuple | 1.1
(2 rows)
```

## テーブル情報の取得
  =# select * from pgstattuple('pgbench_accounts');

## インデックス情報の取得
=# select * from pgstatindex('pgbench_accounts_pkey');
