+++
title = "JDBCドライバーの自動ロード"
date = "2013-07-20"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

JDBC 4.0からJDBCドライバを自動ロードする機能が追加されました。

そのためJDBCドライバのロード処理を明示的に記載する必要がなくなりました。

<!--more-->

```
DriverManager.getConnection
```

上記のデータベースとの接続を確立するメソッドの呼び出しで、JDBCドライバが自動的にロードされます。
