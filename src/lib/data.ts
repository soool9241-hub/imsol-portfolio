import type {
  Strength, ProjectGroup, Collab, Revenue, TechCategory,
  Lecture, JourneyItem, GalleryItem, AgentTeam, MetricItem, StatItem
} from "@/types";

export const NAV_ITEMS = ["소개","강점","경력","콜라보","성과","펜션","자동화","교육","기술","문의"];

export const strengths: Strength[] = [
  {
    icon: "🤝", tag: "#서툰 진심",
    quote: "진심을 다해 상대방이 잘되기를 바라는 마음을 가지고 있습니다.",
    pts: [
      "시장의 변화를 빠르게 알아채고 유연하게 대응",
      "고객 변화와 새 요구에 맞는 제품,서비스를 제안",
      "독창적 아이디어로 팀과 조직에 활력 부여"
    ],
    img: "/images/I10.jpg"
  },
  {
    icon: "🔧", tag: "#끈임없는 제작기술 집착",
    quote: "상상력을 발휘하여 새로운 것을 제안하는 강점",
    pts: [
      "3D프린터40→레이저4→CNC3, 장비를 직접 체득",
      "700건+ 시제품~양산까지 전 과정 경험",
      "소재,가공,후처리 제조 전체를 손끝으로 이해"
    ],
    img: "/images/I06.jpg"
  },
  {
    icon: "📈", tag: "#지속적인 학습 성장",
    quote: "네트워크와 소통으로 문제를 쉽게 풀어가는 강점",
    pts: [
      "고객에게 쉽게 다가가 매력적으로 설명",
      "어떤 관계에서든 제품,서비스를 친근하게 제안",
      "외교적 수완으로 자원이 될 사람을 찾는 능력"
    ],
    img: "/images/I05.jpg"
  },
  {
    icon: "💡", tag: "#인사이트 공유",
    quote: "배운 것을 나누고, 함께 성장하는 메이커 정신",
    pts: [
      "강연 4회 (제주,광주,와디즈,대구)",
      "대학 메이커 교육 60시간+ (전주대,기전대)",
      "AI 에이전트 25명 설계 — 최신기술 즉시 적용"
    ],
    img: "/images/I03.jpg"
  }
];

export const projects: ProjectGroup[] = [
  {
    y: "2026", items: [
      { t: "AI 에이전트 25명 설계", s: "기획,설계", d: "펜션10+경쟁정보5+CNC10", tag: "AI" },
      { t: "n8n+Solapi 마케팅 자동화", s: "기획,개발", d: "LMS 자동발송", tag: "자동화" },
      { t: "조립공간 예약시스템", s: "기획,개발", d: "React+Supabase+SMS", tag: "웹" },
      { t: "조립공간 CNC 체험 런칭", s: "기획,개발,생산,운영", d: "완주 축제 첫 런칭", tag: "체험" },
      { t: "달팽이멤버십 앱", s: "기획,개발", d: "3/6/9회 티어 설문", tag: "웹" },
    ]
  },
  {
    y: "2022~25", items: [
      { t: "캠핑 sneff 13종", s: "기획,개발,생산", d: "스마트스토어", tag: "브랜드" },
      { t: "달팽이아지트 펜션", s: "대표(전체)", d: "5년 7배, 5.0", tag: "숙박" },
      { t: "프리미엄 BBQ", s: "기획,운영", d: "항아리 3시간 훈연", tag: "F&B" },
      { t: "고객 DB 구축", s: "기획,구축", d: "Supabase→3200명", tag: "데이터" },
    ]
  },
  {
    y: "2019~21", items: [
      { t: "매라키 지보드 시리즈", s: "기획,개발,생산", d: "4억+ 매출, 2000개+", tag: "브랜드", hl: true },
      { t: "아디다스 x 손흥민", s: "기획,개발,생산", d: "뱃지 패키지", tag: "콜라보" },
      { t: "유아인 스튜디오", s: "기획,개발,생산", d: "굿 포인트 지압기", tag: "콜라보" },
      { t: "리슬 이날치 귀걸이", s: "가공", d: "BTS,마마무 브랜드", tag: "콜라보" },
      { t: "더보이즈 뮤비 소품", s: "기획,개발,생산", d: "692만뷰", tag: "콜라보" },
      { t: "한꼬 숨숨집 와디즈", s: "가공,생산", d: "1,746% 달성", tag: "브랜드" },
      { t: "CNC 공장 120평", s: "대표(전체)", d: "3Dp40+레이저4+CNC3", tag: "제조" },
    ]
  },
  {
    y: "2017~18", items: [
      { t: "전주대 메이커 30h", s: "기획,교육", d: "장비 활용", tag: "교육" },
      { t: "기전대 메이커 30h", s: "기획,교육", d: "3Dp 실습", tag: "교육" },
      { t: "누에살롱 팝업", s: "기획,운영", d: "미디어아트+푸드3D", tag: "전시" },
      { t: "B2B 부품 다수", s: "개발,생산", d: "성일하이텍 외", tag: "B2B" },
    ]
  }
];

export const collabs: Collab[] = [
  { name: "아디다스", sub: "x 청년장인", desc: "손흥민 뱃지 패키지 디자인 상품", role: "기획/개발/생산", emoji: "⚽" },
  { name: "유아인", sub: "스튜디오 콘크리트", desc: "굿 포인트 지압기 제작", role: "기획/개발/생산", emoji: "🎨" },
  { name: "리슬 x 이날치", sub: "BTS,마마무 브랜드", desc: "색동 귀걸이 CNC 가공", role: "가공", emoji: "💎" },
  { name: "더보이즈", sub: "뮤직비디오", desc: "촬영 소품 — 692만뷰", role: "기획/개발/생산", emoji: "🎬" },
  { name: "한꼬 숨숨집", sub: "와디즈 펀딩", desc: "고양이 숨숨집 1,746%", role: "가공/생산", emoji: "🐱" },
  { name: "매라키 골프", sub: "지보드 시리즈", desc: "2,000개+ 판매 / 4억+", role: "기획/개발/생산", emoji: "⛳" },
  { name: "sneff 캠핑", sub: "스마트스토어", desc: "우드 제품 13종", role: "기획/개발/생산", emoji: "🏕️" },
];

export const revenue: Revenue[] = [
  { y: "2021", v: 1210 },
  { y: "2022", v: 3783 },
  { y: "2023", v: 4883 },
  { y: "2024", v: 5701 },
  { y: "2025", v: 8248 },
];

export const tech: TechCategory[] = [
  { c: "제조 장비", i: ["CNC 라우터 3대","레이저 커터 4대","3D프린터 40대"], e: "🏭" },
  { c: "프론트엔드", i: ["React+Vite","Tailwind CSS","Vercel"], e: "🖥️" },
  { c: "백엔드", i: ["Supabase","PostgreSQL+RLS","REST API"], e: "⚙️" },
  { c: "자동화", i: ["n8n","Solapi SMS/LMS","KakaoTalk API"], e: "🔄" },
  { c: "AI/LLM", i: ["Claude API","Claude Projects","멀티에이전트25명"], e: "🤖" },
  { c: "데이터", i: ["Google Sheets","Supabase DB","304건 분석"], e: "📊" },
];

export const lectures: Lecture[] = [
  { t: "제주더큰내일센터", d: "디지털 마케팅 특강", y: "2021.12" },
  { t: "광주청년창업사관학교", d: "작은 브랜드의 마케팅", y: "2021.05" },
  { t: "와디즈", d: "크라우드 펀딩 마케팅", y: "2021.02" },
  { t: "대구 KRIFI", d: "크라우드펀딩 이해하기", y: "2020.11" },
  { t: "전주대학교", d: "미래인문학부 자문위원", y: "2019~20" },
];

export const journey: JourneyItem[] = [
  { y: "2016", e: "스토리팜 창업", d: "3D프린팅 공방으로 시작" },
  { y: "2017", e: "B2B 시제품 제작", d: "라돈, 동서컨트롤 등" },
  { y: "2018", e: "메이커 교육 시작", d: "기전대,완주문화재단" },
  { y: "2019", e: "펜션+매라키 골프", d: "달팽이아지트+지보드" },
  { y: "2020", e: "CNC 공장 전환", d: "120평 제조 공장" },
  { y: "2021", e: "콜라보 폭발", d: "아디다스,유아인,이날치" },
  { y: "2022", e: "브랜드 기획", d: "sneff 캠핑 13종" },
  { y: "2025", e: "매출 8,248만", d: "5년 7배 성장" },
  { y: "2026", e: "AI 자동화", d: "25명 에이전트+조립공간" },
];

export const gallery: GalleryItem[] = [
  { src: "/images/I04.jpg", cap: "공방에서 도면 검토 중" },
  { src: "/images/I09.jpg", cap: "샌딩 작업 — 세밀한 후처리" },
  { src: "/images/I07.jpg", cap: "목재 조립 작업" },
  { src: "/images/I08.jpg", cap: "레이저 커터 가동" },
  { src: "/images/I11.jpg", cap: "레이저 커팅 세팅" },
  { src: "/images/pension-01.jpg", cap: "달팽이아지트 펜션" },
  { src: "/images/pension-02.jpg", cap: "펜션 전경" },
  { src: "/images/pension-03.jpg", cap: "펜션 내부" },
];

export const agentTeams: AgentTeam[] = [
  { t: "펜션 운영팀", n: "10명", d: "예약·정산·컨시어지·식음료·프로그램·교통·리뷰·시설·마케팅·대시보드", c: "#1B4332" },
  { t: "경쟁정보팀", n: "5명", d: "시장·체험·리뷰·가격·전략", c: "#2D6A4F" },
  { t: "CNC 레퍼런스팀", n: "10명", d: "트렌드·디자인·고객·해외·기술·소재·법규·가격·경쟁사·통합", c: "#40916C" },
];

export const metrics: MetricItem[] = [
  { n: "4억+", u: "매라키 누적매출", c: "#40916C" },
  { n: "1,746%", u: "한꼬 와디즈", c: "#C4960C" },
  { n: "692만", u: "더보이즈 뮤비", c: "#4A7ACD" },
  { n: "8,248만", u: "2025 펜션", c: "#2D6A4F" },
  { n: "700+", u: "누적 제작", c: "#8B6914" },
  { n: "5.0", u: "에어비앤비 7년", c: "#FF5A5F" },
];

export const heroStats: StatItem[] = [
  { value: "10년", label: "창업" },
  { value: "700+", label: "제작" },
  { value: "8,248만", label: "'25매출" },
  { value: "5.0", label: "에어비앤비" },
  { value: "4억+", label: "매라키" },
];

export const pensionStats: StatItem[] = [
  { value: "304건", label: "누적예약" },
  { value: "6,600+", label: "방문객" },
  { value: "28%", label: "재방문" },
  { value: "23명", label: "평균인원" },
  { value: "60:40", label: "직접:에어비앤비" },
];

export const automationStats: StatItem[] = [
  { value: "97%", label: "응답단축" },
  { value: "80%", label: "자동처리" },
  { value: "70%", label: "콘텐츠절감" },
  { value: "60%", label: "운영절감" },
];

export const FILTER_TAGS = ["전체","콜라보","브랜드","제조","숙박","AI","웹","체험","교육","B2B","F&B","데이터","자동화","전시"];

export const EXTERNAL_LINKS = [
  { emoji: "🏠", text: "펜션", url: "https://dalpaengi-five.vercel.app" },
  { emoji: "🧩", text: "조립공간", url: "https://jolib-booking.vercel.app" },
  { emoji: "📝", text: "블로그", url: "https://blog.naver.com/sool9241" },
  { emoji: "🏕️", text: "sneff", url: "https://smartstore.naver.com/sneff" },
];
