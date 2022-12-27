+++
date = "2022-12-27T23:57:01+09:00"
title = "文字列フォーマットの世界"
tags = ["golang"]
categories = ["プログラミング言語"]
banner = "banners/Go-Logo_Aqua.png"
author = "igawa.taiichi"
type = "post"
+++

`%#v`を指定すると構造体の型名、フィールド名、値をわかりやすく表示します。

```
    f := &Foo{Bar: 1, Baz: "Hello, W+D Press!"}

    fmt.Printf("%#v \n", f)
    // => &main.Foo{Bar:1, Baz:"Hello, W+D Press!"} 

```

`%v`を指定すると構造体の値のみを表示します。

```
    f := &Foo{Bar: 1, Baz: "Hello, W+D Press!"}

    fmt.Printf("%v \n", f)
    // => &{1 Hello, W+D Press!}
```

<!--more-->
