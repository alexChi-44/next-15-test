import Image from 'next/image';
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons"

export default function Sidebar() {
  return (
    <div className="w-80 bg-gray-100 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Image
            src="/vercel.svg"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">
                al Chi</h2>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
            <FaceIcon className="w-5 h-5 mr-2" />
            <span>Chats</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
            <ImageIcon className="w-5 h-5 mr-2" />
            <span>Profile</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}