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
