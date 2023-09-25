import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  id: string;
  title: string;
  category: string;
  writer: string;
  content: string;
  date: string;
}

interface ArticeState {
  article: Article[];
}

const initialArticeState: ArticeState = {
  article: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState: initialArticeState,
  reducers: {
    articleLoad(state: any, action: PayloadAction<Article>) {
      return {
        article: [
          {
            id: action.payload.id,
            title: action.payload.title,
            category: action.payload.category,
            writer: action.payload.writer,
            content: action.payload.content,
            date: action.payload.date,
          },
        ],
      };
    },
    clear() {
      return { article: [] };
    },
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;
