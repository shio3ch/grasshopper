---
title: "GPT-5.5 APIリリース、MicrosoftはCVSS 9.8の脆弱性を含む247件を修正——2026年4月30日 テックまとめ"
description: "OpenAIがGPT-5.5をAPIで一般提供開始、デジタル庁が政府AI「源内」をOSS公開、Microsoftが月例パッチで247件の脆弱性に対応など、2026年4月の主要テックニュースをまとめます。"
pubDate: 2026-05-01
tags: ["生成AI", "OpenAI", "セキュリティ", "脆弱性", "Microsoft", "Vite"]
author: "grasshopper"
---

## 2026年4月 テックニュースまとめ

4月は生成AI領域で複数の大型リリースが重なった激動の月となった。OpenAIはGPT-5.5をAPIで正式公開し、ライフサイエンス向けの専門モデルも投入。一方でMicrosoftの月例パッチでは過去2番目規模の247件の脆弱性が修正され、フロントエンドツールのViteにも深刻なファイル漏洩バグが見つかった。デジタル庁は政府AI「源内」をMITライセンスでOSS公開し、国内行政のAI基盤整備にも動きがあった。

---

## 生成AI

### 1. OpenAI、GPT-5.5 を API で正式リリース

OpenAI は2026年4月24日、最新フラッグシップモデル **GPT-5.5** および **GPT-5.5 Pro** をAPIで一般提供開始した。コーディング・データ分析・コンピュータ操作など複雑なエージェント作業で特に大きな性能向上を示す。API価格は `gpt-5.5` が入力 $5/1M トークン・出力 $30/1M トークン（コンテキスト長 1M）。ChatGPT では Plus/Pro/Business/Enterprise ユーザーへ順次展開中。

[Introducing GPT-5.5 | OpenAI](https://openai.com/index/introducing-gpt-5-5/)

---

### 2. OpenAI、ライフサイエンス向け推論モデル「GPT-Rosalind」を発表

生物学・創薬・トランスレーショナル医学の研究支援に特化したフロンティア推論モデル **GPT-Rosalind** を研究プレビュー公開。ChatGPT・Codex・API（資格審査あり）で利用できるほか、Codex 向けのライフサイエンス Research Plugin は無償提供される。

[Introducing GPT-Rosalind for life sciences research | OpenAI](https://openai.com/index/introducing-gpt-rosalind/)

---

### 3. OpenAI × AWS、エンタープライズ向けパートナーシップを拡大

OpenAI と AWS がエンタープライズ向けの戦略的パートナーシップを拡大。AWS 環境に OpenAI モデル・Codex・Amazon Bedrock Managed Agents（OpenAI エンジン）が統合され、企業が既存 AWS インフラ上で OpenAI の機能をシームレスに利用できるようになる。

[OpenAI models, Codex, and Managed Agents come to AWS | OpenAI](https://openai.com/index/openai-on-aws/)

---

### 4. Codex、週次利用開発者数が400万人超に

OpenAI の AI コーディングエージェント **Codex** の週次アクティブ開発者数が、4月初旬の300万人超から月末には **400万人超** へと急増。エンタープライズへのスケールアップも進んでいる。

[Scaling Codex to enterprises worldwide | OpenAI](https://openai.com/index/scaling-codex-to-enterprises-worldwide/)

---

### 5. デジタル庁、政府AI「源内」をOSSとして無償公開

デジタル庁は2026年4月24日、内製の政府向け生成AI利用環境 **「源内（GENAI）」** のウェブインターフェースとAIアプリ開発テンプレートを **MITライセンス** でGitHub公開した。AWS上の行政実務用RAGテンプレートやAzure/Google Cloud向け実装を含み、地方自治体の重複開発抑制とベンダーロックイン解消を狙う。2026年度中に全府省庁 **約18万人** への生成AI環境提供を目指す。

[ガバメントAI「源内」をオープンソースとして公開します｜デジタル庁](https://digital-gov.note.jp/n/n84aeba282e60)

---

## セキュリティ・脆弱性

### 6. Microsoft 4月月例パッチ、CVSS 9.8 含む247件の脆弱性を修正

2026年4月15日公開の月例セキュリティ更新プログラムは、CVEベースで **163件**、サードパーティ含む総計 **247件** の脆弱性に対応した（過去2番目の規模）。特に注意が必要なもの：

- **CVE-2026-33824**（Windows IKE サーバー拡張機能のリモートコード実行）— CVSS **9.8**、認証・ユーザー操作不要で悪用可能
- **CVE-2026-32201**（Microsoft SharePoint Server のなりすまし脆弱性）— 実際の悪用が確認済み、至急パッチ適用が必要

[2026年4月のセキュリティ更新プログラム (月例) | Microsoft MSRC](https://www.microsoft.com/en-us/msrc/blog/2026/04/202604-security-update)

[2026年4月 セキュリティアップデート解説 | Trend Micro](https://www.trendmicro.com/ja_jp/research/26/d/the-april-2026-security-update-review.html)

---

### 7. Vite の `server.fs.deny` バイパス脆弱性（CVE-2026-39364、CVSS 8.2）

フロントエンド向け開発ツール **Vite** に高危険度の脆弱性が報告された。`server.fs.deny` で保護されているはずの `.env` や `*.crt` などのファイルが、`?raw` や `?import&raw` などのクエリパラメータを付加することで HTTP 200 で取得できてしまう問題（CWE-180）。

- **影響バージョン**: 7.1.0 〜 7.3.1 および 8.0.4 以前
- **修正バージョン**: **7.3.2** および **8.0.5**

開発環境でも秘密鍵や環境変数が漏洩するリスクがあるため、早急なバージョンアップを推奨。

[CVE-2026-39364 | GitHub Advisory Database](https://github.com/advisories/GHSA-v2wj-q39q-566r)

---

### 8. CISA、悪用確認済み脆弱性8件をカタログ登録——4件は緊急対応期限

CISA（米サイバーセキュリティインフラセキュリティ庁）は2026年4月20日、実際に悪用が確認された脆弱性8件を「Known Exploited Vulnerabilities（KEV）カタログ」に追加。このうち4件の対応期限は4月23日と非常に差し迫っており、政府機関だけでなく民間企業でも即時対応が求められる。

[米当局、脆弱性8件の悪用確認 | Security NEXT](https://www.security-next.com/183658)
