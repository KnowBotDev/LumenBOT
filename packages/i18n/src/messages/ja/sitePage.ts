import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/sitePage";

export const messages = {
  "sitePage.error.title": "このページを読み込めませんでした",
  "sitePage.error.body":
    "接続を確認して、ページを再読み込みしてください。それでも読み込めない場合は、ホームページに戻ってください。",
  "sitePage.error.reload": "再読み込み",
  "sitePage.error.home": "ホームに戻る",
  "sitePage.join.title": "LumenBOT サーバーに参加",
  "sitePage.join.description": "非公開のサーバー招待を LumenBOT で開きます。",
  "sitePage.join.eyebrow": "非公開の招待",
  "sitePage.join.intro": "この招待を LumenBOT で開いてください。アプリがサーバーを確認し、接続する前に確認を求めます。",
  "sitePage.join.invalid": "この招待リンクは無効か、不完全です。サーバーのオーナーに新しい招待を依頼してください。",
  "sitePage.join.open": "LumenBOT を開く",
  "sitePage.join.browser": "ブラウザーで開く",
  "sitePage.join.download": "LumenBOT をダウンロード",
  "sitePage.join.notOpened":
    "LumenBOT が開かなかった場合は、{download} からインストールするか、LumenBOT を一度起動して招待リンクを開けるようにしてください。{browser} も使えます。",
  "sitePage.join.mobile":
    "LumenBOT がインストールされている場合は、{open} をタップしてください。このリンクをアプリの「サーバーを追加」に貼り付けることもできます。",
  "sitePage.join.singleUse":
    "1 回限りのリンクは 1 回だけ使え、その後は期限切れになります。無期限のリンクは、オーナーが取り消すまで使えます。LumenBOT は参加前に有効期限を表示します。",
  "sitePage.join.email": "招待がメールで届いた場合は、そのメールアドレスで LumenBOT にサインインしてください。",
  "sitePage.join.share": "このリンクでサーバーにアクセスできます。招待したい人とだけ共有してください。",
  "sitePage.connect.title": "LumenBOT に戻る",
  "sitePage.connect.failedTitle": "接続が完了しませんでした",
  "sitePage.connect.openApp": "LumenBOT を開く",
  "sitePage.connect.tryAgainApp": "LumenBOT で再試行",
  "sitePage.connect.tryAgainBrowser": "ブラウザーで再試行",
  "sitePage.connect.doneInWebClient": "LumenBOT のタブが {name} との接続を完了します。このタブは閉じてかまいません。",
  "sitePage.connect.doneInApp": "LumenBOT がこのコンピューターで {name} との接続を完了します。",
  "sitePage.connect.failure.cancelled": "{name} との接続はキャンセルされました。何も変更されていません。",
  "sitePage.connect.failure.expired": "{name} へのサインインの期限が切れました。接続をもう一度始めてください。",
  "sitePage.connect.failure.exchange": "{name} が接続を確認しませんでした。もう一度お試しください。",
  "sitePage.connect.failure.enterprise": "組織全体ではなく、Slack ワークスペースを 1 つ接続してください。",
  "sitePage.connect.failure.takenSlack":
    "別の LumenBOT サーバーがすでにこの Slack ワークスペースで応答しています。そのサーバーで接続を解除してから、もう一度お試しください。",
  "sitePage.connect.failure.takenDiscord":
    "別の LumenBOT サーバーがすでにこの Discord サーバーで応答しています。そのサーバーで接続を解除してから、もう一度お試しください。",
  "sitePage.connect.failure.unavailable":
    "LumenBOT は現在 {name} に接続できません。しばらくしてからもう一度お試しください。",
  "sitePage.connect.failure.tabClosed":
    "{name} との接続を始めた LumenBOT のタブが応答しませんでした。ブラウザーで LumenBOT を開き、{name} をもう一度接続してください。",
  "sitePage.connect.failure.failed": "{name} が接続を完了しませんでした。もう一度お試しください。",
  "sitePage.connect.restartHint":
    "LumenBOT で {serverSettings}、{connectors}、{name} の順に開き、{connect} を選択してください。",
  "sitePage.connect.notOpened":
    "LumenBOT を起動してから、もう一度お試しください。このコンピューターに LumenBOT がない場合は、ダウンロードしてアプリから {name} を接続してください。",
  "sitePage.openApp.title": "何も開きませんでしたか?",
  "sitePage.openApp.dismiss": "後で",
  "sitePage.billing.pageTitle": "LumenBOT の請求",
  "sitePage.billing.updatedTitle": "請求情報を更新しました",
  "sitePage.billing.updatedBody": "LumenBOT に戻ってください。このページは閉じてかまいません。",
  "sitePage.billing.cancelledTitle": "支払いをキャンセルしました",
  "sitePage.billing.cancelledBody": "請求は発生していません。LumenBOT に戻ってください。",
  "sitePage.report.pageTitle": "ホストされたサイトを報告 — LumenBOT",
  "sitePage.report.title": "ホストされたサイトを報告",
  "sitePage.report.intro": "lumenbot.site のアドレスにある有害または違法なコンテンツを報告します。",
  "sitePage.report.hostnameLabel": "サイトのアドレス",
  "sitePage.report.hostnameMissing": "サイトのアドレスを入力してください",
  "sitePage.report.reasonLabel": "理由",
  "sitePage.report.reason.phishing": "フィッシング",
  "sitePage.report.reason.malware": "マルウェア",
  "sitePage.report.reason.abuse": "迷惑行為",
  "sitePage.report.reason.copyright": "著作権",
  "sitePage.report.reason.other": "その他",
  "sitePage.report.detailsLabel": "詳細",
  "sitePage.report.optional": "任意",
  "sitePage.report.detailsPlaceholder": "このサイトの何が問題ですか?",
  "sitePage.report.send": "報告を送信",
  "sitePage.report.sending": "送信中…",
  "sitePage.report.tooMany": "報告が多すぎます。しばらくしてからもう一度お試しください。",
  "sitePage.report.sendFailed": "報告を送信できませんでした。もう一度お試しください。",
  "sitePage.report.writeTo": "{email} に連絡することもできます。",
  "sitePage.report.sentTitle": "報告を送信しました",
  "sitePage.report.sentBody": "ありがとうございます。報告を受け付けました。",
  "sitePage.report.home": "ホームページへ",
} as const satisfies PartialTranslation<typeof source>;
