+++
date = "2019-01-27T14:19:12+09:00"
tags = ["機械学習"]
title = "NumPyチートシート"
description = "NumPyに関する基本的な知識をまとめていきます。"
banner = "banners/NumpyCover.jpeg"
author = "taiichi.igawa"
type = "post"
+++

## NumPyの書式 [1次元目=開始:終了:間隔, 2次元目=開始:終了:間隔, ...]

```python
Z = np.ones((3,3))
print(Z)
Z[::2] = 0
print(Z)
```

[[ 1.  1.  1.]  
 [ 1.  1.  1.]  
 [ 1.  1.  1.]]  
[[ 0.  0.  0.]  
 [ 1.  1.  1.]  
 [ 0.  0.  0.]]  
