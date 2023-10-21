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
      <div className="min-h-[500px]">{children}</div>
      <Footer />
    </>
  );
}
