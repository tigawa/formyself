+++
title = "bootstrapを使わずにレイアウトを組む"
tags = ["html"]
date = "2016-08-06"
banner = "banners/html5.png"
+++

bootstrapを使わずにレイアウトを組んだので紹介します。

**javascriptは一切使用しません。** 全て **css** のみで作成します。

完成イメージ

[デモ](/html/table-cell.html)

![完成イメージ](/banners/layout.png)

<!--more-->

## やりたいこと
- (1) `info`を横幅を固定で右寄せにして、`nav`を画面サイズにより伸び縮みさせたい。
- (2) `side`を横幅を固定で左寄せにして、`main`を画面サイズにより伸び縮みさせたい。
- (3) `side`と`main`の縦幅は画面いっぱいに表示したい。
- (4) `main`の内容が画面の縦幅を超えた場合に、`side`もそれに合わせて伸び縮みしたい。

## 実現方法
### やりたいこと (1)と(2)を実現する方法

- ポイント1
  - divは縦に並びます。`nav`と`info`は横並びにしたいので次を指定します。

    `display: inline-block`

- ポイント２
  - 伸び縮みさせたい要素の`width`を次のように指定します。

    `calc(100% - 固定px)`

    固定px には、固定にしたい要素のpxを指定します。

- ポイント３
  - 横幅をcalcで計算してピッタリにしているせいか、何故か横並びになりません。
  - 解決方法
      - 案1

        横並びの右側の要素に、`float: right`を指定して浮かせて、ピッタリはめ込みます。

      - 案2

        ぴったりだと縦に並ぶのでゲタをはかせて、ピッタリはめ込みます。

        `calc(100% - 固定px - 6px)`

        6pxがゲタの部分です。

        6pxの根拠はありません。なぜか6pxでうまくいったという感じです。

    今回は、案1を採用しています。

    #### やりたいこと (3)(4)を実現する方法

- `main`の高さが`side`に影響させたいので下記のようにします。

    ```html
    <main style="display: table">
      <div style="display: table-cell">side<div>
      <div style="display: table-cell">main<div>
    </main>
    ```

  このようにすることで、`main`の縦幅が、`side`にも影響します。まさにテーブルですね。

  わかりやすいよに、style属性で指定してますが、後述で示すコードは、classで指定しています。


## 完成コード
<script src="https://gist.github.com/tigawa/0134fb648920c83f36299eac68988f49.js"></script>


## 感想

業務システムでよくあるパターンのレイアウトを、例にして説明しました。

今後このレイアウトの場合は、これを利用してさくっとHTMLを組みたいです。

以上です。