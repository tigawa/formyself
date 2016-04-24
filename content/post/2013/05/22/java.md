+++
title = "windowsのファイル共有からファイルを読み込む方法"
date = "2013-05-22"
tags = ["java"]
banner = "banners/java-logo.png"
+++

[JCIFS](http://jcifs.samba.org/)を使って実現します。

# JCIFSとは？
- JCIFSはCIFS/SMBプロトコルを実装したオープンソースのJavaライブラリです。
- CIFSはMicrosoftのWindowsプラットフォーム上のファイル共有プロトコルです。
- JCIFSを使用するとJavaアプリケーションからWindows共有ネットワークにアクセスできます。
- LGPLで公開されています。

<!--more-->

# 参考サイト

- [ファイル名を取得するサンプル](http://wiki.paulownia.jp/java/jcifs)
- [ファイルの内容を取得するサンプル](http://tarotaro.jugem.cc/?eid=1169)

# close漏れの恐怖

```java:sample.java
  /* 悪いソースの例 */
  SmbFile smbFile = new SmbFile(smbUrl);
  java.io.InputStream inputStream = new SmbFileInputStream(smbFile);
```

SmbFileInputStreamをnewしてinputStreamを取り出したのはいいけどクローズが漏れていた。

**2時間半**くらいは平気で動くけど、それ以降エラーが発生するようになるので要注意!!

以下、その時のエラーログ

```log
jcifs.smb.SmbException: A device attached to the system is not functioning.
    at jcifs.smb.SmbTransport.checkStatus(SmbTransport.java:545)
    at jcifs.smb.SmbTransport.send(SmbTransport.java:645)
    at jcifs.smb.SmbSession.send(SmbSession.java:244)
    at jcifs.smb.SmbTree.send(SmbTree.java:119)
    at jcifs.smb.SmbFile.send(SmbFile.java:770)
    at jcifs.smb.SmbFile.open0(SmbFile.java:982)
    at jcifs.smb.SmbFile.open(SmbFile.java:999)
```
