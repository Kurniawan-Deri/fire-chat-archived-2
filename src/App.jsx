import MessageField from "./components/MessageField";
import SidebarChat from "./components/SidebarChat";
import TopbarChat from "./components/TopbarChat";

export default function App() {
  return (
    <>
      <div class="grid grid-cols-12 gap-0">
        <div class="col-span-3 bg-white h-screen sticky top-0">
          <SidebarChat />
        </div>
        <div class="col-span-9 bg-gray-500">
          <MessageField blank={!true} />
        </div>
      </div>
    </>
  );
}
