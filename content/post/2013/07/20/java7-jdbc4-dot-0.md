+++
title = "JDBC4.0 ラージオブジェクト"
date = "2013-07-20"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

JDBC3.0ではBLOBとCLOBをサポートしていましたが、JDBC4.0ではNCLOBもサポートするようになりました。

<!--more-->

NCLOB=テキスト形式の大きなサイズのデータを扱うクラス

# LOBの格納メソッド及び、取り出しメソッド

LOB  | 格納メソッド                                                                       | 取り出しメソッド
:--- | :--------------------------------------------------------------------------- | :------------------
BLOB | PreparedStatement#setBinarySteam()                                           | ResultSet#getBlob()
CLOB | PreparedStatement#setAsciiStream()<BR>PreparedStatement#setCharacterStream() | ResultSet#getClob()
