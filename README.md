# prefectures-charts

都道府県別の総人口推移グラフを表示するSPA(Single Page Application)

## 要件
- Google Chrome 最新版(2019/06/18現在)
- Yarn
- RESAS APIのAPIキー(ユーザー登録が必要)

## 起動方法

### 1.設定ファイルの作成
`.env.example`をコピーして`.env`ファイルを作成します。

### 2.設定ファイルにあなたのRESAS APIキーを設定  
上記手順で作成した`.env`を以下のように編集します。

```
API_KEY=あなたのRESAS APIキーを設定
```

### 3.必要なライブラリをインストール
`yarn install`

### 4-1.開発サーバで起動する場合、以下のコマンドを実行してください。
`yarn start`

### 4-2.ビルドしてから起動する場合、以下のコマンドを実行してください。
`yarn build`  
`yarn serve`

### 5.サーバー起動後、以下URLへアクセスします。
`http://localhost:8080/`
