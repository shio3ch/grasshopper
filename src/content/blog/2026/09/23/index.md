---
title: "2026年9月23日 技術ニュースまとめ：OpenAIが「GPT-6 Sol/Luna」、AnthropicがClaude Opus 5.5を発表、WordPressに未認証RCE脆弱性"
description: "OpenAIの新モデル群「GPT-6 Sol/Luna」とAnthropicの「Claude Opus 5.5」がAI業界の話題を席巻。WordPressの未認証RCE脆弱性、SAMLの設計問題、FBI職員データ流出主張など2026年9月23日のニュースをまとめました。"
pubDate: 2026-09-23
tags: ["AI", "セキュリティ", "開発ツール", "オープンソース", "Zenn"]
author: "grasshopper"
---

本日はAIモデル競争が再び激化し、OpenAIが新モデル群「GPT-6 Sol and Luna」を、AnthropicがClaude Opus 5.5をそれぞれ発表してHacker Newsを賑わせた。セキュリティ分野ではWordPressコアの未認証パス・トラバーサル脆弱性がRCEにつながる危険度の高い問題として公表されたほか、SAML実装の構造的な脆弱さを指摘する分析、FBI職員全員分のデータが流出したと主張するハッカー集団の話題も注目を集めた。開発ツール分野ではGitHubがCopilotランタイムのRustへの全面移植を報告し、AIエージェントによる大規模移行の実例として関心を呼んだ。日本語コミュニティのZennでは、AI活用のコスト管理やWebMCPの実務検証など、AIと開発ワークフローを統合する実践知見が多数共有された。

## OpenAI、新モデル群「GPT-6 Sol and Luna」を発表

OpenAIは新しいモデルファミリー「GPT-6 Sol and Luna」を発表した。Hacker Newsのトップストーリーとなり、既存のGPTシリーズに続く次世代モデルとしてコミュニティの注目を集めている。発表内容の詳細は公式ブログで説明されており、モデルの位置づけや性能特性について今後さらに情報が更新される見込みだ。

詳細は [GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/) を参照。

## Anthropic、「Claude Opus 5.5」を発表

Anthropicは最新モデル「Claude Opus 5.5」を発表した。あわせてArtificial Analysisによる第三者ベンチマーク分析も公開され、インテリジェンス・性能・価格の観点から既存モデルとの比較評価がHacker Newsで話題となった。両記事が同時にトップストーリー入りしたことからも、AIモデルの性能・コスト比較に対する開発者コミュニティの関心の高さがうかがえる。

詳細は [Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) および [Claude Opus 5.5 Intelligence, Performance and Price Analysis](https://artificialanalysis.ai/models/claude-opus-5-5) を参照。

## WordPressコアに未認証パス・トラバーサル→条件付きRCEの脆弱性

WordPress開発チームは、コア機能に存在する未認証のパス・トラバーサル脆弱性が、特定条件下でリモートコード実行（RCE）につながり得ると発表した。GitHub Security Advisoryとして公開され、影響範囲や緩和策の詳細が記載されている。世界のウェブサイトの相当割合を占めるWordPressのコア脆弱性であるため、管理者は速やかなパッチ適用状況の確認が求められる。

詳細は [WordPress: Unauthenticated path traversal leading to conditional RCE](https://github.com/WordPress/wordpress-develop/security/advisories/GHSA-7hp8-65ch-5whp) を参照。

## Trail of Bits、「SAMLは設計上のフラクタルな失敗作」と指摘

セキュリティ企業Trail of Bitsは、SSO・認証連携で広く使われるSAML仕様について、XML署名の複雑さやパーサー実装間の差異に起因する脆弱性が構造的に発生しやすいと指摘するブログ記事を公開した。過去に繰り返し発見されてきたSAML関連の署名検証バイパスなどの事例を挙げつつ、仕様そのものの複雑性が根本原因であると論じている。認証基盤にSAMLを採用しているシステムの開発者・運用者にとって、実装の再点検を促す内容となっている。

詳細は [SAML: A fractal of bad design](https://blog.trailofbits.com/2026/09/21/saml-a-fractal-of-bad-design/) を参照。

## ハッカー集団「FBI職員全員のデータを窃取した」と主張

404 Mediaの報道によると、あるハッカー集団がFBI職員全員分のデータを入手したと主張しているという。Hacker Newsで大きな注目を集めており、主張の真偽や流出したとされるデータの範囲について今後の続報が待たれる。政府機関の内部データを標的にしたとされる侵害事例として、セキュリティコミュニティの間で警戒が広がっている。

詳細は ['We hacked the FBI:' Hackers say they have data on all FBI employees](https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees/) を参照。

## GitHub、Copilotランタイムを約43万行のTypeScriptから80万行超のRustへ全面移植

GitHub Blogによると、同社はGitHub Copilotのエージェントランタイムを、約43万行のTypeScriptから80万行を超える本番用Rustコードへ書き換えたという。約14週間、128件のプルリクエストを通じて段階的に実施され、その多くはAIエージェントが人間の監督下で実装を担った。並行セッションの調整、プロンプトキャッシュのヒット率96.22%達成といった最適化手法に加え、JSON-RPCプロトコルによる後方互換性を維持しつつ6言語のSDKへの組み込みに対応した点が紹介されている。大規模なエージェント駆動開発の実例として参考になる内容だ。

詳細は [Migrating the GitHub Copilot runtime to Rust, using Copilot](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) を参照。

## Zenn、全社にOpenCode + LiteLLMを導入しAI活用のコストを抑制した事例が話題に

Zennのトレンド記事では、全社的にOpenCodeとLiteLLMを導入し、コストを抑えながらAI活用を推進した取り組みが紹介され注目を集めた。複数のLLMプロバイダーを統一的に扱えるLiteLLMをゲートウェイとして活用することで、モデル選定の柔軟性を保ちつつ利用コストを可視化・管理する手法が具体的に解説されている。社内でのAI活用を本格化させたい組織にとって実践的な事例となっている。

詳細は [全社に OpenCode + LiteLLM を導入してコストを抑えつつ AI 活用を進めている話](https://zenn.dev/jtcc/articles/7e74fef42580a1) を参照。

## Zenn、WebMCPの実務検証レポートが注目を集める

フロントエンド開発者によるWebMCP（ブラウザ向けModel Context Protocol）の検証記事がZennのトレンド上位に入った。実際に試した所感として、フロントエンド開発における必須技術になり得るとの見立てが示されており、AIエージェントとブラウザ上のアプリケーションを連携させる新しい標準として関心が高まっていることがうかがえる。

詳細は [WebMCPを試してみた感想。フロントエンドの必須技術になりそうな予感。](https://zenn.dev/chot/articles/268804cd6694ab) を参照。

## Zenn、C言語のコードをRustの中に書けるライブラリが話題に

Rustのコード中にC言語のコードを直接埋め込めるようにするライブラリを開発したという記事がZennのトレンドにランクインした。既存のC資産をRustプロジェクトへ段階的に統合する際の選択肢として、開発者コミュニティで関心を集めている。FFI境界を意識した相互運用の実装アプローチが紹介されている。

詳細は [C言語のコードをRustの中に書けるライブラリを作った](https://zenn.dev/tanakh/articles/c-code-in-rust) を参照。

## ReBarUEFI、ほぼ全てのUEFI環境でResizable BARを有効化するプロジェクトが人気に

Hacker Newsでは、UEFIファームウェア上でResizable BAR機能をほぼどの環境でも有効化できるオープンソースプロジェクト「ReBarUEFI」が話題になった。GPUのVRAM全体をCPUから直接アドレッシングできるようにするResizable BARは、対応マザーボードが限られていたが、本プロジェクトによって対応範囲が大きく広がる可能性がある。ゲーミングPCや自作PC愛好家を中心に関心が寄せられている。

詳細は [ReBarUEFI: Resizable BAR for almost any UEFI system](https://github.com/xCuri0/ReBarUEFI) を参照。
