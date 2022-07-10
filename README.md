# 訓練サーチ

教育訓練給付金制度に対応した訓練講座を検索するアプリケーションです。
現在公開されている検索システムでは難しい講座期間や講座受講料による絞り込み検索が可能です。

## 実現したかったこと
- 講座を条件ごとに絞りこみたい
- 一画面で大まかな講座内容を掴みたい
- 所在地などで比較したい

⏬ 厚生労働省サイトメイン画面　：　一覧では講座運営者と住所などの情報しか得られない
<img width="1080" alt="kunrenkouza_home" src="https://user-images.githubusercontent.com/77220332/178138634-37c3895a-7a00-4fa5-8b9f-16583ea4b752.png">


## アプリケーション

https://kunren-search.herokuapp.com/

<img width="805" alt="Screen Shot 2022-07-10 at 4 21 22" src="https://user-images.githubusercontent.com/77220332/178119868-1876dcc8-986e-4553-a2d8-0881b53c350b.png">
<img width="805" alt="Screen Shot 2022-07-10 at 4 21 39" src="https://user-images.githubusercontent.com/77220332/178119872-76078ec8-4b6e-4b1d-a015-e80ed9475bac.png">

### リソース
<教育訓練給付制度>対応講座の検索サイト
https://www.kyufu.mhlw.go.jp/kensaku/SCM/SCM101Scr02X/SCM101Scr02XInit.form

<img width="1003" alt="Screen Shot 2022-07-10 at 4 05 55" src="https://user-images.githubusercontent.com/77220332/178119476-66d2c969-c93a-4dc7-b8cd-6b1f7c0485ad.png">


### スクレイピングで情報取得

検索システムの情報を取得してアプリケーションに取得データを読み込ませています。
playwrightを使用しました。
![scraping](https://user-images.githubusercontent.com/77220332/178119727-d2628725-1f58-40e1-8aa7-3560ae130d25.gif)

<!-- https://user-images.githubusercontent.com/77220332/178119535-d6a52157-a7c7-4397-b2aa-7eae94597010.mov -->




