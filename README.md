# News Dashboard Frontend

뉴스 키워드 분석을 위한 대시보드 프론트엔드 애플리케이션입니다. 이 프로젝트는 뉴스 데이터의 키워드를 시각화하여 보여주는 워드 클라우드를 구현합니다.

## 주요 기능

- 실시간 뉴스 키워드 워드 클라우드 시각화
- 1분 간격 자동 데이터 갱신
- 반응형 디자인
- 키워드 빈도수 기반 시각화

## 기술 스택

- React 18
- TypeScript
- D3.js
- Axios

## 시작하기

### 필수 조건

- Node.js 14.0.0 이상
- npm 6.0.0 이상

### 설치

1. 저장소를 클론합니다:
```bash
git clone [repository-url]
cd news-dashboard-frontend
```

2. 의존성을 설치합니다:
```bash
npm install
```

### 실행

개발 서버를 시작합니다:
```bash
npm start
```

애플리케이션이 http://localhost:3000 에서 실행됩니다.

## 프로젝트 구조

```
src/
  ├── components/     # React 컴포넌트
  ├── services/      # API 서비스
  ├── App.tsx        # 메인 애플리케이션 컴포넌트
  └── index.tsx      # 애플리케이션 진입점
```

## API 연동

백엔드 API는 다음 엔드포인트를 사용합니다:
- `http://localhost:8080/api/keywords`: 키워드 데이터 조회

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.