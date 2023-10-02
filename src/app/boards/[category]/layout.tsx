import BoardNavigation from "@/components/Board/BoardNavigation";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { menuData } from "@/components/Board/article";
import BoardHeader from "@/components/Board/BoardHeader";

export const metadata = {
  title: "Aily - 게시판",
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <BoardHeader title="AiLY의 모든 것" subTitle="무엇이든 물어보세요" />
      <BoardNavigation menuData={menuData} pathStart="boards" />
      {children}
      <Footer />
    </>
  );
}
