+++
title = "octopressで特定の記事をgenerateから除外する"
date = "2013-07-28"
tags = ["octopress"]
banner = "https://cdn.tutsplus.com/webdesign/authors/ian-yates/octopress-header.png"
+++

複数記事を書いていて、１つは途中だけど、もう１つは完成して公開したい時ってありますよね。

そんなときは、途中の記事のヘッダ部分に以下を追加してください。

<!--more-->

```
published: false
```

`rake preview`では見れますが`rake gen_deploy`でブログに公開されません。

# 使用例

```markdown
---
title = octopressで下書きをする
date = 2013-07-28
tags = octopress
published: false
---
```

以上です。
