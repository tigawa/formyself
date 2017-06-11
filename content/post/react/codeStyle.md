+++
title = "Reactのコーディング規約で、特に気を付けたいと思ったこと！"
tags = ["react"]
date = "2017-03-07"
banner = "banners/react.png"
+++

[[翻訳] Airbnb React/JSX Style Guide](http://qiita.com/koukun/items/e64762e407b8dd5e0247)を読んで、特に気をつけたいと思ったことを、自分のためのメモです。

<!--more-->

## 1ファイル = 1コンポーネント

ただし以下のような、ステートレスなコンポーネントは複数はOK
```javascript
function Hello(props) {
  return <div>Hello {props.name}</div>;
}
class HelloJohn extends React.Component {
  render() {
    return <Hello name="John" />;
  }
}
module.exports = HelloJohn;
```

## クラス vs React.createClass vs ステートレス

### stateやrefsを使う場合

```javascript
// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```

### stateやrefsを使わない場合
```javascript
// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

## 参考サイト
以下、参考にさせて頂きました。
ありがとうございます。

- [[翻訳] Airbnb React/JSX Style Guide](http://qiita.com/koukun/items/e64762e407b8dd5e0247)
