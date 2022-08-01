import { FiMoreVertical } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { BiVideo } from "react-icons/bi";
import { Navbar, Avatar, Dropdown } from "flowbite-react";

export default function TopbarChat() {
  return (
    <>
      <Navbar fluid={true} rounded={false}>
        <a href="/">
          <div className="flex">
            <div className="mr-3">
              <Avatar
                alt="User settings"
                img="https://images.unsplash.com/photo-1508767618323-33eab6c1cac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                rounded={true}
              />
            </div>
            <h2 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Jessie Jane
            </h2>
          </div>
        </a>
        <div className="flex items-center md:order-2">
          <IoCallOutline className="hidden md:block text-xl hover:cursor-pointer mx-4" />
          <BiVideo className="hidden md:block text-2xl hover:cursor-pointer mx-4" />
          <Dropdown
            arrowIcon={false}
            label={<FiMoreVertical className="text-xl" />}
            placement="left-start"
            color="normal"
            size="sm"
          >
            <Dropdown.Item>View Contact</Dropdown.Item>
            <Dropdown.Item>Call</Dropdown.Item>
            <Dropdown.Item>Video Call</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}
