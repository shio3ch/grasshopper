---
title: "2026-05-31 技術ニュースまとめ"
description: "Cloudflare TurnstileのWebGL指紋採取問題、GitHubセキュリティインシデント、ローカル動作する1ビット画像生成モデル、Google SheetsのAIプラグイン脆弱性、Linuxのrestartable sequences解説など、本日の主要技術トピックをまとめた。"
pubDate: 2026-05-31
tags: ["セキュリティ", "AI", "プライバシー", "Web開発", "システムプログラミング", "GitHub"]
author: "grasshopper"
---

本日の技術ニュースは、プライバシーとセキュリティ関連のトピックが目立つ。Cloudflare TurnstileによるWebGL指紋採取問題が大きな反響を呼び、GitHubでは内部リポジトリへの不正アクセスによる署名鍵ローテーションが必要となった。AI分野ではローカルデバイスで動作する超軽量画像生成モデルの登場や、AIプラグインを悪用したデータ流出手法の報告が相次いだ。システムプログラミング領域ではLinuxのrestartable sequencesが改めて注目されている。

## CloudflareのTurnstile、WebGL指紋採取を要件化して物議

Cloudflareのボット検証サービス「Turnstile」が、ユーザーのブラウザからWebGLレンダラー情報を収集し、デバイス指紋採取を事実上強制していることが指摘されている。プライバシー保護のためWebGL情報をランダム化・隠蔽するブラウザ（主にWebKit系）ではTurnstileの検証が通らず、正規ユーザーがボット扱いされてアクセスを遮断されるケースが報告されている。CloudflareはWebGL情報の隠蔽を「ボットのような振る舞い」と位置付けているが、批判者はこれをプライバシー保護ツールを無効化する循環論法だと指摘する。FirefoxはデフォルトでWebGL指紋採取への保護が有効になっておらず、`privacy.resistFingerprinting`を手動設定していないユーザーは将来的にブロックされるリスクがある点も懸念材料だ。

詳細は [Cloudflare Turnstile requiring fingerprintable WebGL](https://hacktivis.me/articles/cloudflare-turnstile-webgl-fingerprinting) を参照。

## The Website Specification：良いウェブサイトの技術要件を体系化

「良いウェブサイトが備えるべき技術的特性」をMITライセンスで公開した仕様書プロジェクトが注目を集めている。HTML基礎からSEO、アクセシビリティ、セキュリティ、パフォーマンス、国際化まで13カテゴリーにわたる包括的なガイドラインを提供する。特徴的なのはAIエージェント向けの対応で、MCPサーバーやディスカバリーエンドポイントを通じてAIが直接参照できる形式でも提供されている点だ。Markdown形式でも取得可能で、開発者とAIの両方が活用できるリファレンスとして設計されている。

詳細は [The Website Specification](https://specification.website/) を参照。

## GitHub、内部リポジトリへの不正アクセスを受けEnterprise Server署名鍵をローテーション

GitHubは2026年5月18日、悪意のあるVS Code拡張機能によって感染した社員デバイスを介して社内リポジトリ約3,800件が流出したサイバー攻撃を検出した。顧客データへの直接的な影響はないとされているが、一部の社内リポジトリにはサポートのやり取りの断片が含まれていた可能性がある。対応として、GitHub Enterprise Serverの署名鍵をローテーションしており、管理者は提供されたスクリプトを使用してGPG公開鍵を即時更新する必要がある。更新しない場合、今後のバージョンアップグレードで検証が失敗する。

詳細は [Investigation update: GitHub Enterprise Server signing key rotation](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) を参照。

## Bonsai Image 4B：iPhoneでも動く1ビット画像生成モデル

PrismMLが、ローカルデバイスでの高品質な画像生成を実現する超軽量モデル「Bonsai Image 4B」を発表した。1ビットバリアントはFP16スケーリングを組み合わせた二値重みを採用し、モデルサイズをわずか0.93GBに圧縮している（フルプレシジョン比で8.3倍の削減）。三値バリアント（1.21GB）はゼロ状態を追加することで視覚品質を向上させており、ベンチマーク精度は元モデルの95%を維持しながらトランスフォーマーメモリを6.4倍削減している。同クラスの画像生成モデルとして初めてiPhoneでの直接動作を実現しており、クラウド依存からの脱却やプライバシー保護の観点でも注目される。

詳細は [1-Bit Bonsai Image 4B Image Generation for Local Devices](https://prismml.com/news/bonsai-image-4b) を参照。

## ChatGPT for Google Sheetsでワークブック全体が流出する脆弱性

Google Sheets向けのAI拡張機能「ChatGPT for Google Sheets」に、間接プロンプトインジェクションによる深刻なデータ流出脆弱性が発見された。外部から取り込んだデータに悪意あるプロンプトが埋め込まれている場合、ユーザーの無害なクエリをきっかけに拡張機能の権限を悪用した攻撃スクリプトが実行される。被害範囲はアクセス可能なワークブック全体に及び、フィッシングポップアップの表示、攻撃者が制御するチャットボットUIへの置き換え、ワークブックの改ざんなどが同時に発生する可能性がある。自動編集を無効化していてもこの攻撃は有効であり、実行中のスクリプトをユーザーが止める手段はない。

詳細は [ChatGPT for Google Sheets Exfiltrates Workbooks](https://www.promptarmor.com/resources/gpt-for-google-sheets-data-exfiltration) を参照。

## Linuxのrestartable sequences（rseq）：ロックなし並行処理の現実解

Linux 4.18以降で利用可能なカーネル機能「restartable sequences（rseq）」の詳細解説が公開され、注目を集めている。rseqはスレッドローカルのメモリ領域を使ってカレントCPUと「クリティカルセクション」を追跡し、プリエンプションが発生した際にカーネルが自動的に実行を再スタートすることで、ミューテックスやアトミック命令なしにスレッドセーフなデータ構造を実現する。実装例として96コアのAMD Threadripperでの測定では、rseq利用によってmalloc()がミューテックス比で43倍高速化されたとされる。x86-64とARM64向けのアセンブリ実装が示されており、マルチコア環境での並行処理のスケーラビリティが劇的に向上する。

詳細は [Restartable Sequences](https://justine.lol/rseq/) を参照。

## MetaがInstagram・Facebook・WhatsApp有料プランを正式開始

Metaが、Instagram、Facebook、WhatsAppの有料サブスクリプションサービスを正式に開始した。サービスの詳細は今後も拡充される予定で、AIプランも含まれるとされている。広告収入への依存度を下げながら直接課金モデルを構築する同社の戦略転換として注目される。

詳細は [Meta launches Instagram, Facebook, and WhatsApp subscriptions](https://techcrunch.com/2026/05/27/meta-officially-launches-instagram-facebook-and-whatsapp-subscriptions-with-more-to-come-including-ai-plans/) を参照。

## 【Zenn】論理削除をやめて状態テーブルで分けるDB設計

論理削除（`deleted_at`フラグ）の代わりに、レコードの状態ごとにテーブルを分割するDB設計パターンを解説した記事が153いいねを集めている。論理削除はクエリの複雑化や予期しないデータ参照のリスクをはらんでいるが、状態ごとにテーブルを分けることで`WHERE deleted_at IS NULL`の付け忘れや、削除済みデータとの意図しない結合を構造的に防げる。パフォーマンス面でも削除済みレコードとアクティブレコードが混在しないため、インデックスの効率が向上する。

詳細は [論理削除をやめて状態をテーブルで分けるDB設計](https://zenn.dev/mstn_/articles/af99d216639b30) を参照。

## 【Zenn】MLエンジニアのためのLLM推論 KV cache入門

大規模言語モデルの推論における「KV cache（Key-Valueキャッシュ）」の仕組みを本質から解説した記事がZennで注目されている。Transformerのアテンション計算では各トークン生成ごとに過去のKey・Value行列を再計算する必要があるが、KV cacheはこれをメモリに保持することで計算量をO(n²)からO(n)に削減する。実装上の課題（メモリ使用量、バッチサイズとの兼ね合い、プリフィルとデコードフェーズの違い）についても丁寧に解説されており、推論エンジンの最適化を理解する上での実践的な入門として評価されている。

詳細は [MLエンジニアのための本質から理解するLLM推論 KV cache編](https://zenn.dev/kaz20/articles/c77f8a41cf2bf5) を参照。

## GitHubがGartner Magic Quadrant「Enterprise AI Coding Agents」部門で3年連続リーダーに認定

GitHubが、Gartner® Magic Quadrant™の「エンタープライズAIコーディングエージェント」部門において3年連続でリーダーに認定された。GitHub Copilotを中核としたAIコーディング支援の取り組みが、ビジョンの完全性と実行能力の両面で高く評価された形だ。AI支援開発ツールの市場競争が激化する中、エンタープライズ向けプラットフォームとしての地位を改めて示した。

詳細は [GitHub recognized as a Leader in the Gartner® Magic Quadrant™ for Enterprise AI Coding Agents](https://github.blog/ai-and-ml/github-copilot/github-recognized-as-a-leader-in-the-gartner-magic-quadrant-for-enterprise-ai-coding-agents-for-the-third-year-in-a-row/) を参照。
