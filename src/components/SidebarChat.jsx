import { Avatar, Dropdown } from "flowbite-react";
import { FiMoreVertical } from "react-icons/fi";

export default function SidebarChat() {
  return (
    <>
      <div>
        <div className="flex justify-between px-5 py-3 shadow-sm">
          <div className="flex items-center">
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <h1 className="text-xl font-bold ml-3">FIRE CHAT 🔥</h1>
          </div>

          <Dropdown
            arrowIcon={false}
            label={<FiMoreVertical className="text-xl" />}
            placement="right-start"
            color="normal"
            size="sm"
          >
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="p-2">
          <a
            href="/"
            className="flex items-center bg-red-600 text-white px-5 py-2 mb-1 rounded-lg"
          >
            <Avatar
              img="https://images.unsplash.com/photo-1508767618323-33eab6c1cac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              rounded={true}
            />
            <h1 className="text-lg font-semibold ml-3">Jessica Jane</h1>
          </a>
          <a
            href="/"
            className="flex items-center hover:bg-red-600 hover:text-white px-5 py-2 mb-1 rounded-lg"
          >
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              rounded={true}
            />
            <h1 className="text-lg font-semibold ml-3">Samatha Prindavan</h1>
          </a>
        </div>
      </div>
    </>
  );
}
