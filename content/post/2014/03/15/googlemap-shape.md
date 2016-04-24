+++
title = "GoogleMapで任意の県に色をつける方法"  
date = "2014-03-15"  
tags = ["GoogleMpas"]  
banner = "banners/googleMaps.jpg"
+++

意外と大変だったので紹介します。

島根県を赤色で塗りつぶしました。  
このブログ通りに進めれば、上記のイメージのようにできます。  

<!--more-->

任意の県の輪郭を手書きする事は、大変なので県境の情報が入っている
[Shape File(シェープファイル)](http://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%97%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)を利用して実現したいと思います。

大まかな流れを説明します。

### 大まかな流れ
たったの４ステップでOKです。

**Step1.** 任意の県の[Shape File(シェープファイル)](http://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%97%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)を入手する。

**Step2.** [Shape File(シェープファイル)](http://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%97%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)から、KMLファイルに変換する。

**Step3.** [KML](https://developers.google.com/kml/?hl=ja)ファイルを直接編集して、色、スタイルなどを指定する。

**Step4.** JavaScriptでGoogleMap上に、KMLファイルを読み込む。


### 用語説明
* [Shape File(シェープファイル)](http://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%97%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB)とは？  
	ウィキペディアから引用
		シェープファイル (Shapefile) は、 他の地理情報システム(GIS)間でのデータの相互運用におけるオープン標準として用いられるファイル形式である。 例えば、井戸、川、湖などの空間要素がベクタ画像である点 (数学)、線分、多角形で示され、各要素に固有名称や温度などの任意の属性を付与できる

* [KML](https://developers.google.com/kml/?hl=ja)ファイルとは？  
	ウィキペディアから引用
		アプリケーション・プログラムにおける三次元地理空間情報の表示を管理するために開発された、XMLベースのマークアップ言語である。2008年4月にKML2.2版は、そのままOpen Geospatial Consortium, Inc (OGC) という地理情報システムのオープンソース化を目指す団体の規格にOGC KMLとして取り入れられた[1]。

### 作業開始

#### Step1 任意の県のShape Fileを入手する

[地図データが公開されているサイト](http://www.okada.jp.org/RWiki/?ShapeFile%A5%E9%A5%A4%A5%D6%A5%E9%A5%EA#u174b44b)  

次をクリックしてzipファイルをダウンロードします。  
![ダウンロードサイト](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000031.JPG)

ダウンロードしたファイルを解凍して、`simanek.shp`を取り出します。

#### Step2 Shape File -> KML Fileに変換する

Shape FileをKML Fileに変換するためには、`QGIS`というアプリを使用します。  

次のサイトからダウンロードします。  
##### QGIS インストール
[http://www.qgis.org/ja/site/](http://www.qgis.org/ja/site/)

次をクリックします。  
![ダウンロードサイト１](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000025.JPG)
自分のマシーンは、64bitのため次をクリックします。  
![ダウンロードサイト2](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000026.JPG)

ダウンロードしたファイルを実行して、インストールを開始します。  
とくに迷わずインストールする事が出来ました。  

##### Shape File -> KML Fileに変換する

QGIS Desktopを起動します。  

ブラウザタブから、先ほどダウンロードした、`simanek.shp`ファイルを開きます。  
![KMLファイルを開く](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000032.JPG)

レイヤタブから、右クリックして`名前をつけて保存`を選択します。  
![別名でファイルを保存](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000033.JPG)

KMLを選択してから、出力するファイル名を入力し、「OK」ボタンを押下します。  
![KMLファイルに変換](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000034.JPG)


#### Step3 KML Fileを直接編集する
上記で保存したKMLファイルをテキストエディタで開いて次のように編集します。  

[KMLのリファレンス](https://developers.google.com/kml/documentation/kmlreference?hl=ja#polystyle)  

<script src="https://gist.github.com/tigawa/9585639.js"></script>


#### Step4 JavaScriptでGoogleMap上に、KMLファイルを読み込む
次のように、KMLファイルを読み込んでください。  
とりあえず、dropBoxに格納して、確認しています。  
以下のリンクから、下記のサンプルを動作確認することが出来ます。  

[動作確認](https://dl.dropboxusercontent.com/u/36134036/kml/index.html)  

KMLファイルとhtmlは次のように格納しています。  
![フォルダ](https://dl.dropboxusercontent.com/u/36134036/images/octopress/WS000035.JPG)  

サンプルソース  
<script src="https://gist.github.com/tigawa/9584599.js"></script>

以上でーす！！

おめでとうございます。
上記で作ったサンプルを動かせば最初に示した完成イメージを表示します。

### 感想
今回やりたい事が、１つにまとまっているサイトが、なかなか無かったので、記事を書こうと思いました。

GoogleMapの開発がほぼ経験のないまま、ここまで行き着くのに1日3時間くらいで、約1週間くらい費やしました。
「KMLファイルでどうやら、GoogleMap上に図形がかけるぞ」と分かってから、Shape Fileに辿り付くまでに結構苦労しました。
KML Fileを直接編集してスタイルを指定するのに、わかってしまえば簡単なことですが行き着くまでに苦しかったです。

皆様の開発の一助になれば幸いです。

### 参考サイト
以下のサイトを参考にさせて戴きました。
ありがとうございました。

> [streetcar weblog 第二世紀）](http://www.streetcar.jp/blog/?e=692)

以上です!
