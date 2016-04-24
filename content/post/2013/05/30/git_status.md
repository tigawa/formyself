+++
title = "Gitの現在の状態を確認する"
date = "2013-05-30"
tags = ["Git"]
banner = "banners/git-logo.png"
+++

次のコマンドで、次回のコミットに向けた状態とファイルの状態の２つを出力する。

git status

<!--more-->
- 次回コミット時の状態

   メッセージ　| 説明

   :------------ | :-------

   On branch master; | この状態でコミットすると、masterブランチにコミットされることを表す。

   nothing to commit;| ワークツリーとインデックスに対して変更がない場合に表示される。コミットするものがないということ。

   Changes to be committed; | ここに表示されるファイルは次回のコミット対称となる。git addコマンドでインデックスに登録したファイルやgit mergeコマンドでマージされたファイルなどが含まれる。

   Changed but not updated; | ワーキングツリーで変更されているが、その変更がインデックスに登録されていないファイルが表示される。

   Untrackde files; | ワーキングツリーに存在するがGitの管理対称となっていないファイルが表示される。

- ファイルの状態

   メッセージ　| 説明

   :-------- | :-------

   new file; | 新しくインデックスに登録されたファイル

   modified; | ワーキングツリーやインデックスの状態から変更されている事を示す。

   renamed;  | git mvコマンドでファイルを移動したりファイル名を変更した場合に表示される。

   deleted;  | ファイルを削除した場合に表示される git rm コマンドで削除した場合には次回コミット対象となるが、直接ファイルを削除した場合は、対称とはならない

   both modified; | マージや利ベースに失敗した場合で特に複数のブランチで変更が加えられているファイルに対して表示される。

   umerged; | マージやりベースに失敗した場合で、上記のboth modified以外のときに表示される。例えば一方のブランチでは削除されているが、一方のブランチでは変更されている場合。

次のコマンドで短縮表示が可能

		git status -sb

```
    ## master ←チェックアウトしているブランチ名
    M  test0 ←１列目がMなのでChanges to be commited;でmodified
    M test1 ←2列目がMなのでChanges but not updated; でmodified
    A  test2 ←１列目がAなのでChanges to be commited;でnew file;
    ?? test3 ←1,2列目が?なので、Untrached files;
```
