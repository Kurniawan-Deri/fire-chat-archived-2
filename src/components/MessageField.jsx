import TopbarChat from "./TopbarChat";
import { TextInput } from "flowbite-react";

export default function MessageField({
  wallpaper = "url(https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80)",
  blank = false,
}) {
  return (
    <>
      {!blank && (
        <div className="sticky top-0 z-10 bg-white">
          <TopbarChat />
        </div>
      )}
      <div
        className="bg-gray-100 h-screen"
        style={{
          backgroundImage: wallpaper,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-2 pb-20">
          <ul className="grid grid-cols-1">
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Hello Deri, how are you?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-end bg-green-200 p-2 my-2 rounded-br-xl rounded-l-xl">
              <p>
                I&apos;m fine, thank you.{" "}
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500 inline-flex">
                    20:31
                  </span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
            <li className="place-self-start bg-white p-2 my-2 rounded-bl-xl rounded-r-xl">
              <p>
                Do you want some coffee?
                <sub className="ml-2 select-none right-0">
                  <span className="text-xs text-gray-500">20:30</span>
                </sub>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[74vw]">
        <div className="p-2 bg-gray-200">
          <TextInput type="text" />
        </div>
      </div>
    </>
  );
}
