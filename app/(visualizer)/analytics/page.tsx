import Navbar from "@/components/Navbar";
import { WidgetList } from "../_components/WidgetList";
import { IChildren } from "@/utils/types/children";
import LineGraph from "../_components/LineGraph";

function AnalyticsLayout({ children }: IChildren) {
  return (
    <div className="w-full min-h-screen flex-1 flex flex-col items-end justify-center gap-6 px-36 py-24">
      {children}
    </div>
  );
}

function page() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <AnalyticsLayout>
        <WidgetList />
        <LineGraph />
      </AnalyticsLayout>
    </main>
  );
}

export default page;
