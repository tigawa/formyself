+++
title = "octopressでbootstrapのデザインを適用した後にスタイルをカスタマイズする"
date = "2013-07-20"
tags = ["octopress"]
banner = "https://cdn.tutsplus.com/webdesign/authors/ian-yates/octopress-header.png"
+++

octopressでbootstrapのデザインを適用したが、記事のタイトルと本文の間に、広いマージンがあり、狭めるためにスタイルシートをカスタマイズしました。

その時の作業を記録します。

<!--more-->

# 手順
1. 次のファイルを編集します。

```css:octopress/sass/bootstrap/_type.scss
// Page header
// -------------------------

.page-header {
//★ここをコメントアウトします。★
//  padding-bottom: ($baseLineHeight / 2) - 1;
//  margin: $baseLineHeight 0 ($baseLineHeight * 1.5);
//  border-bottom: 1px solid $grayLighter;
}
```

以上で終了です。

# 特記事項
- octopress/sass/bootstrap/配下の*.sassファイルを変更すれば色々カスタマイズ出来そうです。
