+++
date = "2021-03-21T11:54:43+09:00"
tags = ["aws"]
banner = "banners/icons8-amazon-web-services.svg"
author = "igawa.taiichi"
type = "post"
title = "Lambdaまとめ"
+++

Lambda について、[aws のドキュメント](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/welcome.html)で気になるところの引用及びリンクをまとめます。
: definition

<!--more-->

## AWSLambda とは

AWS Lambda は、サーバーのプロビジョニングや管理の必要なしにコードを実行できるコンピューティングサービスです
1 日あたり数個から 1 秒あたり数千のレベルまで自動的にスケーリングされます。

## 開始方法

### クオータ

- [Lambda のクォータ](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/gettingstarted-limits.html)

---

## アクセス許可

### [実行ロール](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/lambda-intro-execution-role.html)

- Lambda 関数の実行ロールは、AWS サービスおよびリソースにアクセスする許可を関数に付与する
- 関数を作成する際にこのロールを指定することで、関数が呼び出されると、Lambda によってこのロールが引き受けられます。

## 関数の管理

###

### バージョン

-

### エイリアス

### Layer

### ネットワーク

### インターフェイス VPC エンドポイント

### データベース

### ファイルシステム

### コード署名

### タグ

---

## 関数を呼び出す

### 同期呼び出し

### 非同期呼び出し

### イベントソースマッピング

### 関数の状態

### エラー処理

### 拡張機能の使用

### コンテナイメージ

---

## Lambda アプリケーション

### アプリケーションの管理

### アプリケーションの作成

### ローリングデプロイ

### ユースケース

### ベストプラクティス

---

## Lambda ランタイム

### 実行環境

### コンテナーイメージ

### ランタイム API

### 拡張機能 API

### ランタイム環境

### Logs API

### カスタムランタイム

### カスタムランタイムの公開

---

## コンテナーイメージの使用

### コンテナイメージの作成

### コンテナイメージをローカルでテストする

---

## 他のサービスで AWS Lambda を使用する

### Alexa

### API Gateway

### CloudTrail

### CloudWatch Events

### CloudWatch Logs

### CloudFormation

### Lambda@Edge

### CodeCommit

### CodePipeline で使用する

### Amazon Cognito

### Config

### Amazon DynamoDB

### Amazon EC2 で使用する

る

### Application Load Balancer

### EFS

### Kinesis Data Firehose

### Kinesis

### Lex

### RDS

### S3

### S3 バッチ

### SES

### SNS

### SQS

### X-Ray

---

## オーケストレーション

### ステートマシンのアプリケーションパターン

### Lambda

### Step Functions

---

## Apache Kafka

---

## モニタリング

---

## セキュリティ

---

## トラブルシューティング
