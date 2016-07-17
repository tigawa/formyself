+++
title = "pandasで特定の条件に一致する行の、特定の項目を更新する方法"
tags = ["python","pandas","機械学習"]
date = "2016-07-17"
banner = "banners/pandas.png"
+++

pandasで特定の条件に一致する行の、特定の項目を更新する方法を紹介します。

データから特徴点を抽出して加工するさいに多様すると思います。

<!--more-->

- やりたいこと
  - チケットの料金(Fare)を分類したい。
  - FareCteg項目を追加して分類したい。


    ```python
    # チケットの料金を分類するため、'FareCteg'項目を追加
    df_train['FareCateg'] = "0: <10"

    # パラメータの第１引数に条件を指定して一致する場合に、第２引数で示した'Farecteg'に値を設定する
    df_train.loc[df_train['Fare'].values >= 10, 'FareCateg'] = "1: 10<20"
    df_train.loc[df_train['Fare'].values >= 20, 'FareCateg'] = "2: 20<30"
    df_train.loc[df_train['Fare'].values >= 30, 'FareCateg'] = "3: 30+"
    ```


- 特記事項
  - locはメソッドではない、２次元配列を指定するイメージ
  - 第２引数に、いきなり存在しないカラムを指定してもOK　-> 指定したカラムが自動的に追加される。
  - 更新する項目名を複数指定することも可能

      ```python
      df_train.loc[[0,2], ['FareCateg','FareCateg']] = 'xxxx'
      ```

  - 第２引数に複数の項目名を指定する場合は、存在しない項目名を指定するとエラーになる。

以上です。
