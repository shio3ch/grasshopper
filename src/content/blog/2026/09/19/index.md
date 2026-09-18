---
title: "2026年9月19日 技術ニュースまとめ：構造化出力モデル「Jev」ブーム、Cloudflareの一時トンネル、RP2350へのレーザー攻撃など"
description: "ローカルブラウザで動く構造化決定モデル「Jev」系プロジェクトが日米で同時に話題に。Cloudflareの一時トンネルサービスやメモリ最適化、RP2350への物理攻撃、Claude CodeのAGENTS.md対応など2026年9月19日のニュースをまとめました。"
pubDate: 2026-09-19
tags: ["AI", "セキュリティ", "インフラ", "モバイル", "フロントエンド"]
author: "grasshopper"
---

本日は、自然言語生成を介さずに構造化データを直接出力する新種のモデル「Jev」系プロジェクトが、Hacker NewsとZennの双方でほぼ同時に話題となった。インフラ分野ではCloudflareが開発者向けの一時トンネルサービスと大規模なメモリ最適化事例を公開し、セキュリティ分野ではRaspberry Pi RP2350への高度な物理攻撃が報告されている。開発ツール面ではClaude CodeがAGENTS.mdの読み込みに対応し、モバイル領域では数十MBで動く超軽量AIモデルや、Androidの新API公開方針の変化も注目を集めた。

## 「GPU for LLMs」と呼ばれる構造化出力モデル「Jev」が日米で同時に話題に

Hacker Newsでは、ブラウザ上でローカル動作する意思決定モデルの研究プロジェクト「SemIf」（旧称OpenJev）が上位入りした。自然言語を生成してからパースする従来型LLMとは異なり、選択肢の確率を直接読み取る方式と、JSONをトークンごとに生成する方式を比較検証できるデモを、サーバー不要・ブラウザ内完結で提供している。同時期にZennでも、TypeSafe AIの「Jev」というモデルを扱う記事が複数トレンド入りした。こちらは出力層をJSON的な構造に直接特化させることで、256択の並列判断を約500ミリ秒・1回あたり0.0001ドル未満で実行できる点が特徴とされ、深い推論に強い従来LLMを「CPU」、Jevを「GPU」に例える表現で紹介されている。両者は開発主体が異なるものの、「LLMの出力を構造化決定に特化させる」という同じ方向性の技術トレンドが同時多発的に注目された形だ。

詳細は [OpenJev（SemIf）](https://openjev.com/) と [既存の LLM が CPU なら、 Jev はその GPU 版みたいなやつ](https://zenn.dev/mizchi/articles/jev-is-gpu-for-llms) を参照。

## Cloudflare、アカウント登録不要の「Quick Tunnels」を「エージェント時代」向けに訴求

Cloudflareは、ローカルサーバーをワンコマンドで公開URL化できる一時トンネルサービス「Quick Tunnels」を紹介する記事でHacker Newsのトップに立った。`cloudflared`がアウトバウンドのみの接続で最寄りのエッジへ張られ、登録やDNS設定なしで数秒のうちにHTTPS付きの公開URLが得られる。特にAIコーディングエージェントのビルド・テスト・レビューのループや、Stripe・GitHubなどのWebhook検証先として実アドレスが必要な場面での利用を想定しており、開発プレビューの共有やCI/CDでのライブコールバック検証にも使えるとしている。

詳細は [Cloudflare Quick Tunnels](https://try.cloudflare.com/) を参照。

## Cloudflare、コンシステントハッシュの数学的見直しで100TBのRAMを削減

Cloudflareのブログでは、Pingoraバックエンドルーターのメモリ消費を数学的アプローチで削減した事例が紹介された。ハッシュポイントのインデックスを32bitから16bitに縮小しパディングなしのバイト配列で保持することで25%の圧縮を達成したほか、コンシステントハッシュの変動係数を理論的に導出し、追加していたハッシュポイントの90%が誤差改善にほとんど寄与していないことを突き止めた。新旧のハッシュリングを併存させながらデータセンター単位で段階的に移行することで、グローバルで100TBのメモリ削減につなげたという。

詳細は [Saving another 100TB of RAM](https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/) を参照。

## Raspberry Pi RP2350、フォトン検出とレーザーでセキュアデバッグを突破

Ledgerの脆弱性研究チームDonjonは、Raspberry Pi RP2350（リビジョンA4）に対する物理攻撃の詳細を公開した。フォトン放出顕微鏡でデバッグ無効化を制御する`DEBUGEN`レジスタの位置を特定し、レーザーパルスで特定ビットをセットしてセキュアデバッグを復活させたうえで、ファームウェアがメモリを再ロックする前にレスキューリセットを発生させ、OTP領域から秘密情報を抽出することに成功したという。OTP自体は冗長エンコーディングによる保護が施されていた一方、`DEBUGEN`レジスタには同等の保護がなかった点が突かれた。約25万ドル相当の機材と破壊的な物理改造を要するため実用的な脅威度は限定的だが、「永続的なOTP設定から可変な制御レジスタ、リセット挙動まで含めた経路全体をセキュリティ分析の対象にすべきだ」という指摘は、組み込みセキュリティ設計者にとって示唆に富む。

詳細は [Photon-Emission-Guided Laser Fault Injection Enables RP2350 Secure Debug](https://donjon.ledger.com/blog/rp2350-secure-debug-laser-fault-injection/) を参照。

## Claude Code、CLAUDE.mdが無い場合にAGENTS.mdを読み込む機能を追加

Anthropicは、Claude Codeのバージョン2.1.277でAGENTS.mdファイルのサポートを追加したと発表した。プロジェクトにCLAUDE.mdが存在しない場合に限りAGENTS.mdを代替として読み込む仕様で、`/config`の「Project instructions」から挙動を変更できる。既存のCLAUDE.mdは引き続き優先されるため後方互換性は保たれるが、現時点ではBedrock・Vertex AI・Foundry上ではこの機能は利用できない。エージェント関連の指示ファイルを独自の命名規則で管理しているプロジェクトにとって、ツールをまたいだ設定の使い回しがしやすくなる変更といえる。

詳細は [Claude Code Changelog](https://code.claude.com/docs/en/changelog) を参照。

## 8〜29MBの超小型モデル「Cactus Needle 3」、モバイル向けツール呼び出しでDeepSeek V4 Flashに匹敵

スマートフォンやウェアラブル、ロボットなど省リソース端末向けの基盤モデル「Needle 3」がHacker NewsのShow HNで紹介された。2bit量子化により単一バイナリで8〜29MBに収まりながら、ツール呼び出し・構造化抽出・テキスト埋め込みの3タスクに特化している。2〜20層の間で深さの異なるサブネットワークを内包する「インテリジェンス・ラダリング」構造が特徴で、4層構成のサブネットワークがモバイル向け関数呼び出しタスクでDeepSeek V4 Flashに匹敵する性能を示したという。10倍のサイズのモデルをモバイルツール呼び出しで上回り、2〜3倍のサイズのモデルに抽出タスクで匹敵するとしている。

詳細は [Show HN: Cactus Needle 3](https://cactuscompute.com/needle) を参照。

## GrapheneOS、Android 17 QPR1がAOSP非公開のままAPIを追加する初のリリースと指摘

セキュリティ重視のAndroidディストリビューションGrapheneOSは、Android 17 QPR1が、Android 3.x系以来初めて、AOSP（Android Open Source Project）への公開を経ずに新APIを追加するリリースになるとMastodon上で指摘した。GoogleがPlayシステムアップデートなど非公開コンポーネント経由でAPIを拡張する動きは近年強まっており、オープンソースベースのカスタムROMやプライバシー重視ディストリビューションの開発・追随コストに影響しうる変化として、Android関連コミュニティで注目されている。

詳細は [Android 17 is the first since 3.x to add new APIs without releasing to the AOSP](https://grapheneos.social/@GrapheneOS/117282080803799576) を参照。

## LLMを使った文章執筆、「語彙を借りるな」「賞賛を鵜呑みにするな」という2原則

Hacker Newsで人気を集めたブログ記事は、LLMを文章執筆に活用する際の2つの原則を提示している。1つ目は「LLMの言葉選びをそのまま採用しない」ことで、モデルが生成する「雑誌の見出し」のような整った表現をそのまま使うと、読者に無意識のうちに機械的な文章だと見抜かれてしまうと指摘する。2つ目は「モデルの称賛を真に受けない」ことで、LLMは無条件に肯定的な評価を返しがちなため、それを信じると本来必要な推敲や書き直しが行われなくなるという。著者はLLMを「無限に根気強い校正者」として、受動態や冗長表現、段落構成の指摘役に限定して使い、自分で書き直した後に別インスタンスで元稿と比較させるワークフローを実践しているという。

詳細は [How to Write with an LLM](https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/) を参照。

## WebMCPをCMSエディタで検証、AIエージェントの操作が約50%高速化

Zennでは、フロントエンドエンジニアがWebMCPを自社CMSのデザインエディタに実装して検証した記事がトレンド入りした。WebMCPはAI向けの操作（ツール）をブラウザ上に直接公開する仕組みで、宣言的なHTML属性によるシンプルな実装と、React製の複雑なエディタ向けにJavaScriptで動的にツールを登録する実装の2パターンが紹介されている。Codexエージェントに同じ操作をさせた比較では、WebMCPなしでGUIを人間のように操作した場合が5分52秒だったのに対し、WebMCP導入後は3分9秒と約50%短縮された。特に`list_blocks`のような読み取り系ツールを先に用意し、「観察→計画→実行」のワークフローを成立させたことが効果の鍵だったという。

詳細は [WebMCPを試してみた感想。フロントエンドの必須技術になりそうな予感。](https://zenn.dev/chot/articles/268804cd6694ab) を参照。

## GitHub Blogのポッドキャスト、「RAGは死んだか」「SkillsはMCPを殺したか」を議論

GitHub Blogが公開したポッドキャストエピソードでは、AI開発を巡るホットな論点として、コードレビューは誰の責任か、AI活用状況が採用方針に与える影響、RAGは時代遅れになったか、AnthropicのSkillsがMCPを代替しつつあるかといったテーマが議論された。結論として、これらのツールは開発者の作業を消し去るのではなく、労力の配分を再構成するものだという立場が強調されている。技術トレンドの盛衰を追う上で、断定的な「死んだ／殺した」論調に対する冷静な視点を提供する内容だ。

詳細は [Should you read the code, is RAG dead, and did Skills kill MCP?](https://github.blog/ai-and-ml/should-you-read-the-code-is-rag-dead-and-did-skills-kill-mcp/) を参照。
