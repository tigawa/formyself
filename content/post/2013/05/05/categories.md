+++
title = "categories"
date = "2013-05-05"
tags = ["octopress"]
banner = "https://cdn.tutsplus.com/webdesign/authors/ian-yates/octopress-header.png"
+++

カテゴリから記事を選択したくなったので、ググってみたら"いい感じ"のpluginを発見!!

<!--more-->

### 導入イメージ

![カテゴリ](/images/categories.png)

- 次のサイトを参考にしたら、サクッと軽く導入できた！！
- [octopressでカテゴリ表示する方法](http://qiita.com/items/944db11e257782749270)


### ちょっとカスタマイズしたところ

「tag_cloud.html」だと、横にずらずらっと表示されて好みじゃなかったので、「category_list.html」に変更した。
これだと縦にカテゴリが並んでいい感じ！！(上記のイメージ)

```ruby:_config.yml
default_asides: [custom/asides/category_list.html, asides/github.html, asides/googleplus.html]
```
