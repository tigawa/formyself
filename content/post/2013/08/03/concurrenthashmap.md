+++
title = "並行コレクション"
date = "2013-08-03"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

従来の同期化コレクションは、パフォーマンスが劣化する可能性がありましたが、並行コレクションは複数スレッドから並列アクセスを前提に高いスループットを実現できます。

<!--more-->

# 代表的な並列コレクション

分類     | クラス (実装しているインターフェイス)                                                                                                                                                                    | 特徴
------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Map系   | [java.util.concurrent.ConcurrentHashMap](http://docs.oracle.com/javase/jp/7/api/java/util/concurrent/ConcurrentHashMap.html)<br>(java.util.Map)<br>(java.util.concurrent.ConcurrentMap) | ・マップ全体をロックせず、**ロックストライピング**と呼ばれる細粒度のロック方式を用いて並行処理の最適化を行っている。<br>・ConcurrentHashMapが返すIteratorは、並行アクセスにおける要素の変更を許容するので`java.util.ConcurrentModificationException`がスローされることはない。<br>・トレードオフとして、`size`メソッドや`isEmpty`メソッドが返す値が近似値となる可能性がある。
List系  | [java.util.concurrent.CopyOnWriteArrayList](http://docs.oracle.com/javase/jp/7/api/java/util/concurrent/CopyOnWriteArrayList.html)<br>(java.util.List)                                  | ・読込みは複数スレッドから行えるが、書込みは単一スレッドからしか行えない。<br>・Copy-on-writeは書込みに対してコピーを作成する」という意味で、リストの要素に変更を加えるようなメソッド（`add`,`set`,`remove`）が呼び出されると、内部の要素をコピーして、コピーした要素に変更を加える。<br>・要素を取得するメソッド(`get`)は、コピー前の要素から値を取得する。<br>・コピーのオーバヘッドが大きいので大量データの更新処理には向かない => Collections.synchronizedListメソッドを検討する。
Set系   | [java.util.concurrent.CopyOnWriteArraySet](http://docs.oracle.com/javase/jp/7/api/java/util/concurrent/CopyOnWriteArraySet.html)<br>(java.util.Set)                                     |
Queue系 | [java.util.concurrent.BlockingQueue](http://docs.oracle.com/javase/jp/7/api/java/util/concurrent/BlockingQueue.html)<br>(java.util.Queue)                                               | キューが空の場合に要素を取り出そうとした際には、キューに要素が追加されるまで取りだし処理を待機する。

以上
