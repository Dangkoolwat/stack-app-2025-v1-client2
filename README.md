# 🌐 Stack-App-2025-V1-Client2

Next.js 14 기반의 프론트엔드 클라이언트 프로젝트입니다.  
Stack-App-2025-v1 프로젝트 Spring Boot 백엔드와 통신하며, dev/prod 프로파일을 분리하고  
로컬 SSL 개발 환경(https://localhost:3000)에서 실행됩니다.

---

## 🚀 기술 스택

| 영역 | 사용 기술 |
|------|------------|
| Framework | **Next.js 14 (App Router)** |
| Styling | **Tailwind CSS v4**, **shadcn/ui**, **next-themes** |
| Language | **TypeScript** |
| State / Theme | **ThemeProvider + next-themes** |
| Build | **Turbopack** (기본 활성화) |
| Server | **HTTPS 개발 서버 (server.mjs)** |
| Backend | **Spring Boot (profile: dev, prod)** |

---

## 🏗️ 프로젝트 구조

# 🌐 Stack-App-2025-V1-Client2

Next.js 14 기반의 프론트엔드 클라이언트 프로젝트입니다.  
Spring Boot 백엔드와 통신하며, dev/prod 프로파일을 분리하고  
로컬 SSL 개발 환경(https://localhost:3000)에서 실행됩니다.

---

## 🚀 기술 스택

| 영역 | 사용 기술 |
|------|------------|
| Framework | **Next.js 14 (App Router)** |
| Styling | **Tailwind CSS v4**, **shadcn/ui**, **next-themes** |
| Language | **TypeScript** |
| State / Theme | **ThemeProvider + next-themes** |
| Build | **Turbopack** (기본 활성화) |
| Server | **HTTPS 개발 서버 (server.mjs)** |
| Backend | **Spring Boot (profile: dev, prod)** |

---

## 🏗️ 프로젝트 구조
```
stack-app-2025-v1-client2/
├── public/
│ ├── css/ # 정적 CSS
│ ├── js/ # 외부 JS 플러그인
│ ├── images/ # 이미지 리소스
│ └── vendor/ # 외부 라이브러리
├── ssl/
│ ├── localhost.key.pem
│ ├── localhost.cer.pem
├── src/
│ ├── app/
│ │ ├── (public)/layout.tsx
│ │ ├── (public)/page.tsx
│ │ ├── (admin)/admin/layout.tsx
│ │ ├── (admin)/admin/page.tsx
│ │ ├── (auth)/login/page.tsx # 로그인 전용 라우트 (선택)
│ │ └── globals.css
│ ├── components/
│ │ ├── theme/
│ │ │ ├── ThemeProvider.tsx
│ │ │ └── ThemeToggle.tsx
│ │ └── ui/ # shadcn/ui 컴포넌트
│ └── lib/
│ ├── api.ts
│ └── config.ts
├── .env.development
├── .env.production
├── postcss.config.js
├── tailwind.config.js
├── server.mjs
└── package.json
```


---

## ⚙️ 환경 설정

### `.env.development`
```env
NEXT_PUBLIC_APP_ENV=dev
NEXT_PUBLIC_API_BASE_URL=https://localhost:8443/api
NEXT_PUBLIC_STATIC_BASE=/
NEXT_PUBLIC_SSL_KEY=localhost.key.pem
NEXT_PUBLIC_SSL_CERT=localhost.cer.pem
```

## 🔑 SSL 개발 서버 설정
```
로컬 HTTPS 서버를 위해 server.mjs 사용:
import { createServer } from "https";
import { readFileSync } from "fs";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
key: readFileSync("./ssl/localhost.key.pem"),
cert: readFileSync("./ssl/localhost.cer.pem"),
};

app.prepare().then(() => {
createServer(httpsOptions, (req, res) => handle(req, res)).listen(3000, () => {
console.log("HTTPS Next.js dev server running at https://localhost:3000");
});
});
```

## 🧱 개발 서버 실행
```
# 개발용 (SSL)
npm run dev

# 운영 빌드
npm run build

# 운영 서버 실행
npm run start
```

## 🖌️ 주요 기능
- Tailwind CSS v4 기반 테마 시스템
- next-themes로 라이트/다크 모드 지원
- shadcn/ui 구성요소 통합
- dev/prod 환경 분리
- HTTPS 로컬 개발 서버
- Spring Boot 백엔드 API 연동 구조(lib/api.ts)
- 관리자(Admin) / 사용자(Public) / 인증(Auth) 라우트 그룹 분리

## 🧩 페이지 구조 요약

| 그룹         | 경로                     | 설명                       |
| ---------- | ---------------------- | ------------------------ |
| `(public)` | `/`                    | 사용자 랜딩                   |
| `(admin)`  | `/admin`               | 관리자 페이지                  |
| `(auth)`   | `/login`               | 로그인 전용 레이아웃              |
| 공통         | `/src/app/globals.css` | 전역 스타일 및 Tailwind import |


## 🧭 폴더별 역할
| 폴더               | 역할                     |
| ---------------- | ---------------------- |
| `src/app`        | Next.js 페이지 및 레이아웃 구조  |
| `src/components` | UI, 테마 관련 컴포넌트         |
| `src/lib`        | API 호출 및 환경 변수 처리      |
| `public`         | 정적 자원 (이미지, CSS, JS 등) |
| `ssl`            | 로컬 HTTPS 인증서           |
| `server.mjs`     | HTTPS 개발 서버 실행 파일      |


## 🧠 렌더링 순서
```
layout.tsx → ThemeProvider → ThemeToggle → page.tsx
```

## 🛠️ 빌드 & 배포
- 로컬 개발: npm run dev (SSL)
- Vercel 배포: GitHub 연결 → 자동 빌드 (.env.production 사용)
- Spring Boot 통합: 빌드 후 /build 결과물을 백엔드 /resources/static 으로 복사 가능

## 🧾 License
MIT © 2025 Stack-App-2025-V1-Client2
Developed by SangHyouk Jin