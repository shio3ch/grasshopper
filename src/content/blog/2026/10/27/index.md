---
title: "OpenAIの理論計算機科学成果とCloudflare Workers AIのKVキャッシュ露出ほか技術ニュース"
description: "2026年10月27日の技術ニュース。OpenAIによる数学・計算機科学の新発見、Cloudflare Workers AIのKVキャッシュ露出対応、Pylanceの Type Server Protocol、Node.jsのBrotli脆弱性解説などをまとめた。"
pubDate: 2026-10-27
tags: ["AI", "セキュリティ", "Cloudflare", "Node.js", "GitHub"]
author: "grasshopper"
---

本日のHacker Newsでは、OpenAIが数学・計算機科学・物理学における三つの新発見を発表し、指数時間仮説(ETH)に関するプレプリントが話題になっている。一方、CloudflareはWorkers AI上のモデルでリクエスト間のKVキャッシュが露出した件の対応を公開した。開発ツール分野ではPylanceのType Server Protocolが注目を集めている。Zennでは証明書の秘密鍵探索やNode.jsのBrotli脆弱性の解説が上位に入り、GitHub Blogはエージェント規模のGit基盤などを取り上げている。なお、以下は各記事のタイトルと取得できた情報に基づく紹介であり、詳細は各リンク先を参照してほしい。

## OpenAI、数学・計算機科学・物理学の三つの新発見を発表

OpenAIが学術コミュニティとの協働による科学的理解の構築について、三つの新発見を発表した。AIが研究成果の創出に関与する流れが、数学や計算機科学の領域でも具体的な成果として語られ始めた点が重要である。成果の検証方法や再現性が今後の論点になるだろう。

詳細は [Announcing three new discoveries in mathematics, computer science, and physics](https://openai.com/index/building-scientific-understanding-with-academic-communities/) を参照。

## 「指数時間仮説は偽である」と題するプレプリント

OpenAIのリポジトリで「The Exponential Time Hypothesis is False」と題するPDFが公開され、HNで注目を集めた。ETHは3-SATなどが準指数時間では解けないとする仮説で、多くの条件付き下界の前提になっているため、仮に成立すれば影響は大きい。ただし査読を経た結果ではなく、専門家による検証を待つ必要がある。

詳細は [The Exponential Time Hypothesis Is False [pdf]](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf) を参照。

## Cloudflare、Workers AIのGLM-5.3でKVキャッシュ露出(155件)

CloudflareはWorkers AI上のGLM-5.3モデルで、リクエスト間にKVキャッシュが露出した問題とその是正について公表した。タイトルによれば対象は155件のレスポンスである。推論基盤でキャッシュを共有・再利用する設計では、テナント間の分離が重要になることを示す事例といえる。

詳細は [Cross-request KV cache exposure in the GLM-5.3 Workers AI model (155 responses)](https://blog.cloudflare.com/kv-cache-exposure-remediation/) を参照。

## Pylance の Type Server Protocol

Microsoftのpylance-releaseリポジトリにType Server Protocolの文書が公開された。Python型チェッカーの機能を外部ツールから利用するためのプロトコルと考えられ、言語サーバーと型情報の提供を分離する方向性が窺える。エディタやリンターが型情報を共有できれば、ツール間の重複が減る可能性がある。

詳細は [Type Server Protocol](https://github.com/microsoft/pylance-release/blob/main/docs/tsp/type-server-protocol.md) を参照。

## Windows 11で今も動く最古のGUIアプリ

Windows 11上で動作する最も古いGUIアプリケーションを探した記事。Windowsの長年にわたる後方互換性を実例で確かめる内容で、互換レイヤーの維持コストを考えるうえでも興味深い。

詳細は [Oldest GUI application that still runs on Windows 11](https://blog.enlyth.com/posts/oldest-windows-gui-app-win-11/) を参照。

## Sebastian Raschka氏の推論モデル構築ビデオコース

Sebastian Raschka氏が、推論モデルをゼロから構築する動画コースを紹介している。推論モデルの学習・評価の仕組みを実装レベルで理解したい技術者にとって、学習リソースとなる。

詳細は [Sebastian Raschka's from-scratch video course on building reasoning models](https://magazine.sebastianraschka.com/p/building-reasoning-models) を参照。

## Zenn: Node.jsのBrotli脆弱性 CVE-2026-111497 を読む

ZennではNode.jsのBrotliに関する脆弱性CVE-2026-111497を読み解く記事がトレンド入りしている。圧縮ライブラリの脆弱性は、外部入力を展開するサーバーに影響しうるため、利用中のNode.jsのバージョンと修正状況の確認が望ましい。

詳細は [Node.js の Brotli 脆弱性 CVE-2026-111497 を読む](https://zenn.dev/chot/articles/79e6c94e27782d) を参照。

## Zenn: eMudhraの中間CA証明書の秘密鍵を求めてみる

herumi氏による、eMudhraの中間CA証明書の秘密鍵を求めることを試みた記事。公開鍵暗号の実装や鍵生成の弱点をめぐる、セキュリティ寄りの技術解説として注目されている。

詳細は [eMudhraの中間CA証明書の秘密鍵を求めてみる](https://zenn.dev/herumi/articles/search_bad_emudhra_key) を参照。

## GitHub Blog: エージェント規模のGit基盤とアンビエントインテリジェンス

GitHub Blogでは「The bridge to agent-scale Git infrastructure」が公開され、AIエージェントが大量にGit操作を行う時代の基盤設計が扱われている。また「The next developer interface is ambient intelligence」では、次の開発者インターフェースの方向性が論じられている。ほかにCopilotのセッションをVS Codeで継続する方法も紹介された。

詳細は [The bridge to agent-scale Git infrastructure](https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/)、[The next developer interface is ambient intelligence](https://github.blog/news-insights/company-news/the-next-developer-interface-is-ambient-intelligence/)、[How to continue a GitHub Copilot app session in VS Code](https://github.blog/ai-and-ml/github-copilot/how-to-continue-a-github-copilot-app-session-in-vs-code/) を参照。
