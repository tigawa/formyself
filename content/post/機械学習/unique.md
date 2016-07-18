+++
title = "pandasでindexを設定する方法"
tags = ["機械学習"]
date = "2016-07-17"
banner = "banners/pandas.png"
+++

pandasでindexを設定する方法を紹介します。

indexに指定する値は、ユニークである必要があります。

<!--more-->

- 'PassengerId' がユニークかどうかチェックします。

    ```python
    assert len(df) == len(df['PassengerId'].unique())
    ```

- ユニークだったので、indexに設定します。

    ```python
    df.set_index('PassengerId', inplace=True)
    ```

  - inplaceは破壊的メソッドにしてくれる設定です。
  - これを付けないと、破壊的メソッドにはなりません。

以上です。
