+++
title = "アトミック変数"
date = "2013-08-03"
tags = ["1Z0-805","java"]
banner = "banners/java-logo.png"
+++

# アトミック変数とは？

java6から追加されたクラスです。

変数の読込みと書込みの一連の処理を保証しており、複数スレッドからのアクセスに高いスループットを達成できます。

<!--more-->

# アトミック変数を宣言するための主なクラス

java.util.concurrent.atomicパッケージに次のクラスがあります。

クラス名                                                                                                       | 説明
---------------------------------------------------------------------------------------------------------- | -----------
[AtomicBoolean](http://docs.oracle.com/javase/jp/6/api/java/util/concurrent/atomic/AtomicBoolean.html)     | Boolean型を扱う
[AtomicInteger](http://docs.oracle.com/javase/jp/6/api/java/util/concurrent/atomic/AtomicInteger.html)     | Integer型を扱う
[AtomicLong](http://e-class.center.yuge.ac.jp/jdk_docs/ja/api/java/util/concurrent/atomic/AtomicLong.html) | Long型を扱う
[AtomicReference](http://docs.oracle.com/javase/jp/6/api/java/util/concurrent/atomic/AtomicReference.html) | オブジェクト型を扱う

以上
