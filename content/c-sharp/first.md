+++
date = "2019-01-30T23:58:19+09:00"
tags = ["C#"]
categories = ["プログラミング言語"]
description = "JavaプログラーマーによるC言語のちょっとした記事"
banner = "banners/csharp.png"
author = "taiichi.igawa"
type = "post"
+++

C#について、勉強したことを自分のために少しづつまとめていきます。

## ざっとC#の歴史

* C言語が1970年〜1980年の構造化プログラミングの中から生まれた。
* C言語にオブジェクト指向を取り入れた。C++が生まれた。
    * そのため当初は、"C with Classes"と呼ばれていたらしい。
* JavaはC++に影響を受けて、1991年にSun Microsystemsが開発。
* ただし、JavaからはWindows固有の機能が使えなかった。
* <font color="RED">そこで、windows固有機能も使用したいというニーズとともに、1980年代の後半にC#が誕生した。</font>

## バージョンアップの歴史
* 2.0 ジェネリックの部分型、匿名メソッド
* 3.0 LINQ, ラムダ式
* 4.0 動的言語ランタイムに関する新機能
~ 途中 ~

## C#の特定
* C#の実行には、.NET Frameworkを必要とする。

## .NET Frameworkとは
* 高度に分散されたコンポーネントベースのアプリケーション開発と実行をサポートする環境のこと
```
.NET Framework = ランタイム(CLR)　+ ライブラリ
```

* ソースコード -> 中間言語 MSIL -> JIT(Just in time)コンパイラに実行可能なコードに変換して実行する。



<!--more-->