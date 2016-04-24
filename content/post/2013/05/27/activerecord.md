+++
title = "railsで各RDBMSの文字列連結に対応させる"
date = "2013-05-27"
tags = ["rails"]
+++

# 問題点
sqliteでは問題なく動作するのに、mysqlで実行すると検索結果が０件になる。

問題のSQL

```sql
SELECT "users".*
FROM "users"
  INNER JOIN "profiles"
  ON ("profiles"."user_id" = "users"."id")
WHERE (last_name || first_name LIKE '%井川%')
ORDER BY created_at desc
```

<!--more-->

# 原因

どうやらMysqlでは文字連結に「||」は使用できないらしい。<br>concatで文字連結する必要があるようだ。<br>        concat( last_name, first_name ) LIKE '%井川%'

ただし、次のように変更すると、sqliteで実行するとエラーになる。 あ～困った！！

# 対応内容

Mysql,sqlite,oracle,sqlServerすべてに対応するため、次のように修正してみる。  

config/initializers/配下に、次のファイルを配備

{{< gist tigawa 5657828 >}}

## 呼び出し側

実装前

```ruby
scope :name_search, lambda{|name| where ('last_name' || 'first_name') LIKE ?", "%#{name}%" }
```

実装後

```ruby
scope :name_search, lambda{|name| where("#{connection.concat('last_name', 'first_name')} LIKE ?", "%#{name}%") }
```

以上で、実装終了！！
