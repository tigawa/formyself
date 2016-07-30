+++
title = "pythonのパッケージについて"
tags = ["python"]
date = "2016-07-30"
banner = "banners/python.png"
+++

pythonのpackageの考えかたは、基本Javaと同じだと思いました。

フォルダ階層で、パッケージの階層を表現します。

<!--more-->

- フォルダ構成

    ```
    ├── main.py
    └── sources
      └── aaa
        └── daily.py
    ```

- main.py

    ```python
    from sources.aaa import daily

    print('Daily forecaset:', daily.forecast())
    ```

フォルダ階層が深くても、`from`に`.`で区切って指定すればOKです。

`form`を使用している場合、`import`に`.`を指定するとエラーになります。

**あれ** 本には、各フォルダに、`__init__.py`が必要ってあるけど、なくてもエラーにならない。

なぜ？　不要なのと思い、python2で実行したらエラーになりました。

- python2での実行結果

    ```
    pack$ python2 main.py
    Traceback (most recent call last):
      File "main.py", line 1, in <module>
        from sources.aaa import daily
    ImportError: No module named sources.aaa
    ```

`__init__.py`ファイルを各ディレクトリに追加すると正常に実行されました。

ここで注意が必要なのは、sourcesフォルダにも`__init__.py`が必要です。

ないとエラーになります。

python3の本にも、`__init__.py`が必要とあったので、python3でも作った方がいいよね。

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
