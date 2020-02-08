+++
date = "2020-02-08T14:41:51+09:00"
tags = ["javascript","node.jp"]
categories = ["TIL"]
banner = "banners/til.png"
author = "taiichi.igawa"
type = "post"
title = "Promiseをthenでつなげて、Promiseを呼び出す方法"
+++

<!--more -->

```
function putObjectToS3(key, data) {
    return new Promise((resolve, reject) => {
        var params = {
            Bucket: bucket,
            Key: key,
            Body: data
        }

        console.log('p11')
        s3.putObject(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                console.log('p11')
                resolve(data);
            }
        });
    }).then((data) => new Promise(function (resolve, reject) {
        var params = {
            Bucket: bucket
        };
        s3.getBucketLocation(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            let location = data.LocationConstraint;
            console.log(location, data);
            let link = util.format("https://s3-%s.amazonaws.com/%s/%s",
                location,
                bucket,
                key);
            console.log(link)
            resolve(link);
        });
    }));
```