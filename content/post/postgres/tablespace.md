+++
title = "PostgreSQLのテーブルファイルについて"
date = "2016-11-24"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
draft = "true"
+++

PostgreSQLのテーブルファイルについて、について覚書です。

<!-- more -->

## テーブルファイルの特徴

- 1ファイル = 最大1GB
- データ量の増加に伴いページ単位(8192byte)に増加していく
- VACUUMのメンテナンス処理で、FreeSpaceMap,VisibilityMapは作成される。
- 9.2以降、VisibilityMapは、「Index Only Scan」でも使用されるようになった。

- 下記の物理ファイルの説明
  - 24595 テーブルファイル
  - 24595_fsm FreeSpaceMapは、空き領域を管理する。
  - 24595_vm VisibilityMap VACUUMを効率よくおこなうために利用される。

### テーブルファイルを確認
- pgbench_accountsテーブルのoidを確認

    ```
    /main/base/24582$ oid2name -d benchdb -t pgbench_accounts
    From database "benchdb":
      Filenode        Table Name
    ----------------------------
         24595  pgbench_accounts
    ```

- 物理ファイルの確認
    ```
    postgres@26f4d284871d:~/9.3/main/base/24582$ ls -l | grep 24595
    -rw------- 1 postgres postgres 13434880 Jun 17 16:51 24595
    -rw------- 1 postgres postgres    24576 Jun 17 16:51 24595_fsm
    -rw------- 1 postgres postgres     8192 Jun 17 16:51 24595_vm
    ```
