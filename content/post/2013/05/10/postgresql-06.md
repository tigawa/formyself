+++
title = "PostgreSQL バックアップとリストア"
date = "2013-05-10"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

PostgreSQLのバックアップとリストについて整理しています。

<!--more-->

# 1.オンラインバックアップ

主な用途はPostgreSQLのバージョン間でデータを以降する場合、他のDBMSから移行する、システム開発時に一時的にバックアップしたい等々があるのかな？　但し、ログファイルや設定ファイルはバックアップされない

## 1.1 コマンドでバックアップ

コマンド                                                                         | 説明
:--------------------------------------------------------------------------- | :--------------------------------------------
[pg_dump](http://www.postgresql.jp/document/9.2/html/app-pgdump.html)        | databaseを指定してバックアップ
[pg_dumpall](http://www.postgresql.jp/document/9.2/html/app-pg-dumpall.html) | 全データベースをバックアップ
[pg_restore](http://www.postgresql.jp/document/9.2/html/app-pgrestore.html)  | pg_dumpで-Fc -Ftを指定して取得したダンプファイルをリストアする場合に使用する
[copy](http://www.postgresql.jp/document/9.2/html/sql-copy.html)             | データをCSVファイル形式で抽出したり、登録したりできる

### カスタム形式でのバックアップ＆リストア

```text
#バックアップ
pg_dump -Fc examdb -f examdb.dump
#リストア
pg_restore examdb.dump
```

### 平文でのバックアップ＆リストア

```text
#バックアップ
pg_dump postgres -f postgres.dump
#リストア
psql -f postgres.dump
```

### 平文で全データベースをバックアップ＆リストア

``` text
#バックアップ
pg_dumpall -f dumpall.dump
#リストア
psql -f postgress.dump
```

### 特記事項

- 平文形式のバックアップは、主に次の場合に使用する。
  1. 異なるOS間でのデータ移行
  2. PostgreSQLのバージョン間でのデータ移行
- カスタム形式は、実運用ではよく使われる。
- ユーザのアクセスを妨げる事無くバックアップができる。
- 一貫性のあるバックアップができる。
- pg_restoreコマンドで-dでデータベース名を指定しない場合は、標準出力に平文形式のSQLを表示する。
- PostgreSQLの稼働中に実行する事を覚えておきましょう。
- リストア前にデータを削除するには、 -cオプションを付ける。

#### COPYコマンド
  **スーパーユーザでログインする必要がある**

## 1.2 定期的にバックアップ　PITR(Point In Time Recovery)
実運用で定期的にバックアップするならこっちだろうな

### PITR 概要
ある時点でベースバックアップを取得して、日々のバックアップは差分で取得するよなバックアップの仕方<br>リストアする際は、ベースバックアップ、差分バックアップの順にリストアして行く。  

用語                                                                        | 説明
:------------------------------------------------------------------------ | :-----------------------------
ベースバックアップ                                                                 | ある時点でデータベース全体のバックアップを取得したもの
[WAL](http://www.postgresql.jp/document/9.0/html/runtime-config-wal.html) | コミットした時に変更内容が書き込まれるログ
先行書込みログ                                                                   | 上記の別名
WALアーカイブ                                                                  | WALは再利用されるので、再利用する前に別の場所に移したログ

### PITR バックアップの流れ
#### 1.前準備/設定

```text
postgresql.confファイルの設定例

# WALに書き込まれる情報の度合いを指定する。デフォルト値はminimal
# PITR使用時は、archiveまたは、hot_standbyを指定する
wal_level = hot_standby

# WALアーカイブを有効にするかどうかの指定。
# デフォルトはoff。PITR使用時はonを指定する。
archive_mode = no

# WALファイルをWALアーカイブとしてコピーするためのジェルコマンドを指定する。
# %pはアーカイブするファイルのパス名に置換えられる
# %fファイル名部分のみに置換えられる。
archive_command = 'cp %p /mnt/archivedir/%f'
```

#### 2.ベースバックアップ
ベースバックアップの手順

```text
# pg_start_backup()関数の実行  
cd $PGDATA/
psql -c "SELECT pg_start_backup('label')"

# データベースクラスタのディレクトリをまるごとバックアップ  
tar czvf /mnt/backup.tar.gz data

# pg_stop_backup()関数の実行  
psql -c "SELECT pg_stap_backup()"
```

#### 3.差分バックアップ
ここまでの設定で自動的に差分バックアップしてくれる。<br>WALがいっぱいになると自動的にWALアーカイブログとして保存されるようになる。  

### PITR リカバリの流れ
#### 1.ベースバックアップのリストア

```
# PostgreSQLが停止していることを確認
cd $PGDATA/
pg_ctl status

vm $PGDATA /mnt

# データがない事を確認
ls data

# ベースバックアップを展開
tar xzvf /mnt/backup.tar.gz
```

# 2. オフラインバックアップ

** 作成中 **
