+++
title = "java5 スレッドプール"
date = "2013-07-30"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

java5からスレッドプールというユーティリティーが追加されました。

今まで自分で実装していた処理なども、既にjavaが用意してくれているので使わない手はないですよね？

ということで、スレッドプールについてまとめています。

<!--more-->

# ExecutorServiceとは?

複数のスレッドをあらかじめ作成して待機させておき、タスクが来たら待っているスレッドにタスクを割り当てて処理を開始させる仕組みをスレッドプールと言います。

ゼロからこうした仕組みを実装するとなると、少々面倒くさいのですが、 Java では ExecutorService というものがあり、スレッドプールを簡単に利用できます。

# タスクの状態
タスクには次の状態があります。

この状態は不可逆で、 created から completed へと順番に変わります。

順番 | 状態        | 説明
-- | --------- | -------------------
1  | created   | タスクを生成した状態
2  | submitted | ブロッキングキューにタスクを入れた状態
3  | started   | タスクを実行開始した状態
4  | complted  | タクを実行終了した状態

# ExecutorServiceの種類

メソッド名                               | 説明
----------------------------------- | -------------------------------
Executors.newSingleThreadExecutor() | １つのスレッドでタスクの処理を行います。
Executors.newFixedThreadPool()      | 指定した数のスレッドを作成し、タスクの処理を行います。
Executors.newCachedThreadPool()     | 必要に応じて自動的にスレッドを作成し、タスクの処理を行います。

# 「newSingleThreadExecutor」のサンプル
{{< gist tigawa 6128318 >}}

# 「newFixedThreadPool」のサンプル
{{< gist tigawa 6132713 >}}

# 「newCachedThreadPool」のサンプル
{{< gist tigawa 6133035 >}}

# 参考サイト
> [Executorの使い方](http://java.keicode.com/lang/multithreading-executor.php)

> [java.util.concurrentパッケージ](http://www.techscore.com/tech/Java/JavaSE/Thread/7/)

以上
