+++
title = "railsで軽量マークアップを実装する。"
date = "2013-09-16"
tags = ["rails"]
+++

railsで軽量マークアップを実装した時のメモを残します。

次の２つについて解説します。  
- **textile**(テキスタイル)
- **markdown**

<!--more-->

# Rubygem
次が`textile`,`markdown`を実現するうえで、定番のgemだそうです。

マークアップ   | gem                                                 | 備考
:------- | :-------------------------------------------------- | :--------------------
textile  | [RedCloth](http://redcloth.org/)                    | redmineのwikiで使われている記法
markdown | [BlueCloth](http://deveiate.org/projects/BlueCloth) | GitHubで使われている記法

# textileの実装方法
- Gemfileへ追記  

  ```
   # Textile
   gem "RedCloth"
  ```

- bundle install  

  ```
   bundle install --path=vendor/bundle
  ```

1. erbの編集
2.  次はentry.contentに`textile`形式で格納されているので、表示する時に変換します。
3.  <p class="text-error"> ポイント：`<%== %>`でエスケープせずに、htmlをそのまま出力します。</P>
4.  <%== RedCloth.new(entry.content).to_html %>

# markdownの実装方法
- Gemfileへ追記

  ```
   # Textile
   gem "bluecloth"
  ```

- bundle install

  ```
   bundle install --path=vendor/bundle
  ```

1. erbの編集
2.  次はentry.contentに`markdown`形式で格納されているので、表示する時に変換します。
3.  <p class="text-error"> ポイント：`<%== %>`でエスケープせずに、htmlをそのまま出力します。</P>
4.  <%== BlueCloth.new(entry.content).to_html %>

## 人気のあるマークアップのgem
[markup_processors](https://www.ruby-toolbox.com/categories/markup_processors.html)

1位. Markup

2位. Redcarpet

3位. RedCloth

## 参考サイト
以下のサイトを参考にさせて頂きました。

ありがとうございました。  

[Rubyで使えるMarkdownパーサー](http://higelog.brassworks.jp/?p=1704)

以上です。
