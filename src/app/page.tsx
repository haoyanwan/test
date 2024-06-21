// Import necessary components
import Image from "next/image";
import Textbox from "./component/textbox";
import Placeholder from "./component/placeholder";

export default function Home() {
  return (
    <div
      className="relative mx-5 my-5 bg-f5f5f5 rounded-2xl overflow-hidden"
      style={{
        height: "calc(100vh - 40px)", // Keep dynamic height calculation in inline style
        width: "calc(100% - 40px)", // Keep dynamic width calculation in inline style
      }}
    >
      {/* Left Container absolutely positioned */}
      <div
        className="absolute left-0 top-0 p-5 bg-white rounded-lg"
        style={{
          width: "49%",
          height: "calc(100% - 10px)", // Keep dynamic height calculation in inline style
        }}
      >
        {/* Nested Container for Textbox */}
        <div className="w-2/5 max-w-lg p-2.5 bg-white rounded-lg">
          <Textbox />
        </div>
      </div>

      {/* Right Container absolutely positioned */}
      <div
        className="absolute right-0 top-0 p-5 bg-white rounded-lg"
        style={{
          width: "49%",
          height: "calc(100% - 10px)", // Keep dynamic height calculation in inline style
        }}
      >
        {/* Placeholders for future graphical display */}
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  );
}
