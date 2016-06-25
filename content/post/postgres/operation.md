+++
title = "運用管理"
tags = ["PostgreSQL"]
date = "2016-06-20"
banner = "banners/postgres-banner.png"
draft = "true"
+++

ディスク容量を監視する上で、データサイズを見積もる必要があります。
それぞれの領域の特徴と見積方をご紹介します。

| 領域 | 説明 |
| :------------- | :------------- |
| DB領域      | データファイルを格納 |
| WAL領域      | WALファイルを格納 |
| アーカイブWAL領域 | アーカイブWALファイルを格納 |

# 見積もり方

## DB領域
  - 特徴
    - １つのWALセグメントファイルのサイズ= 16MB
    - 循環

## WAL領域
  - 特徴
    - １つのWALセグメントファイルのサイズ= 16MB
    - WALは循環します。
    - 循環するサイクルは、`checkpoint_segmentsパラメータで制御します。
  - 見積もり方
  ```
    16MB x (checkpoint_segments x 3 + 1)
  ```
    checkpoint_segments = 3　（デフォルトサイズ）

    **注意!!**
    上記の値を常に上回らないことが保証されているわけではありません。
    それは、大量の更新があった場合に、WALセグメントファイルの容量が一時的に上記の数値を超える場合があるためです。

## アーカイブWAL
  - 特徴
    - アーカイブWAL領域がディスクフルになっても即座にPostgreSQLは停止しない
      WAL領域からアーカイブに失敗し続けて、WAL領域のディスクがフルになると停止する。

# 参考
[第5回　PostgreSQL でのデータベース構築の際に必要となる物理設計のポイント](http://lets.postgresql.jp/documents/tutorial/gihyo_rensai/5/)
