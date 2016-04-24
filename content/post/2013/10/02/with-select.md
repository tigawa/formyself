+++
title = "SQL文で一時的にVIEWを使用する方法"
date = "2013-10-02"
tags = ["oracle"]
+++

調査用のSQLを作っている時に、１つのSQLで同じ副問い合わせを何箇所も書いていたので`VIEW`を作ってすっきりさせたい衝動に駆られました。
ですが調査のために`CREATE VIEW`はしたくなかったので、一時的にVIEWの代わりなるものがないかググったところありました。

それが`WITH句`です。

<!--more-->

ORACLE9iから、WITH句はサポートされています。

次はサンプルになります。

```sql:with_select.sql
with
  view01 as
	(SELECT
        id
    FROM
        tb1
    WHERE
        id = '01'
    )
SELECT
	view01.id, tb2.id
FROM
	tb2, view01
WHERE
    tb2.id = view01.id
```

### 参考

以下のサイトを参考にさせていただきました。

ありがとうございました。

> [忘れっぽいエンジニアのオラクルＳＱＬリファレンス](http://oracle.se-free.com/dml/08_with.html)

以上
