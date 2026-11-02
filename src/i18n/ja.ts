import type { Strings } from "./types";

const ja: Strings = {
  meta: {
    title: "Cluewren",
    description:
      "Unity、Godot、Unreal Engineのエディタで開いているゲームをコーディングエージェントにテストさせるツールです。エージェントが作成したC#ハーネス内で高速な意思決定モデルがゲームを操作し、エージェントが検証結果を証拠とともに報告します。",
  },
  nav: { docs: "ドキュメント", github: "GitHub", language: "言語" },
  hero: {
    lead: "Unity、Godot、Unreal Engineのエディタで開いているゲームをコーディングエージェントがプレイし、バグの探索や挙動の検証、目標達成テストを行えます。",
    primary: "はじめる",
    secondary: "GitHub",
  },
  steps: {
    title: "動作の流れ",
    items: [
      {
        title: "エディタでゲームを開く",
        body: "Cluewrenプラグインを導入したUnity、Godot、またはUnreal Engineでプロジェクトを開きます。",
      },
      {
        title: "エージェントに指示する",
        body: "Claude CodeやCodexに対して、バグの探索、ゲームのテスト、見た目や挙動の検証、目標達成プレイなどを指示します。",
      },
      {
        title: "プレイと検証レポート",
        body: "エージェントがゲームのコードを調査してC#ハーネスを作成し、高速な意思決定モデルがその中でプレイします。エージェントは画面フレームを確認したうえで、プレイ結果を証拠とともに報告します。",
      },
    ],
  },
  features: {
    title: "特徴",
    items: [
      {
        title: "ゲームエンジンプラグイン",
        body: "Unity 6000.0+、Godot 4、Unreal Engine 5向けのプラグインが、同一マシン上のCluewrenプロセスとループバックWebSocket（起動ごとの秘密ハンドシェイク付き）で通信します。",
      },
      {
        title: "手元のコーディングエージェントを利用",
        body: "Cluewren自体は言語モデルを起動・操作せず、言語モデルのキーも持ちません。Claude CodeやCodexセッションに対するMCPサーバーとして動作し、既存のサブスクリプションまたはAPIキーがそのまま適用されます。",
      },
      {
        title: "外部に送信されるデータ",
        body: "ゲーム状態のテキストを含む意思決定リクエストはTypeSafeのAPIに送信され、コーディングエージェントは通常通り自身のプロバイダと通信します。Cluewrenへの送信はなく、アカウントやテレメトリも存在しません。録画や実行データはすべてプロジェクト内に保存されます。",
      },
      {
        title: "サンドボックス実行",
        body: "エージェントが作成したハーネスコードは、APIキーへのアクセス権を持たないWindows AppContainer環境で実行されます（Linuxでは利用可能な場合にbubblewrapを使用）。",
      },
    ],
  },
  start: {
    title: "クイックスタート",
    body: "ビルドには.NET 10 SDKが必要です。リポジトリをクローンしてReleaseビルドを行い、connectコマンドを実行してClaude Codeを設定します（Codexの場合は「connect codex」を実行）：",
    more: "プラグインの導入手順やAPIキーの設定についてはドキュメントをご覧ください",
  },
  footer: {
    license: "CluewrenはApache-2.0ライセンスで提供されるオープンソースソフトウェアです。",
    derived: "本ソフトウェアはAura Autopilot（Apache-2.0ライセンス）から派生しています。",
  },
  notFound: {
    title: "ページが見つかりません",
    body: "指定されたページは見つかりませんでした。",
    home: "トップページに戻る",
  },
};

export default ja;
