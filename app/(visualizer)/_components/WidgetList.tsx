import { Widget } from "./Widget";

function WidgetSubgroup() {
  return (
    <div className="w-full h-full flex flex-row items-center gap-6">
      <Widget />
      <Widget />
    </div>
  );
}

export function WidgetList() {
  return (
    <div className="w-full h-48 flex flex-row items-center justify-start gap-6">
      <Widget />
      <WidgetSubgroup />
    </div>
  );
}
