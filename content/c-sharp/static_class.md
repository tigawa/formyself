+++
date = "2019-09-07T11:43:30+09:00"
title = "静的クラスと静的コンストラクタ"
tags = ["C#"]
categories = ["プログラミング言語"]
description = "JavaプログラーマーによるC言語のちょっとした記事"
banner = "banners/csharp.png"
author = "taiichi.igawa"
type = "post"
+++

静的クラスと静的コンストラクタについてまとめます。

<!--more-->

## 静的クラス

class に staticをつけると静的クラスになります。

```
static class Test { //-
```

### 特徴
* オブジェクトインスタンスを生成できない。
* クラス内に静的メンバしか定義できない。

Utilsクラスを宣言するとき、staticを宣言してもいいかもしれません。


## 静的コンストラクタ

```
Class Sample {
    static Sample() { //静的コンストラクタ
}
```

### 特徴

* クラスがロードされるタイミングで１度実行されるようになる
* Javaでいうstaticブロック(イニシャライザ)にあたる

本当に１回だけ実行したいかつ、コンストラクタの前に実行したい場合に利用できそうです。

以上