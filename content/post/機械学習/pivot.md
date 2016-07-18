+++
title = "pandasでピボットテーブルを扱う"
tags = ["機械学習"]
date = "2016-07-16T00:00:00+09:00"
banner = "banners/pandas.png"
+++

pandasでピボットテーブルを扱う方法を紹介します。

今後、機械学習でデータを分析する際に多用しそうなのでメモします。

イラストのパンダと`pandas`は一切関係ありません！

<!--more-->

# ここから本題

何はともあれ、ピボットテーブルを生成するコードはこれです！！

テストデータの作成からピボットテーブルの作成までのコードは最後に載せておきます。

- ピボットテーブルの生成

    ```python
    pt = pd.pivot_table(df,
                # 集計したい縦のキー
                   index=['sex','pclass'],

                # 集計したい横のキー(複数指定化)
                   columns='survived',

                # 集計したい項目 (指定がなければ、上記のキーになっていない項目)
                   values='id',

                # 個数をカウントする。これがないとValuesの平均値になる。
                   aggfunc=lambda x : len(x),

                # # NaN を 0埋めする
                   fill_value = 0,
                )
    pt
    ```

- 結果表示

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>survived</th>
      <th>0</th>
      <th>1</th>
    </tr>
    <tr>
      <th>sex</th>
      <th>pclass</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">female</th>
      <th>2</th>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">male</th>
      <th>2</th>
      <td>5</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>

テストデータの作成からピボットテーブルの作成までのコードです。

- 必要なライブラリを読み込み

    ```python
    %matplotlib inline
    import pandas as pd
    import random
    ```

- データの準備

    ```python
    rg = range(0,10)
    title = ['id','sex','pclass','survived']
    sex = [random.choice(['female','male']) for i in rg]
    pclass = [random.choice([1,2,3]) for i in rg]
    survived = [random.choice([0,1]) for i in rg]
    survived_list = list(zip(rg, sex, pclass, survived))
    ```

- データフレームに変換

    ```python
    df = pd.DataFrame(survived_list, columns=title)
    df
    ```

- テストデータの作成

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>sex</th>
      <th>pclass</th>
      <th>survived</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>male</td>
      <td>2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>male</td>
      <td>2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>female</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>male</td>
      <td>2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4</td>
      <td>female</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <th>5</th>
      <td>5</td>
      <td>male</td>
      <td>2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>6</td>
      <td>female</td>
      <td>2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>7</td>
      <td>male</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>8</th>
      <td>8</td>
      <td>male</td>
      <td>3</td>
      <td>0</td>
    </tr>
    <tr>
      <th>9</th>
      <td>9</td>
      <td>male</td>
      <td>2</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>

- ピボットテーブルの生成

    ```python
    pt = pd.pivot_table(df,
                # 集計したい縦のキー
                   index=['sex','pclass'],

                # 集計したい横のキー(複数指定化)
                   columns='survived',

                # 集計したい項目 (指定がなければ、上記のキーになっていない項目)
                   values='id',

                # 個数をカウントする。これがないとValuesの平均値になる。
                   aggfunc=lambda x : len(x),

                # # NaN を 0埋めする
                   fill_value = 0,
                )
    pt
    ```

- 結果表示

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>survived</th>
      <th>0</th>
      <th>1</th>
    </tr>
    <tr>
      <th>sex</th>
      <th>pclass</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">female</th>
      <th>2</th>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">male</th>
      <th>2</th>
      <td>5</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>
