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
Z = np.ones((8,8))
Z[::2, ::2] = 0
Z[1::2, 1::2] = 0
print(Z)
```

[[ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]  
 [ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]  
 [ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]  
 [ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]]  

## タイプを指定して行列の作成

NumPyは、C言語で高速に処理しています。適切な型を指定することで内部のメモリ量を節約します。

```python
# タイプを指定して初期化
X = np.array([255,255,255,0], dtype=np.ubyte)
print(X.dtype)

# タイプの変更
X = X.astype(np.int64)
print(X.dtype)
```