+++
title = "pandasでピボットテーブルで割合を表示する。"
tags = ["python","pandas","機械学習"]
date = "2016-07-16T01:00:00+09:00"
banner = "banners/pandas.png"
+++

[前回]({{< relref "pivot.md" >}})ピボットテーブルの表示の仕方を載せました。

今回はその応用で、割合を表示したいと思います。

<!--more-->

### 本題はここから

- コード

  ```python
  pt2 = pt.apply(lambda x : x/sum(x), axis=1)
  pt2
  ```

  pt(ピポットテーブル)については、[前回]({{<relref "pivot.md">}})の記事を参考にしてください。

  `axis=0` にすると縦方向の割合を表示してくれます。

- 結果

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
      <td>0.500000</td>
      <td>0.500000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.000000</td>
      <td>1.000000</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">male</th>
      <th>2</th>
      <td>0.833333</td>
      <td>0.166667</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1.000000</td>
      <td>0.000000</td>
    </tr>
  </tbody>
</table>
</div>
