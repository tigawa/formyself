+++
title = "並行処理ユーティリティー"
date = "2013-07-23"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

Java5から追加された並行処理ユーティリティー(Concurrent Utilities)が、結構使えそうなので概要をまとめます。

<!--more-->

# 概要

名称                                              | 説明                                                                           | 関連クラス
:---------------------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------
[スレッドプール](/blog/2013/07/30/java5-threadpool)    | 必要なスレッドを予め生成しプールして効率よく並行処理を行う仕組みを提供する                                        | java.util.concurrent.Executors
[並行コレクション](/blog/2013/08/03/concurrenthashmap/) | 従来の同期化コレクションは、パフォーマンスが劣化する可能性があったが、並行コレクションは複数スレッドから並列アクセスを前提に高いスループットを実現できる | java.util.concurrent.ConcurrentHashMap
[アトミック変数](/blog/2013/08/03/atomic/)             | 変数に対して読込みと書込みの一連の処理を保証する変数                                                   | java.util.concurrent.atomic
カウンティングセマフォ                                     | プロセスやスレッド間における同期や割り込み制御するユーティリティー群                                           | java.util.concurrent.Semaphore

# 並行処理ユーティリティのパッケージ

- java.util.concurrent
- java.util.concurrent.atomic
- java.util.concurrent.locks
