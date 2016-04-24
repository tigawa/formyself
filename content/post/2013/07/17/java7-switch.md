+++
title = "Java7 switch文"
date = "2013-07-17"
tags = ["java","1Z0-805"]
banner = "banners/java-logo.png"
+++

[1Z0-805 Upgrade to Java SE7](http://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=516&p_org_id=70&lang=JA)を受験するために、しばらくの間JavaSE7のネタをチョクチョク書き込んで行きまーす。

<!--more-->

javaSE7からswitch文に文字列が使用できるようになった。

次のように使用します。

# ソース
{{< gist tigawa 6010234 >}}

# 実行結果
 A

# switch文の条件に記述できる型

- byte型
- short型
- int型
- enum型
- String型
