# 🌐 Stack-App-2025-V1-Client2

Next.js 14 기반의 프론트엔드 클라이언트 프로젝트입니다.  
Spring Boot 백엔드와 통신하며, 로컬 SSL 개발 환경에서 실행됩니다.

---

## 🚀 기술 스택

| 영역 | 사용 기술 |
|------|------------|
| **Framework** | Next.js 14.2.35 (App Router) |
| **Styling** | Tailwind CSS v3.4.17, shadcn/ui, next-themes |
| **Language** | TypeScript |
| **Theme** | ThemeProvider + next-themes (Light/Dark Mode) |
| **Server** | HTTPS 개발 서버 (`server.mjs`) |
| **Backend** | Spring Boot API 연동 |

---

## 🏗️ 프로젝트 구조

```text
stack-app-2025-v1-client2/
├── certs/                # 로컬 SSL 인증서 (https://localhost:3000용)
├── public/               # 정적 리소스 (SVG, 아이콘 등)
├── src/
│   ├── app/              # Next.js App Router (Layouts & Pages)
│   │   ├── (admin)/      # 관리자 전용 라우트 그룹
│   │   ├── (public)/     # 일반 사용자 라우트 그룹
│   │   ├── globals.css   # 전역 스타일 및 Tailwind CSS 설정
│   │   └── favicon.ico   # 프로젝트 파비콘
│   ├── components/       # 공용 React 컴포넌트
│   │   └── theme/        # 테마 관련 (Provider, Toggle)
│   └── lib/              # 유틸리티 및 설정
│       ├── api.ts        # API 통신 로직
│       ├── config.ts     # 환경 변수 및 공통 설정
│       └── utils.ts      # Tailwind Merge 등 헬퍼 함수
├── .eslintrc.json        # ESLint 설정
├── components.json       # shadcn/ui 설정
├── next.config.mjs       # Next.js 설정
├── package.json          # 프로젝트 의존성 및 스크립트
├── postcss.config.js     # PostCSS 설정
├── server.mjs            # HTTPS 개발 서버 실행 파일
├── tailwind.config.js    # Tailwind CSS 설정
└── tsconfig.json         # TypeScript 설정
```

---

## ⚙️ 환경 설정

프로젝트 루트에 `.env.development` 또는 `.env.production` 파일을 생성하여 관리합니다.

### `.env.development` 예시
```env
NEXT_PUBLIC_APP_ENV=dev
NEXT_PUBLIC_API_BASE_URL=https://localhost:8443/api
NEXT_PUBLIC_STATIC_BASE=/
```

---

## 🔑 SSL 개발 서버 (HTTPS)

로컬 개발 환경에서 HTTPS 프로토콜을 사용하기 위해 `server.mjs`를 별도로 구현하였습니다.  
`certs/` 폴더 내에 `localhost.key.pem`과 `localhost.cer.pem` 파일이 존재해야 합니다.

```javascript
// server.mjs 주요 로직
const httpsOptions = {
    key: readFileSync("./certs/localhost.key.pem"),
    cert: readFileSync("./certs/localhost.cer.pem"),
};
// ... https://localhost:3000 에서 실행
```

---

## 🧱 실행 가이드

### 개발 서버 실행 (SSL 적용)
```bash
npm run dev
```

### 운영 빌드 및 실행
```bash
# 빌드
npm run build

# 실행
npm run start
```

---

## 🖌️ 주요 기능
- **다크 모드 지원**: `next-themes`와 `ThemeProvider`를 통한 완벽한 테마 전환.
- **HTTPS 개발 환경**: 로컬에서도 실 운영과 유사한 환경에서 개발 가능.
- **라우트 그룹화**: `(admin)`, `(public)` 그룹을 통한 논리적 권한 및 레이아웃 분리.
- **UI 일관성**: `shadcn/ui` 기반의 세련된 디자인 시스템.

---

## 🧭 폴더별 역할 요약
| 폴더/파일 | 역할 |
|---|---|
| `src/app` | 페이지 라우팅 및 전역 스타일 정의 |
| `src/components` | 재사용 가능한 UI 및 테마 구성 요소 |
| `src/lib` | 외부 API 연결 및 프로젝트 설정 관리 |
| `certs` | 로컬 HTTPS 개발을 위한 SSL 인증서 관리 |
| `server.mjs` | 커스텀 HTTPS 개발 서버 엔진 |

---

## 🧾 License
MIT © 2025 Stack-App-2025-V1-Client2  
Developed by SangHyouk Jin