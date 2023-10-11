import Header from "@/components/UI/Header";
import BoardHeader from "@/components/Board/BoardHeader";
import Footer from "@/components/UI/Footer";
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
      {children}
      <Footer />
    </>
  );
}
