+++
title = "windowsでgrepする"
date = "2013-08-19"
tags = ["windows"]
+++

windowsでgrepしたい衝動に駆られてググってみると、以下のようなコマンドがありました。

<!--more-->

windowsでもgrepと同じような事が`findstr`できるんですね。

# 実行例
以下は、ファイル名にAAA.txtが含まれるものを抽出しています。

```
tree /F | findstr -i AAA.txt > out.txt
```

Thanks.
