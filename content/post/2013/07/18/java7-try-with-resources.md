+++
title = "java7 try-with-resources文"
date = "2013-07-18"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

Java7から、クローズ処理を明示的に呼び出さなくても、自動で呼び出させるようになりました。

これからはクローズ漏れの心配はないですね。

<!--more-->

但しこの恩恵を受けるためには、次のようにtryを記述する必要があります。

{{< gist tigawa 6023287 >}}

# 実行結果

```
ADC
```

# 特記事項
- 自分でクローズ処理を実装する場合は、次のインターフェースを実装する必要があります。
  - java.lang.AutoCloseable
  - java.io.Closeable

- Java7から次について自動的にリソースを解放してくれるようになりました。
  - InputStream
  - OutputStream
  - JDBC(java.sql.Connection, java.sql.Statement, java.sql.ResultSet

- tryブロックで例外がスローされ、さらにcloseメソッドでも例外がスローされた場合、tryブロックの例外をcatchします。
- AutoCloseableを実装したクラスのコンストラクタでエラーになった場合は、closeメソッドは実行されません。
- try()に複数のリソースを一度に宣言できる。close処理は定義した逆順で実行されます。
-   try( A a = new A(); B b = new B()){
