+++
title = "C#"
date = "2019-08-15T11:56:10+09:00"
description = "JavaプログラーマーによるC言語のちょっとした記事"
author = "igawa.taiichi"
+++

[過去の記事を全てみる](/tags/c#/)

[ざっとC#の歴史]({{< relref "first.md" >}})

| 基本1                                                  | 基本2                                                                | 応用                                     |
| ------------------------------------------------------ | -------------------------------------------------------------------- | ---------------------------------------- |
| [文字列]({{< relref "string.md" >}})                   | [mainメソッド]({{< relref "main_method.md" >}})                      | [インデクサー]({{< relref "tec1.md" >}}) |
| [ref out]({{< relref "ref_out.md" >}})                 | [可変長引数]({{< relref "可変長引数.md" >}})                         |                                          |
| [静的コンストラクタ]({{< relref "static_class.md" >}}) | [演算子のオーバーロード]({{< relref "演算子のオーバーロード.md" >}}) |                                          |

## 命名規約

| 種類                        | Java   | C#(.NET)     |
| --------------------------- | ------ | ------------ |
| クラス                      | Pascal | Pascal       |
| インタフェース              | Pascal | "I" + Pascal |
| パッケージ / ネームスペース | Camel  | Pascal       |
| メソッド                    | Camel  | Pascal       |
| ローカル変数                | Camel  | Camel        |
| メンバ変数                  | Came   | Pascal       |
| 定数                        | Snake  | Pascal       |
| 列挙定数                    | Snake  | Snake        |

```
