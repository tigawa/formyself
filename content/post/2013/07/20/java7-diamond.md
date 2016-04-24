+++
title = "java7 ダイヤモンド演算子"
date = "2013-07-20"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

これは楽ちん、ジェネリクスの記載がjava7から簡単になります。

<!--more-->

# コード
java 7

```java
List<String> List new ArrayList<>();
```

java 6

```java
List<String> list new ArrayList<String>();
```

# 特記事項

- 変数の型をコンパイラーが読み取って、<>の中に展開するらしい。
