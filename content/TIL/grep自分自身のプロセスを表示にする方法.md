+++
date = "2019-10-06T12:33:55+09:00"
tags = ["linux"]
categories = ["TIL"]
banner = "banners/til.png"
author = "taiichi.igawa"
type = "post"
title = "ps時にGrep自身のプロセスを非表示にする方法"
+++

```
ps | grep hugo | grep -v grep
ps | grep [h]ugo
```

### 指定した名前のプロセスをkillするsh

```
#!/bin/bash
ps | grep $1 | grep -v grep | awk '{print $1}' | xargs  kill
```