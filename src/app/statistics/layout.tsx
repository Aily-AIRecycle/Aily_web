import MyPageNavigation from "@/components/MyPage/MyPageNavigation";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

export const metadata = {
  title: "Aily - 통계",
};

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      {children}
      {/* </div> */}
      <Footer />
    </>
  );
}
