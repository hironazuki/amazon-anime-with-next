# 目次

- 概要
- 利用技術と内容
- この課題を通して学んだこと
- 工夫した点
- 苦労した点
- 参考

# 概要

- バックエンド: 定期実行によるtwitter BOTの作成
- フロントエンド：Rails: graphql-rubyによるgraphqlAPIからデータを取得し、Next.js 9.4のIncremental Static Regeneration (beta)を使用したwebページ

## Twitter BOT
https://twitter.com/new_primeAnime

## Web ページ
https://amazon-anime-with-next.vercel.app/

# 利用技術と内容

## フロントエンド

- 利用技術
	- Next.js 9.4
	- typeScript 3.8.3

- 内容
  - Next.js 9.4からの機能 Incremental Static Regeneration (beta)を使ったwebサイト生成
	- Apollo Clientを使ったGraphqlサーバーの利用

## バックエンド

- 利用技術
  - Rails 
  - Graphql

- 内容
	- gem: graphql-rubyによるGraphqlサーバーの作成
	- rakeタスク、heroku scheduleを使ったタスクの定期実行

# この課題を通して学んだこと

- Next.jsの基本的な使用方法
- SSR, SSGの理解

# 苦労した点, 改善点

- Next.jsの更新が早いため、古い情報と混同し苦労した。
- バックエンドが元はAPI用に作っていたものではないため、データ構造が甘くgraphqlでの取得方法が不格好になってしまった。

# 参考

- [Next.js 9.4 リリースノート全訳！ 段階的な静的再生成、新しい環境変数のサポートなど、見逃せない新機能が目白押し！ - Qiita](https://qiita.com/thesugar/items/95bc20aa98e31501bbfc#incremental-static-regeneration-beta/)
- [Incremental Static Regeneration で実現する次世代のサーバーアーキテクチャ](https://mizchi.dev/202005182044-awesome-next-issg)
- [What is Next.js Incremental Static (Re)Generation?](https://arunoda.me/blog/what-is-nextjs-issg)
