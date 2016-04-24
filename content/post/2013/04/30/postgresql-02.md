+++
title = "PostgreSQL インストール"
date = "2013-04-30"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

PostgreSQLのインストールについて説明します。

<!--more-->

### インストール環境
CentOS 6.3

### インストール手順

postgresユーザの作成

	su -
	useradd postgres
	passwd postgres

関連ライブラリのインストール

	su -
	yum install gcc
	yum install readline
	yum install zlib
	yum install flex  #2.5.31以降
	yum install bison #1.875以降

postgresSQLインストール(ソースコードから) [ソース一覧](http://www.postgresql.org/ftp/source/ "ソース一覧")

	cd /usr/local/src
	wget http://ftp.postgresql.org/pub/source/v9.0.9/postgresql-9.0.9.tar.gz
	tar xzvf postgresql-9.0.9.tar.gz
	cd postgresql-9.0.9
	./configure
	make && make install
	#インストール先のディレクトリ　/usr/local/pgsql

インストール後の設定

	su - postgres
	vi ~/.bash_profile
	export PATH=/usr/local/pgsql/bin:$PATH
	export LD_LIBRARY_PATH=/usr/local/pgsql/lib:$LD_LIBRARY_PATH
	#これを指定すると以降で、-Dを指定しなくて済む
	export PGDATA=~/data
	source ~/.bash_profile

起動
	initdb -D /home/postgres/data --no-locale
	pg_ctl start -D /home/postgres/data -w

確認
	psql

停止
	pg＿ctl stop -D /home/postgres/data

アンインストール

	#ソースコードのディレクトリで実行
	make uninstall
	# 必要に応じて、次の後処理を行う
	#  ・~/.bash_profileを元に戻す。
	#  ・PostgreSQL操作用アカウントを削除する。
	#  ・データベースクラスタのディレクトリを削除する。
