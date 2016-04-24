+++
title = "linux サブディレクトリ配下のファイルをgrepする"
date = "2013-09-28"
tags = ["linux"]
banner = "banners/linux-logo.jpg"
+++

サブディレクトリ配下のファイルをgrepする方法を紹介します。

# コマンド書式

```
grep -r 検索文字列 ディレクトリ
```

<!--more-->

# 実行例
/etc配下で、`start`を含むファイルをgrepする。

```
grep -r start /etc
```

※ -lをつけるとバイナリファイルを除外できる。（バイナリファイルは検索対象外にしたいから普通はつけた方がよい)

# おまけ
以下のでも同じような事が実現できます。

```
find /etc -type f -print | xargs grep hoge /dev/null
```

# 参考サイト
以下のサイト参考にさせていただきました。

ありがとうございました。

> [yahoo知恵袋](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1315866533)
