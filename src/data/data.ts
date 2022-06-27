import { breadCardType, breadDetailType } from 'type';

export const navData: Array<{ title: string; url: string }> = [
  { title: '빵 선물', url: '/present' },
  { title: '빵 맛집', url: '/restaurant' },
  { title: '빵 사전', url: '/dictionary' },
  { title: '빵 재료', url: '/ingredient' },
  { title: '오답노트', url: '/note' },
  { title: '레시피', url: '/recipe' },
  { title: '빵 자료', url: '/book' },
];

export const breadData: Array<breadCardType> = [
  {
    id: 1,
    category: 'bread',
    title: '소금빵',
    imgUrl: '소금빵',
    country: 'JP',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    id: 2,
    category: 'bread',
    title: '단팥빵',
    imgUrl: '단팥빵',
    country: 'JP',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    id: 3,
    category: 'bread',
    title: '바게트',
    imgUrl: '바게트',
    country: 'FR',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },

  {
    id: 4,
    category: 'bread',
    title: '스콘',
    imgUrl: '스콘',
    country: 'GB',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    id: 5,
    category: 'bread',
    title: '베이글',
    imgUrl: '베이글',
    country: 'US',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    id: 6,
    category: 'bread',
    title: '브레첼',
    imgUrl: '브레첼',
    country: 'DE',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
  {
    id: 7,
    category: 'cookie',
    title: '브레첼',
    imgUrl: '브레첼',
    country: 'DE',
    ingredient: ['flour', 'egg', 'salt', 'sugar'],
  },
];

const type = [
  '브라우니',
  '고로케',
  '마들렌',
  '휘낭시에',
  '에그타르트',
  '몽블랑',
  '에끌레어',
  '다쿠와즈',
  '마카롱',
  '오페라',
  '파리브레스트',
  '티라미수',
  '치아바타',
  '포카치아',
  '바게트',
  '베이글',
  '비에누아',
  '브리오슈',
  '뱅오쇼콜라',
  '슈톨렌',
  '쿠글로프',
  '프레첼',
  '세이글',
  '브리오쉬 살레',
  '스콘',
  '식빵',
];

export const countryMap: Record<string, string> = {
  JP: '일본',
  KR: '한국',
  FR: '프랑스',
  GB: '영국',
  US: '미국',
  DE: '독일',
};

export const breadDetail: Record<number, breadDetailType> = {
  1: {
    title: '소금빵',
  },
  2: {
    title: '단팥빵',
  },
  3: {
    title: '바게트',
  },
  4: {
    title: '스콘',
  },
  5: {
    title: '베이글',
  },
  6: {
    title: '브레첼',
  },
};

export const restaurantData: Array<{
  No: number;
  name: string;
  people: string;
  popular: string;
  location: string;
  instagram: string;
  class: string;
}> = [
  {
    No: 1,
    name: '카페 레이어드',
    people: '',
    popular: '스콘',
    location:
      '연남점: 서울시 마포구 성미산로 161-4 / 안국점: 서울시 종로구 북촌로2길 2-3 / 여의도: 서울시 영등포구 여의대로 108',
    instagram: 'https://instagram.com/cafe_layered?igshid=YmMyMTA2M2Y=',
    class: 'x',
  },
  {
    No: 2,
    name: '스프레드 서울',
    people: '김세정',
    popular: '스콘',
    location:
      '✨성북점 : 성북로 6가길 1, 1층 (화,수,목,금,토 12-20) ✨연남점 : 성미산로 26길 9, 1층 (목,금,토 12-20)',
    instagram: 'https://www.instagram.com/spread_seoul/',
    class: 'https://m.blog.naver.com/mmm1376',
  },
  {
    No: 3,
    name: '성수베이킹 스튜디오',
    people: '황석용 기능장',
    popular: '',
    location: '서울특별시 성동구 성수동2가 315-54 해피드림빌딩',
    class: 'https://lapassionpain.modoo.at/',
    instagram:
      'https://www.instagram.com/seongsu_baking_studio/?igshid=1aqzrkruaovw1',
  },
  {
    No: 4,
    name: '뺑드미 제빵소',
    people: '황석용 기능장',
    popular: '프랑스빵',
    location: '서울특별시 성동구 성수동2가 315-54 해피드림빌딩',
    class: 'https://lapassionpain.modoo.at/',
    instagram: 'https://www.instagram.com/paindemie_bakery/?hl=ko',
  },
];

export const recipe = [
  {
    title: '딸기 페스츄리',
    author: '이정환 제과기능장',
    source: '한국 제과 기능장 협회 마스터 베이커',
    ingredient: [
      {
        title: '반죽 배합',
        list: [
          { name: '강력분', weight: 900 },
          { name: '통밀가루', weight: 100 },
          { name: '설탕', weight: 100 },
          { name: '버터', weight: 100 },
          { name: '소금', weight: 15 },
          { name: '분유', weight: 25 },
          { name: '이스트', weight: 35 },
          { name: '달걀', weight: 120 },
          { name: '사워종', weight: 150 },
          { name: '물', weight: 450 },
        ],
      },
      {
        title: '메이플 시럽 배합',
        list: [
          { name: '정제수', weight: 1000 },
          { name: '설탕', weight: 670 },
          { name: '메이플 시럽', weight: 225 },
          { name: '럼주', weight: 108 },
        ],
      },
    ],

    process: {},
  },
];

export const ingredient = {
  france: [
    {
      category: '버터',
      bland: '',
      manufacturer: '',
      title: '',
      image: '/a/anchor.png',
    },
    {
      category: '밀가루',
      bland: '',
      manufacturer: '',
      title: '',
      image: '/a/anchor.png',
    },
  ],
  korea: [
    {
      category: '버터',
      bland: '앵커',
      manufacturer: '폰테라',
      title: '앵커 무염버터',
      image: '/a/anchor.png',
    },
  ],
  newzealand: [
    {
      category: '버터',
      bland: '앵커',
      manufacturer: '폰테라',
      title: '앵커 무염버터',
      image: '/a/anchor.png',
    },
  ],
  japan: [
    {
      category: '버터',
      bland: '앵커',
      manufacturer: '폰테라',
      title: '앵커 무염버터',
      image: '/a/anchor.png',
    },
  ],
};
