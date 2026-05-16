# AGENTS.md

## アプリ概要

このアプリは、
ユーザーが好みのラーメンジャンルを選択すると、
おすすめのラーメン店を提案する Web アプリです。

## 主な機能

- ラーメンジャンルの選択
- ジャンルに応じたラーメン店一覧表示
- ラーメン店詳細表示
- Google Maps への遷移

## データ管理方針

- データベースは使用しません
- ラーメン店データは静的な JSON / TypeScript データとして管理してください
- static export 前提で動作する構成にしてください
- 外部 API は不要です

## ラーメン店データ要件

ラーメン店は以下情報を持つものとします。

```ts
type RamenShop = {
  id: string;
  name: string;
  genreId: string;
  googleMapUrl: string;
};
```

## ジャンルデータ要件

ジャンルは別データとして管理してください。

```ts
type Genre = {
  id: string;
  name: string;
};
```

## データ構成方針

以下のような構成を推奨します。

```txt
src/data/
├── genres.ts
└── ramenShops.ts
```

## UI要件

- モバイルファーストで設計してください
- シンプルで見やすいUIを優先してください
- ジャンル選択は視認性を重視してください
- Google Maps へ遷移しやすいUIにしてください

## 非要件

以下は不要です。

- 認証
- データベース
- 管理画面
- 投稿機能
- リアルタイム通信
- 外部API連携

## プロジェクト概要

このプロジェクトは Next.js(App Router) を利用した
static export の Web アプリケーションです。

シンプルで保守しやすい構成を重視してください。

以下を優先してください。

- 可読性
- 保守性
- シンプルな設計
- 最小限の依存関係
- 高速な静的ページ
- 過剰設計を避ける

必要性が低い複雑な abstraction は避けてください。

## 技術構成

- Next.js (App Router / Static Export)
- TypeScript
- Tailwind CSS
- shadcn/ui

## 設計方針

- 可能な限り Static Generation を利用してください
- 不要な Client Component は避けてください
- 小さく再利用しやすいコンポーネントに分割してください
- UI とロジックは適切に分離してください
- static export 制約の範囲で server side を優先してください
- 不要なライブラリ追加は禁止です

## 開発ルール

- 日本語で説明してください
- 変更前に方針を短く説明してください
- 関連ファイルを読んでから編集してください
- 大きな変更は小さなステップに分けてください
- 変更後は `npm run lint` を実行してください
- 型エラーが出ないようにしてください

## 環境構築

- GitHub Actions を追加してください
- Pull Request 作成時に `npm run build` を実行してください
- husky と lint-staged を導入してください
- prettier を導入してください
- prettier-plugin-tailwindcss を導入してください
- package manager は既存プロジェクトに合わせてください

## コーディングルール

- React Component はシンプルで読みやすくしてください
- Server Component を優先してください
- interface より type を優先してください
- Tailwind class は既存順序に合わせてください

### 命名規則

- Component ファイル名は UpperCamelCase
  - `PostCard.tsx`
  - `LoginForm.tsx`

- utility 関数ファイルは lowerCamelCase
  - `formatDate.ts`
  - `createPost.ts`

## 実装ルール

- Component は以下形式で定義してください

```tsx
export default function PostCard() {}
```

- 関数・hooks はアロー関数を利用してください

```ts
const formatDate = () => {};
```

## UI方針

- モダンでミニマルなUIを優先してください
- 余白を活かしてください
- 過剰なアニメーションは禁止です
- Vercel のようなシンプルなデザインを意識してください
