import MyPageNavigation from "@/components/MyPage/MyPageNavigation";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

export const metadata = {
  title: "Aily - 마이페이지",
};

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MyPageNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
}
