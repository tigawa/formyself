+++
title = "ReentrantReadWriteLock"
date = "2013-08-13"
tags = ["1Z0-805","java"]
banner = "banners/java-logo.png"
+++

javaで`synchronized`よりロックの競合を少なくさせる方法

<!--more-->

`synchronized`を利用して読込み書込み時にロックを行うと、読込みスレッドと読込みスレッドが衝突した時に待ちが発生していましたが

[ReentrantReadWriteLock](http://docs.oracle.com/javase/jp/7/api/java/util/concurrent/locks/ReentrantReadWriteLock.html)は待ちが発生しません。あくまで読込みスレッドと書込みスレッドが衝突した時にだけ待ちが発生します。（書込みスレッドと書込みスレッドの衝突時でも待ちが発生します。）

# サンプル
ReadLockとwriteLockを使った簡単なサンプルを作りました。

{{< gist tigawa 6236331 >}}

# 実行結果

```
[ReadLock] start
[ReadLock] start
[ReadLock] end
[ReadLock] end
[WriteLock] start
[WriteLock] end
[ReadLock] start
[ReadLock] end
```

以上
