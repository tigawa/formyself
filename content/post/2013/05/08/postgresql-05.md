+++
title = "PostgreSQL 設定ファイル"
date = "2013-05-08"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

postgresql.confについて整理しています。
<!--more-->

# postgresql.conf
PostgreSQLのパラメータを設定するファイル

## サーバ側の設定
**【注意】 デフォルトはリモート接続できない**

パラメータ            | 説明                                            | 反映タイミング　 | 初期値
:--------------- | :-------------------------------------------- | :------- | :--------
listen_addresses | リモートで接続を受け付けるサーバ側のIPアドレス<br>**初期はリモート接続できない** | 起動       | localhost

## クライアント側の設定

パラメータ                         | 説明             | 反映タイミング　 | 初期値
:---------------------------- | :------------- | :------- | :---------------
search_path                   | スキーマ検索パス       | いつでも     | '"$user",public'
default_transaction_isolation | トランザクション分離レベル  | いつでも     | read committed
client_encoding               | クライアントエンコーディング | いつでも     | 'SQL_ASCII'      |

## エラー報告とログ取得
**【注意】 デフォルトはログの内容がファイルに残らない**

パラメータ              | 説明                                                                                                   | 反映タイミング　 | 初期値
:----------------- | :--------------------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------
log_destination    | サーバログの出力先                                                                                            | 再読込      | デフォルト stderr <br>・stderr サーバログを平文で標準エラー出力に出力する <br> ・csvlog サーバログのCSV形式で標準エラー出力に出力する。logging_collerctor=on <br> ・syslog　サーバログをsyslogに出力する
logging_collerctor | ファイルにリダイレクトするか                                                                                       | 起動       | off
log_directory      | ログファイルを格納するディレクトリ                                                                                    | 再読込      | pg_log($PGDATA/pg_log)
log_file_name      | ログファイル名                                                                                              | 再読込      | postgresql-%Y-%m-%d_%H%M%S.log
log_min_messages   | ログレベル                                                                                                | スーパユーザのみ | WARNING
log_line_prefix    | サーバログの行頭に出力する内容  [詳細](http://www.asami.asia/tech/postgresql/parameter/what2log/log_line_prefix.html) | 再読込      | 空文字

### 設定例

```:text
log_destination = 'syslog, stderr'
logging_collector = on
log_directory = 'examlog'
log_filename = 'postgresql-%Y%m%d.log'
```

[pg_hba.conf](http://www.postgresql.jp/document/9.2/html/auth-pg-hba-conf.html)
クライアント認証を設定するファイル<br>

## デフォルト設定例

```TEXT
#UNIXドメインを使ったすべての接続を許可する。
#pg_hba.confデフォルト設定
local    all    all    trust

#ループバックアドレス（127.0.0.1)からすべての接続を許可する。
#pg_hba.confデフォルト設定
host    all    all    127.0.0.1/32    trust

#192.168.16.8から、データベースユーザga
#データベースexamdbにTCP/IPで接続するのを拒否する。
host    examdb    user1    192.168.16.8/32    reject

#192.168.16.1～192.168.16.254のすべてのデータベースユーザについて
#データベースexamdbに接続するときにパスワード認証する。
host    examdb    all    192.168.16.0/24    md5

#IPアドレスとサブネットマスクで設定する。
host    examdb    all    192.168.16.0    255.255.255.0    md5
```
