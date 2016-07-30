+++
title = "pythonの制御文"
tags = ["python"]
date = "2016-07-03"
banner = "banners/python.png"
+++

Pythonの制御文で、`いいね！`と思ったことをまとめます。

特に内包表記が好きになりました。コードが簡潔になり、すっきりするのでどんどん使って行きたいです。

<!--more-->
# ここから本題

# if文

- 'else if'ではなく、'elif'です。rubyの`elsif`より１文字少ない！　**注意：最後に:(コロン)付けないとエラーになります。**

    ```python
    if number > 5:
      print ('5より大きい')
    elif number < 5:
      print ('5より小さい')
    else
      print ('5と同じ'')
    ```

- Falseとみなすもの

  Falseとみなされるもの | 説明
  :------------ | :---
  False         |
  null          |
  0             |
  0.0           |
  ''            | 空文字
  []            | 空リスト
  ()            | 空タプル
  {}            | 空辞書
  set()         | 空集合

# for
  - 1から10までをループさせる場合
    - 正しい例 (Pythonっぽい)

        ```python
        for i in range(0,10) :
        ```

    - 間違った例（Pythonでこんな構文はありません！！）

        ```python
        for i = 0 ; i < 10 i++ :
        ```

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

[Pythonのリストへ]({{< relref "list.md" >}})
