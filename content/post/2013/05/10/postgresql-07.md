+++
title = "PostgreSQL 基本的な運用管理"
date = "2013-05-11"
tags = ["PostgreSQL"]
banner = "banners/postgres-banner.png"
+++

PostgreSQLの基本的な運用管理について整理してきます。

<!--more-->

# データベースユーザの追加/変更/削除
## 実行例

```
★編集中★
```

# VACUUM
★概要 編集中★

## 実行例

```
★編集中★
```

# ANALYZE
★概要 編集中★

## 実行例

```text
★編集中★
```

# 自動バキューム機能

- VACUUMとANALYZEを自動的に実行する機能
- データベース内の不要領域の割合が多くなったテーブルに対して必要に応じてVACUUMとANALYZEを適宣実行する。
- PostgreSQL 9.0では自動バキューム機能がデフォルトでONになっている。


# システム情報関数
## version()
★概要 編集中★

### 実行例

```text
★編集中★
```

## current_database()

★概要 編集中★

### 実行例

```text
★編集中★
```

## current_user user
★概要 編集中★

### 実行例

```text
★編集中★
```

# 情報スキーマ
## 情報スキーマの見方

```
★編集中★
```

## システムカタログの見方

```
★編集中★
```

## 特記事項
- pg_rolesビューは、pg_authidカタログのビューです。
- pg_databaseカタログはデータベースごとに存在するものではなく書くデータベースクラスタに１つ存在する。
