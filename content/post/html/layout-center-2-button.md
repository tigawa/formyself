+++
title = "中央寄せのレイアウト"
tags = ["html"]
date = "2017-06-11"
banner = "banners/html5.png"
+++

このように全体を中央寄せにしたいが、一番下のボタンは左寄せにするやり方を紹介します。[デモ](/html/layout-center-2-button.html)

![完成イメージ](/images/layout-center-2-button.png)


<!--more-->
さっそくソースです。

- html
```html
<div class="continer">
  <div class="section">
    <div class="row">
      <button type="button" name="button">ボタン１</button>
      <button type="button" name="button">ボタン２</button>
    </div>
    <div class="row">
      <button type="button" name="button">ボタン３</button>
      <button type="button" name="button">ボタン４</button>
    </div>
    <div class="row">
      <button type="button" name="button">ボタン５</button>
    </div>
  </div>
</div>
```

- css
```css
.continer {
      max-width: 600px;
      margin: auto;
      text-align: center;
      border: solid 1px black;
}
.section {
      display: inline-block;
      text-align: left;
      border: solid 1px red;
}
```

ポイントは、次の通りです。

### 一番外側の`div.continer`

- `max-width: 600px` で、`margin: auto`で中央寄せにする。
- `text-align: center;`を指定して、内側の要素を中央寄せにする。

### 次に内側の'div.section'

- 'display: inline-block'を指定して、自身を中央寄せにする。
- `text-align: left;`を指定して、内側の要素を左側にする。

## 補足

このやり方は、ボタンの長さが全て均等である必要があるので注意してください。

以上です。
