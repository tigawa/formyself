+++
date = "2019-08-31T12:11:56+09:00"
title = "Dictionaryを継承してgetしたときに該当データがない場合は、TValueで指定されたクラスをnewして返す方法"
tags = ["C#"]
categories = ["プログラミング言語"]
description = "JavaプログラーマーによるC言語のちょっとした記事"
banner = "banners/csharp.png"
author = "taiichi.igawa"
type = "post"
+++

Dictionaryを継承してgetしたときに該当データがない場合は、TValueで指定されたクラスをnewして返す方法を紹介します。

### ポイント

* アクセサをオーバライドする。
* TValueをwhereで限定することで、メソッド内で new TValue()を可能にできる。 (これはJavaではできない。いいところ！)

<!--more-->

### サンプルコード
```
public class SDic<TKey, TValue> : Dictionary<TKey, TValue> where TValue : new()
{
    public new TValue this[TKey key]
    {
        get
        {
            TValue value;
            return TryGetValue(key, out value) ? value : new TValue();
        }
        set { base[key] = value; }
    }
}
```

以上です。