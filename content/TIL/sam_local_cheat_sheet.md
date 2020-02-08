+++
date = "2020-02-08T14:57:32+09:00"
tags = ["TIL"]
categories = ["TIL"]
banner = "banners/til.png"
author = "taiichi.igawa"
type = "post"
title = "sam local cheat sheet"
+++
## 初期設定
- sam init --runtime nodejs12.x
- npm install

## 初回
- sam build
- sam deploy --guided

ちゃんとパラメータの入力を求めている。

## ２回目以降
- sam deploy 

## ライブラリを追加する場合
- cd node のプロジェクトに移動
- npm i xxxxx -S

# aws cloudformation 

stack local に対してはこちらを実行するイメージかな

## 検証
aws cloudformation validate-template --template-body file://template.yaml

## deploy
aws cloudformation deploy --template-file template.yaml --stack-name my-new-stack  --parameter-overrides UploadS3BucketName=knowhouse.upload

## スタックの削除
aws cloudformation delete-stack  --stack-name my-new-stack4

## スタックの一括削除
aws cloudformation list-stacks | jq -r .StackSummaries[].StackName | xargs -L 1 aws cloudformation delete-stack --stack-name
localstackに対しても正しく動作できた。
ここから、S3 Uploadの続きをやるべし！

https://qiita.com/okoshi/items/b90265745a5481c51128#%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AE%E3%81%BF%E5%8F%AF%E8%83%BD%E3%81%AA-iam-%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%92%E4%BD%9C%E6%88%90

上の例は難しい、STSでロールを取得しない形で一度実装してみる
https://qiita.com/hazigin/items/cd8e5a589b026ec771bf

# lamuda + S3 + localstack
S3 localstackに接続する方法
https://dev.classmethod.jp/etc/sam-local-with-localstack/

# S3Upload ACL
* S3 Upload ACLなど
https://hotchpotchj37.wordpress.com/2017/03/08/aws-sdk-node-js-%E3%81%A7-s3-putobject%E3%81%99%E3%82%8B%E3%81%A8%E3%81%8D%E3%81%AB%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B%E3%81%93%E3%81%A8/

# STSを利用した S3のアップロード
https://qiita.com/okoshi/items/b90265745a5481c51128gi