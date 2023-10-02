export type Article = {
  id: string;
  category: string;
  category_id: number;
  title: string;
  writer: string;
  content: string;
  date: string;
};

export const categoryType: Record<string, number> = {
  notice: 1,
  "q&a": 2,
  faq: 3,
  suggestion: 4,
};
