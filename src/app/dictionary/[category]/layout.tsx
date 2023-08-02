import DictNavigation from "@/components/Dict/DictNavigation";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

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
      <DictNavigation />
      {children}
      <Footer />
    </>
  );
}
