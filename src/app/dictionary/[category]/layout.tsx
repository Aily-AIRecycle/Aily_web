import BoardNavigation from "@/components/Board/BoardNavigation";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { menuData } from "@/components/Board/item";
import BoardHeader from "@/components/Board/BoardHeader";

export const metadata = {
  title: "Aily - 재활용 사전",
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <BoardHeader
        title="재활용 사전"
        subTitle="헷갈리는 분리수거 다 알려드릴게요!"
      />
      <BoardNavigation menuData={menuData} pathStart="dictionary" />
      {children}
      <Footer />
    </>
  );
}
