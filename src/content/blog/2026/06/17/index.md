---
title: "2026-06-17 技術ニュースまとめ"
description: "OpenAIの財務赤字リーク、GLM-5.2がオープンウェイトモデル首位獲得、DeepSeekブラックリスト保留、TescoのVMware脱却、RFC 10008新HTTPメソッド策定など、本日の主要技術ニュースを厳選してお届けします。"
pubDate: 2026-06-17
tags: ["AI", "OpenAI", "LLM", "インフラ", "HTTP", "Cloudflare", "セキュリティ"]
author: "grasshopper"
---

本日の技術ニュースは、AIビジネスの財務実態をめぐるリーク情報が大きな話題を呼んでいる。OpenAIが年間数十億ドルの赤字を抱えているとする内部文書が流出し、業界内外に衝撃を与えた。一方、中国発のオープンウェイトモデルGLM-5.2が主要ベンチマークでトップに立ち、米国のDeepSeekブラックリスト化の動向とも絡んで地政学的な観点からも注目が集まっている。インフラ領域ではBroadcomへの反発からTescoが大規模なVMware脱却を表明し、HTTPプロトコルの新標準としてRFC 10008のQUERYメソッドが策定された。

## OpenAIの財務赤字、内部文書がリーク

OpenAIが年間数十億ドル規模の赤字を計上していることを示す財務資料が流出した。ChatGPTの急速な普及と大規模インフラへの投資が収益を大きく上回っており、将来の収益化に向けた持続可能性への疑問が改めて浮上している。GPUクラスタの維持費、人件費、APIコストの構造的な重さが数字に表れており、AI企業の「投資先行」モデルがいつ黒字転換するかは業界全体の焦点となっている。

詳細は [Leaked financial docs show OpenAI is losing billions of dollars a year](https://arstechnica.com/ai/2026/06/leaked-financial-docs-show-openai-is-losing-billions-of-dollars-a-year/) を参照。

## GLM-5.2、オープンウェイトモデルのベンチマーク首位に

Zhipu AIが開発するGLM-5.2が、Artificial Analysisの知性指標においてオープンウェイトモデルの首位を獲得した。コーディング・推論・多言語対応などの評価軸で既存のオープンモデルを上回っており、クローズドAPIに頼らなくてもトップクラスの性能が得られる時代が近づいている。オンプレミス・プライバシー重視の企業ユーザーにとって選択肢が広がる重要なマイルストーンだ。

詳細は [GLM-5.2 is the new leading open weights model on Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index) を参照。

## 米国、DeepSeekのブラックリスト化を保留

米国政府はDeepSeekを安全保障上のリスクリストに追加することを一時保留した。すでに100社以上の中国企業が審査対象になっているなか、DeepSeekへの対応は業界・政府間で意見が分かれている模様だ。DeepSeekのオープンソースモデルは世界中の開発者がすでに活用しており、ブラックリスト化が実施された場合の影響範囲は極めて広くなる可能性がある。

詳細は [US holds off blacklisting DeepSeek, more than 100 firms deemed security risks](https://www.reuters.com/world/china/us-holds-off-blacklisting-chinas-deepseek-more-than-100-firms-deemed-security-2026-06-17/) を参照。

## TescoがVMwareから4万ワークロードを移行へ

英国の大手スーパーマーケットTescoが、Broadcomによる買収後のVMwareライセンス改定を「不当行為」と批判し、4万台分のサーバーワークロードを段階的に移行すると発表した。Broadcom傘下となったVMwareは多くの企業に対してコスト増を強いており、Tescoの動きはエンタープライズ仮想化市場の再編を象徴するケースとして注目される。代替としてはKubernetes基盤や他の仮想化ソリューションへの移行が進む見込みだ。

詳細は [Tesco moving 40k server workloads off VMware amid Broadcom's abusive conduct](https://arstechnica.com/information-technology/2026/06/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct/) を参照。

## RFC 10008、新しい HTTP QUERY メソッドを標準化

RFC 10008として新しいHTTPメソッド「QUERY」が正式に策定された。GETとPOSTの中間的な用途——リクエストボディを持ちながらべき等なデータ取得——を明確に定義するもので、GraphQLやElasticsearchのような検索APIが抱えていた「GETにボディを持たせる」問題を解消する。標準化されることでキャッシュやミドルウェアとの互換性も向上する見込みだ。

詳細は [RFC 10008: The new HTTP Query Method](https://www.rfc-editor.org/info/rfc10008/) を参照。

## FirecrackerでEC2上のブラウザを1秒以下で起動

browser-useチームが、FirecrackerマイクロVMをEC2上で運用し、ブラウザインスタンスを1秒未満で起動するインフラの詳細を公開した。軽量VMとスナップショット復元を組み合わせることで従来比で大幅な起動高速化を実現しており、AIエージェントがWebブラウジングを行うワークロードの実用性を高める重要な技術だ。コールドスタート問題の解決策として注目される。

詳細は [How we run Firecracker VMs inside EC2 and start browsers in less than 1s](https://browser-use.com/posts/firecracker-browser-infra) を参照。

## GitHub Copilot がトークン効率とモデルルーティングを改善

GitHubがCopilotのプロンプトキャッシングと遅延ツール読み込みを改善し、エージェントセッションでのトークン消費を削減したと発表した。長時間のコーディングセッションでも開発者のクレジットが長持ちするよう最適化されており、複雑なマルチステップタスクへの対応力が向上している。モデルルーティングの改良も組み合わせることで、タスクの複雑さに応じたコスト最適化が可能になる。

詳細は [Getting more from each token: How Copilot improves context handling and model routing](https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/) を参照。

## AIエージェントのインフラはCloudflareが有力な選択肢に

Honoの作者であるyusukebeが、AIエージェント構築においてCloudflareのプラットフォームが優れた選択肢である理由を詳述した記事をZennに投稿した。Durable Objects・Queues・Workers AI・R2などCloudflareのプリミティブを組み合わせることで、低レイテンシかつスケーラブルなエージェントインフラを構築できることを実例を交えて解説している。

詳細は [AIエージェントはCloudflareに賭けろ](https://zenn.dev/yusukebe/articles/ccb1f953e48ee1) を参照。

## `cp` コマンドはデータをディスクにコピーしないことがある

Linuxカーネルのファイルシステム機能「server-side copy（コピーオフロード）」により、`cp` コマンドが実際にはデータをユーザー空間経由でコピーせず、カーネル内部で参照を複製するだけになるケースがあることを解説した記事がZennでトレンド入りした。NFS・Btrfs・XFS等の環境での挙動の違いを理解しておかないと、バックアップやデータ移行で意図しない結果を招く可能性がある実用的なトピックだ。

詳細は [`cp`はディスク上ではデータをコピーしないことがある](https://zenn.dev/satoru_takeuchi/articles/4bab372c6dae86) を参照。

## GitHubシークレットスキャニングの誤検知を75%削減

GitHubがシークレットスキャニングにコンテキスト認識の推論を組み込み、誤検知率を75.76%削減したと報告した。パターンマッチングだけでなく、シークレットが実際に使用されているかどうかのコンテキストを評価することで精度を大幅に向上させている。誤検知の多さがセキュリティアラートの無視につながる「アラート疲労」への対処として、実用的な改善となっている。

詳細は [Making secret scanning more trustworthy: Reducing false positives at scale](https://github.blog/security/making-secret-scanning-more-trustworthy-reducing-false-positives-at-scale/) を参照。
