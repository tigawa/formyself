+++
date = "2019-08-15T13:07:09+09:00"
title = "参照パラメータと出力パラメータ"
tags = ["C#"]
categories = ["プログラミング言語"]
description = "JavaプログラーマーによるC言語のちょっとした記事"
banner = "banners/csharp.png"
author = "taiichi.igawa"
type = "post"
+++

## 参照パラメータ

ref をつけると結果を呼び出し側に返すことができる。

### 使い方

```
int a = 0;
Console.WriteLine(a);
obj.Sqr(ref a);
Console.WriteLine(a);

public void Sqr(ref int i)
{
    i = i * i;
}
```

### 制限事項

ref を宣言するとnullを設定することはできない

## 出力パラーメタ

out をつけると結果を呼び出し側に返すことができる。

### 使い方

```
bool isSquare;
int a = RectInfo(30, 30, out isSquare);
public int RectInfo(int side1, int side2, out bool isSquare)
{
    if(side1==side2) isSquare = true;
    else isSquare = false;
    return side1 * side2;
}
```

### 制限事項

out を指定した引数には必ず値を設定しないと行けない。
設定しないとコンパイルエラーになる。


