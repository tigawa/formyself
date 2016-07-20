+++
title = "JPAで特定の項目だけ更新する方法"
tags = ["java"]
date = "2016-07-21"
banner = "banners/java-logo.png"
+++

JPAで特定の項目だけ更新する方法を紹介します。

<!--more-->
# 経緯
大量データを更新する時に、`save()`メソッドを実行するとすごく時間がかかった。(13分くらい)

更新したい項目は１つだったので、特定の更新項目だけ更新すれば早くなるのではないかと思い、下記の方法を試してみました。

結果はまだでていませんが、早くなったらまた共有します。


```java
@Repository
public interface OrderRepository extends JpaRepository<Order, Long>
{
    @Modifying
    @Query("update Order o set o.item = :itemName where o.date < :orderedDate")
    int SetItemBefore(@Param("orderedDate")Date date, @Param("itemName")String newItemName);
}
```
# 参考サイト
- [https://gist.github.com/ryo-murai/3741340#updatedelete-条件指定で複数entity](https://gist.github.com/ryo-murai/3741340#updatedelete-条件指定で複数entity)


参考にさせていただきました。ありがとうございます。
