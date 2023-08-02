export type Article = {
  id: string;
  category: string;
  category_id: number;
  title: string;
  writer: string;
  content: string;
  date: string;
};

// { name: "일반쓰레기", path: "gen" },
// { name: "캔류 · 고철", path: "can" },
// { name: "페트", path: "pet" },
// { name: "종이 · 종이팩", path: "paper" },
// { name: "유리", path: "glass" },
// { name: "비닐", path: "vinyl" },
// { name: "플라스틱", path: "plastic" },
// { name: "음식물", path: "food" },
// { name: "의류 · 원단", path: "cloth" },

const ARTICLE_DATA: Article[] = [
  {
    id: "1",
    category: "음식물",
    category_id: 8,
    title: "치킨(닭 뼈)",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n치킨 드시고 남은 닭 뼈는 일반쓰레기로 버려주세요.",
    date: "2023.07.12",
  },
  {
    id: "2",
    category: "종이 · 종이팩",
    category_id: 2,
    title: "책",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n\n물이나 이물질을 묻지 않게 하고 구겨지지 않게 배출합니다.\n양장본 책은 겉표지(일반쓰레기)와 속지(종이)를 분리해서 배출합니다.",
    date: "2023.07.17",
  },
  {
    id: "3",
    category: "ETC",
    category_id: 10,
    title: "형광등",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n\n형광등은 반드시 아파트 단지내 또는 가까운 주민센터 등에 설치된 형광등 전용 수거함으로 버려주세요.\n\n만약 형광등이 깨졌다면 불연성 쓰레기 봉투에 담아 버려주시고, 깨진 형광등이 수거하는 사람을 다치게 할 수 있으니 쓰레기 봉투가 찢어지지 않게 신문지 등으로 잘 싸서 버려주세요.",
    date: "2023.07.21",
  },
  {
    id: "4",
    category: "플라스틱",
    category_id: 7,
    title: "화장품(스틱)",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n\n립스틱, 립밤, 선스틱은 냉동실에 2시간 이상 얼려두면 스틱과 스틱 안에 남아있는 내용물을 깔끔하게 분리할 수 있어요.\n남은 내용물(화장품)은 일반쓰레기(종량제봉투)로 버리고, 뚜껑과 용기(스틱)는 플라스틱 등 재질에 맞게 분리 배출해요.",
    date: "2023.07.26",
  },
];

export default ARTICLE_DATA;
