+++
title = "eclipse 4.3 + ubuntu + 日本語"
date = "2013-07-27"
tags = ["eclipse"]
+++

2013年6月27日にeclipse 4.3が公開になりました。

毎年6月に新バージョンがリリースされているんですね。

インストール手順及び、日本語化を行います。

<!--more-->

# ブログのインストール環境
-ubuntu 12.04 LTS

# ダウンロード
次のサイトから`eclipse`と`pleiades`をダウンロードしてください。

## [eclipse](http://www.eclipse.org/downloads/)のダウンロードサイト
![eclipseダウンロードサイト](/images/eclipse_install_01.png)

## [pleiades](http://mergedoc.sourceforge.jp/index.html#/pleiades.html)のダウンロードサイト
![pleiadesダウンロードサイト](/images/plerades.png)

# 事前準備
インストールする前に次のディレクトリのインストール先を決めて置く
- インストールディレクトリ
-   /usr/local/eclipse
- ワークスペースを置くディレクトリ
-   /home/＜ユーザ名＞/workspace

# インストール手順
1.jdkインストール  

次の順番にインストールして行く

{{< gist tigawa 6098050 >}}

2.eclipseのインストール

			cd /usr/local
			sudo tar xvfz ~/ダウンロード/eclipse-jee-kepler-R-linux-gtk.tar.gz

3.pleiadesのインストール

			cd /usr/local/eclipse
			sudo unzip /home/igawa/ダウンロード/pleiades_1.4.0.zip

4.eclipse.iniファイルの設定

最後の一行を追加する。

```text:/usr/local/eclipse/eclipse.ini
-startup plugins/org.eclipse.equinox.launcher_1.3.0.v20130327-1440.jar --launcher.library plugins/org.eclipse.equinox.launcher.gtk.linux.x86_1.1.200.v20130521-0416 -product org.eclipse.epp.package.jee.product --launcher.defaultAction openFile -showsplash org.eclipse.platform --launcher.XXMaxPermSize 256m --launcher.defaultAction openFile --launcher.appendVmargs -vmargs -Dosgi.requiredJavaVersion=1.6 -XX:MaxPermSize=256m -Xms40m -Xmx512m -javaagent:/usr/local/eclipse/plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar #←この行を追加する。
````

5..bashrcにeclipseのパスを追加する

```text:~/.bashrc
export PATH="/usr/local/eclipse:$PATH"
````

6.変更内容を反映

	source .bashrc

# 起動方法

	次のコマンドを入力すれば起動しまーす。

		eclipse

# 参考サイト
> [http://www.kkaneko.com/rinkou/javaintro/linux_eclipse.html](http://www.kkaneko.com/rinkou/javaintro/linux_eclipse.html)

以上
