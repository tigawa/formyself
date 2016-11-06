+++
title = "pythonの正規表現"
tags = ["python"]
date = "2016-11-06"
banner = "banners/python.png"
+++
pythonの正規表現について整理します。

<!--more-->

正規表現を使うためには、`re`パッケージをインポートします

```python
import re
```

`re` パッケージに以下のようなメソッドがあります。

sourceには、検索対象の文字列が入ります。

| メソッド | 説明 |
| :------------- | :------------- |
| match( '正規表現の文字' , source) | 先頭のマッチ検索  |
| search( '正規表現の文字' , source) | 最初のマッチ検索  |
| findall( '正規表現の文字' , source) | すべてのマッチの検索  |
| split( '正規表現の文字' , source) | マッチを利用した分割  |
| sub( '正規表現の文字' , '置換後の文字' , source) |  マッチした部分の置換 |

## 特殊文字

| パターン | マッチ対象 |
| :------------- | :------------- |
| \d | 1個の数字 |
| \D | 1個の数字以外の文字 |
| \w | 1個の英字 |
| \W | 1個の英字以外の文字 |
| \s | 1個の空白 |
| \W | 1個の空白以外の文字 |
| \b | 単語の境界線 |
| \B | 単語の境界線以外の文字間 |

## メタ文字

| パターン | マッチ対象 |
| :------------- | :------------- |
| abc | リテラルのabc |
| (expr) | expr |
| expr1 | exprt2 | expr1または、expr2 |
| . | \n以外の任意の文字 |
| ^ | ソース文字列の先頭 |
| $ | ソース文字列の末尾 |
| prev? | 0固か1個のprev |
| prev* | 0個以上のprev（欲張り) |
| prev*? | 0個以上のprev（控えめ) |
| prev+ | 1個以上のprev（欲張り) |
| prev+? | 1個以上のprev（控えめ) |
| prev {m} | m個の連続したprev |
| prev {m、ｎ} | m個以上n個未満の連続したprev(欲張り) |
| prev {m、ｎ}? | m個以上n個未満の連続したprev(控えめ) |
| [abc]| aまたはb、またはc |
| [^abc]| aまたはb、またはc以外 |
| [prev(?=next)]| nextが続いているprev|
| [prev(?!next)]| nextが続いていないprev|
| [(?=next)prev]| nextが前にあるprev|
| [(?!next)prev]| nextが前にないprev|

以上です。

# 勉強に使用している本

非常に分かりやすくておすすめです。

プログラムは経験あるけどPythonは初心者って方に、絶対おすすめの１冊です。

<iframe src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=bmsirato-22&o=9&p=8&l=as1&m=amazon&f=ifr&ref=qf_sp_asin_til&asins=4873117380" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
