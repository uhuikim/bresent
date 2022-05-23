export const navData: Array<{ title: string; url: string }> = [
  { title: '빵 선물', url: '/present' },
  { title: '빵 사전', url: '/dictionary' },
  { title: '빵 재료', url: '/ingredient' },
  { title: '오답노트', url: '/note' },
  { title: '레시피', url: '/recipe' },
  { title: '도서', url: '/book' },
];

export const breadData: Array<{
  category: string;
  title: string;
  imgUrl: string;
  country: string;
  ingredient: Array<string>;
}> = [
  {
    category: '빵',
    title: '소금빵',
    imgUrl: '소금빵',
    country: 'japan',
    ingredient: ['강력분', '계란'],
  },
  {
    category: '빵',
    title: '단팥빵',
    imgUrl: '단팥빵',
    country: 'japan',
    ingredient: ['강력분', '계란'],
  },
  {
    category: '빵',
    title: '바게트',
    imgUrl: '바게트',
    country: 'france',
    ingredient: ['강력분', '계란'],
  },

  {
    category: '빵',
    title: '스콘',
    imgUrl: '스콘',
    country: 'england',
    ingredient: ['강력분', '계란'],
  },
  {
    category: '빵',
    title: '베이글',
    imgUrl: '베이글',
    country: 'us',
    ingredient: ['강력분', '계란'],
  },
  {
    category: '빵',
    title: '브레첼',
    imgUrl: '브레첼',
    country: 'germany',
    ingredient: ['강력분', '계란'],
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
  japan: '일본',
  korea: '한국',
  france: '프랑스',
  england: '영국',
  us: '미국',
  germany: '독일',
};
