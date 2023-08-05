import BoardNavigation from "@/components/Board/BoardNavigation";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

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
      <BoardNavigation />
      {children}
      <Footer />
    </>
  );
}
