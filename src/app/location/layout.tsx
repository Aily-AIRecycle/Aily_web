import { Provider } from "react-redux";
import store from "@/store/index";

export const metadata = {
  title: "Aily - 위치",
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <><head></head>
      <>{children}</>
    </>
  );
}
