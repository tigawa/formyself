+++
title = "PostgreSQLのメモリ＆プロセスについて"
date = "2016-11-23T01:34:18+09:00"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
draft = "true"
+++

PostgreSQLのメモリとプロセスについてまとめています。

<!--more-->

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
