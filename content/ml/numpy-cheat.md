+++
date = "2019-01-27T14:19:12+09:00"
tags = ["機械学習"]
title = "NumPyチートシート"
description = "NumPyに関する基本的な知識をまとめていきます。"
banner = "banners/NumpyCover.jpeg"
author = "taiichi.igawa"
type = "post"
+++

## NumPy 行列の生成

### 基本 "1"要素の配列
```python
Y = np.ones([5,3])
print(Y)

[[ 1.  1.  1.]  
 [ 1.  1.  1.]  
 [ 1.  1.  1.]  
 [ 1.  1.  1.]  
 [ 1.  1.  1.]]  
```

### 基本 "0"要素の配列
```python
Y = np.zeros([5,3])
print(Y)

[[ 0.  0.  0.]  
 [ 0.  0.  0.]  
 [ 0.  0.  0.]  
 [ 0.  0.  0.]  
 [ 0.  0.  0.]]  
```

### 基本 配列指定
```python
X = np.array([[1,1,1], [2,2,2]])
print(X)

[[1 1 1]  
 [2 2 2]]  
```

### 基本 範囲指定
```python
X = np.arange(9)
print(X)
[0 1 2 3 4 5 6 7 8]  

Z = X.reshape([3,3])
print(Z)

[[0 1 2]  
 [3 4 5]  
 [6 7 8]]  
```

### 基本 ランダムな数値の行列を生成
```python
X = np.random.random_sample((2, 2, 2))
print(X)

[[[ 0.34358208  0.50170926]  
  [ 0.34160139  0.50989413]]  

 [[ 0.26411979  0.44274355]  
  [ 0.68313713  0.98779943]]]  
```

## NumPyの書式 [1次元目=開始:終了:間隔, 2次元目=開始:終了:間隔, ...]

```python
Z = np.ones((8,8))
Z[::2, ::2] = 0
Z[1::2, 1::2] = 0
print(Z)

[[ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]  
 [ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]  
 [ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]  
 [ 0.  1.  0.  1.  0.  1.  0.  1.]  
 [ 1.  0.  1.  0.  1.  0.  1.  0.]]  

```
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

## 条件に一致する値を抽出する。

```python
Z = np.arange(11)
print(Z)
[ 0  1  2  3  4  5  6  7  8  9 10]

print((3 < Z) & (Z <= 8))
[False False False False  True  True  True  True  True False False]
```
へー　これで、Trueと、Falseの配列が返ってくるんだね。

```python
print(Z[(3 < Z) & (Z <= 8)])
[4 5 6 7 8]
```

更に、Z[]で囲ってあげると、Trueの箇所だけ取り出せます。

更に、-1をかけて上書き
```python
Z[(3 < Z) & (Z <= 8)]　*= -1
print(Z)
[ 0  1  2  3 -4 -5 -6 -7 -8  9 10]
```

