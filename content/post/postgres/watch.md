+++
title = "SQLを１秒おきに繰り返し実行する方法(PostgreSQL)"
date = "2016-06-05T10:34:18+09:00"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

アクセス統計情報を繰り返し表示したい場合など用途は様々ですが、１つ前のSQLを繰り返し実行する方法を紹介します。

psql でログインして `¥watch`　コマンドを実行します。

<!--more-->

1秒毎に現在時刻を表示する例

  ```sql
  $SELECT clock_timestamp();

  ¥watch 1;

  ```

以上
