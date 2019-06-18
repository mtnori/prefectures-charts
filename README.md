# prefectures-charts

## 起動方法

### 設定ファイルの作成
`.env.example`をコピーして`.env`ファイルを作成します。

### 設定ファイルにあなたのRESAS APIキーを設定  
上記手順で作成した`.env`を以下のように編集します。

```
API_KEY=あなたのRESAS APIキーを設定
```

### 必要なライブラリをインストール
`yarn install`

### 開発サーバで起動する場合、以下のコマンドを実行してください。
`yarn start`

### ビルドしてから起動する場合、以下のコマンドを実行してください。
`yarn build`
`yarn serve`
