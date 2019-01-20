+++
banner = "banners/html5.png"
date = "2017-06-17T19:09:08+09:00"
description = ""
tags = ["html"]
title = "CSS設計"
+++

CSSの設計について、簡単にまとめています。

<!--more-->

## カテゴライズ系
### [SMACSS(スマックス)](https://smacss.com/)
* 元Yahoo!のデベロッパーのJonathan Snook氏によって作られた設計方法
* 設計の考え方なので、ダウンロードできるフレームワークやライブラリがあるわけではない。

下記の５種類にカテゴライズされています。

1. ベース
2. レイアウト
3. モジュール
4. 状態(ステート)
5. テーマ


## モジュール系



## 命名規則系

### [BEM (Block Elemnet Modifier モディファイア)](https://en.bem.info/methodology/quick-start/)
  * 要素をいずれかのに分類して命名する。
  * マルチクラスでも、class名は省略しない

#### 書式
  * block__element
  - block__element_modifier
  * block_modifier
  * block-content_modifier

※ Modifierは、BlockまたはElementの変換した状態を表す要素です。

### [MindBEMding](https://github.com/manabuyasuda/styleguide/blob/master/how-to-bem.md)
* CSS界隈ではMindBEMdingがそのままBEMと呼ばれることが多いらしい

#### 書式
  * block__element
  * block__element--modifier
  * block--modifier
  * block-contnet--modifier


## スタイルガイド

javaDocのように、コメントである法則にしがって記述すると、スタイルガイドを生成してくれるツールがあります。

 [kss-node](https://github.com/kss-node/kss-node/wiki/Quick-Start-Guide) です。

 まだ、使ったことがないので、使用したらブログにまとめます。
