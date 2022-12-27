# WIKI

## 記事を投稿する
hugo new golang/string.md
hugo new golang/string.md --editor="code"

## セクションごとに雛形ページを作る
cd themes/hugo-icarus-theme/archetypes/
ここ配下に雛形を作るディレクトリ名が、ファイル名になる。

## サブセクションをメインセクションに追加する

config.toml
mainSections に セクション名を追加します。

## ローカルで確認 (下書き Draft の記事も確認できる)
hugo server -D