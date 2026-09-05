---
title: "2026年9月5日 技術ニュースまとめ：AnthropicがLean 4でフェルマーの最終定理を形式化、Chromiumに悪用中のRCEも"
description: "AnthropicがAIとLean 4でフェルマーの最終定理の形式証明を完成。全バージョンのChromiumで悪用中のサンドボックス脱出RCE、Mullvadの公開DNS終了、GPT-6 Astra登場などを紹介。"
pubDate: 2026-09-05
tags: ["AI", "セキュリティ", "形式検証", "DNS", "LLM"]
author: "grasshopper"
---

今日は Anthropic がAIを用いてフェルマーの最終定理を Lean 4 で形式証明したという成果が Hacker News で大きな注目を集めた。セキュリティ面では、全バージョンの Chromium に影響するサンドボックス脱出 RCE が実環境で悪用されていることが判明したほか、公開されたばかりの Ruby on Rails の脆弱性がパッチ公開から数時間で悪用される事例も報告されている。AI 分野では OpenRouter に「GPT-6 Astra」が登場し、GitHub Blog は複数モデルを組み合わせるオーケストレーション技術「Project HydraFusion」を発表した。プライバシー分野では Mullvad が公開の暗号化 DNS サービスを終了し Quad9 への移行を推奨するなど、インフラを支える判断も相次いだ。Zenn では Claude Code の活用ノウハウが引き続き人気を集めている。以下、各トピックを詳しく見ていく。

## Anthropic、AIとLean 4でフェルマーの最終定理の形式証明を完成

Anthropic が、AI を活用して数学の難問「フェルマーの最終定理」の証明を定理証明支援系 Lean 4 上で形式化したと発表し、Hacker News で今日最も注目を集めるトピックとなった。証明そのものは1990年代にワイルズによって与えられているが、それを機械的に検証可能な形式証明として完成させる作業は膨大な労力を要する。AI モデルが数学的推論を補助しながら形式検証を進める事例として、AI が高度な数学研究にどこまで貢献できるかを示す象徴的な取り組みだ。証明コード自体は GitHub 上でも公開されている。

詳細は [Formalizing Fermat's Last Theorem](https://www.anthropic.com/research/formalizing-fermats-last-theorem) を参照。

## 全バージョンのChromiumに影響するサンドボックス脱出RCEが実環境で悪用中

すべてのバージョンの Chromium に存在するサンドボックス脱出可能なリモートコード実行(RCE)の脆弱性が、実環境で積極的に悪用されていることが明らかになった。CVE-2026-85046 として登録されており、ブラウザのサンドボックスという多層防御の要となる仕組みが突破されている点が深刻だ。Chromium ベースのブラウザを利用する開発者・組織は、パッチ適用状況を早急に確認する必要がある。

詳細は [Actively exploited sandbox RCE in all Chromium versions](https://nvd.nist.gov/vuln/detail/cve-2026-85046) を参照。

## Ruby on Railsの脆弱性、パッチ公開からわずか数時間で悪用

政府系の Ruby on Rails サイトが、CVE 公開からわずか数時間で実際に攻撃を受けていたことが報告された。脆弱性情報が公開されると同時に攻撃者側が既存の公開情報をスキャンし、パッチ未適用のシステムを狙う動きが加速している実態を裏付ける事例であり、パッチ適用までのリードタイムをいかに短縮するかが運用上の重要課題であることを改めて示している。

詳細は [Government Rails Site Hit Hours After CVE Patch](https://rietta.com/blog/ruby-on-rails-cve-exploited-hours-after-patch/) を参照。

## Mullvad、公開の暗号化DNSサービスを終了しQuad9への移行を支援

VPN プロバイダの Mullvad が、自社の公開暗号化 DNS(DoH/DNS-over-TLS)サービスを終了し、代わりに非営利のプライバシー重視 DNS サービス Quad9 のスポンサーとなる方針を発表した。単独でインフラを維持するより、実績のある非営利サービスを支援する形にリソースを集約する判断であり、プライバシー重視ツールの持続可能な運営のあり方として参考になる動きだ。

詳細は [Shutting down our public encrypted DNS servers and sponsoring Quad9 instead](https://mullvad.net/en/blog/shutting-down-our-public-encrypted-dns-servers-and-sponsoring-quad9-instead) を参照。

## OpenRouterに次世代モデル「GPT-6 Astra」が登場

OpenRouter に OpenAI の新モデル「GPT-6 Astra」が追加されたことが Hacker News で話題となった。マルチプロバイダのモデルルーティングサービスに主要モデルが並ぶことで、開発者はコードを変更せずに複数の最新モデルを比較・切り替えできるようになる。フロンティアモデルの更新サイクルが引き続き速いペースで進んでいることを示す一例だ。

詳細は [GPT-6 Astra on OpenRouter](https://openrouter.ai/openai/gpt-6-astra) を参照。

## GitHub、複数モデルを組み合わせる「Project HydraFusion」を発表

GitHub Blog が、コーディングタスクに応じて複数プロバイダのモデルを実行時に選択するオーケストレーション技術「Project HydraFusion」の研究プレビューを公開した。単一モデルでの解決、品質ゲート付きのカスケード実行、独立した批評・修正サイクルという3つの実行パターンを備え、TerminalBench 2.1 のベンチマークでは既存モデル比で品質が4.9ポイント向上しつつコストを67%削減したという。単一の巨大モデルに頼るのではなく、タスクに応じてモデルを使い分ける設計思想が今後のAIコーディングツールの方向性を示している。

詳細は [Project HydraFusion: Frontier quality via multi-model orchestration](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) を参照。

## AIモデルの総合力を測る「Artificial Analysis Intelligence Index v4.2」公開

第三者ベンチマーク機関 Artificial Analysis が、AIモデルの総合的な性能を比較する指標「Artificial Analysis Intelligence Index」の v4.2 を公開した。特定ベンダーに依存しない独立系のベンチマークとして、モデル選定の際の参考指標の一つとなっている。フロンティアモデルの発表が相次ぐ中、横断的な比較軸を継続的に更新し提供する取り組みは、実務でモデルを選定するエンジニアにとって有用だ。

詳細は [Artificial Analysis Intelligence Index v4.2](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-2) を参照。

## AIは基板設計をこなせるようになったか、実践的ベンチマークで検証

電子工学系ベンチマークサイト eebench.org が、現行の AI モデルがプリント基板(PCB)設計をどこまで実用的にこなせるかを検証した記事を公開した。ソフトウェアのコード生成では実用域に達しつつある生成AIも、電気的特性や部品配置制約を伴うハードウェア設計では依然として課題が多いことが具体的な検証を通じて示されており、AI の適用領域を見極める上で参考になる内容だ。

詳細は [Can AI design circuit boards yet?](https://eebench.org/blog/can-ai-design-circuit-boards-yet/) を参照。

## 静的サイトホスティング「Statichost.eu」、欧州発の選択肢として登場

欧州発の静的サイトホスティングサービス「Statichost.eu」が Hacker News で紹介された。米国の大手クラウド事業者に依存しないインフラを求める開発者向けに、EU域内でのデータ保管を前提としたシンプルな静的サイトホスティングを提供する。データ主権やGDPR対応を意識したホスティング選択肢が増えている流れの一つといえる。

詳細は [Statichost.eu – European static site hosting](https://www.statichost.eu/) を参照。

## Zennで人気、Claude Codeの個人設定とAIプロンプト設計の話題

Zenn では引き続き Claude Code まわりの話題が人気を集めている。個人の Claude Code 設定をまとめた記事や、Google が提唱する「SKILL.state」という概念をプロンプトに型を持ち込む試みとして解説する記事が上位にランクインした。AI コーディングエージェントを日々の開発にどう組み込み、プロンプト設計を体系立てるかという実践的な関心が、日本の開発者コミュニティでも高まっていることがうかがえる。

詳細は [202608個人的claude code設定](https://zenn.dev/kawarimidoll/articles/d3f1a7542de71a) および [Google提唱の「SKILL.state」について。プロンプトに型の概念を導入](https://zenn.dev/knowledgesense/articles/ad123283bdea26) を参照。
