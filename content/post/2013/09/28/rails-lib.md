+++
title = "railsの初歩 > lib配下に共通部品を定義する。"
date = "2013-09-28"
tags = ["rails"]
+++

railsでlib配下に共通クラスを実装する方法を紹介します。
<!--more-->

# 必要なファイル

以下のファイルが必要になります。

- <webapp>/lib/yahoo.rb **(共通クラスのソース)**
- <webapp>/config/environment.rb

# yahoo.rb

```ruby:yahoo.rb
	module Yahoo
		class Proofreading
    	require 'nokogiri'

    	def self.make(sentence)
      	conn = Faraday.new(:url => 'http://jlp.yahooapis.jp') do |builder|
            builder.request :url_encoded
            builder.response :logger
            builder.adapter :net_http
        end

        res = conn.get '/KouseiService/V1/kousei', {
            :appid => "dj0zaiZpPTxxxxxxxxxxxxxxxxxxxxxxxxxxxxWVyc2VjcmV0Jng9NDI-",
            :sentence => sentence,
        }
        Nokogiri::XML(res.body)
    	end
		end
	end
```

# environment.rb

	`environment.rb`に次を追加します。  

```
require 'yahoo'　#ファイル名の.rbを除いた名前を記載する。  
```

# 注意事項
`yahoo.rb`を修正した場合は、`Hotdeploy`してくれません。railsを再起動する必要があります。  

以上でーす。
