import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { House, FileChartColumnIncreasing, Star, Wrench, Settings } from 'lucide-react';


export default function Sidebar() {
  return (
    <div className="bg-sidebar rounded-2xl overflow-hidden shadow-sm h-full px-2 w-72">
      <div className="ml-5 mt-6 gap-2.5 items-center flex">
        <div className="h-8 w-8">
            <img src="/dxlogo.webp" className="h-full w-full object-contain" />
        </div>
        <p className="text-2xl">Dix Trading Tools</p>
      </div>
     <div className="px-4">
     <div className="relative mt-6 bg-[#151B2D] rounded-full p-1.5">
        <input type="text" placeholder="Search" className="pl-8 bg-transparent w-full font-light focus:outline-none focus:ring-0 text-sm" />
        <IconSearch className="size-4 absolute top-2.5 left-3" />
      </div>
     </div>
      <ul className="menu hover:rounded-2xl flex text-base text-gray-400 flex-col gap-3  mt-4 h-full ">
        <li className="">
          <a>
            <House className="size-5" />
            Home
          </a>
        </li>
        <li>
          <details>
            <summary>
            <Star className="size-5" />
              Dex Trending Tools
            </summary>
            <ul>
              <li>
                <a>Dex Makers</a>
              </li>
              <li>
                <a>Volume Creator</a>
              </li>
              <li>
                <a>Token Airdropper</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>
           <Wrench className="size-5" />
            Token Tools
          </a>
        </li>
        <li>
          <details>
            <summary>
                <FileChartColumnIncreasing className="size-5" />
                Documents
            </summary>
            <ul>
              <li>
                <a>How it works</a>
              </li>
              <li>
                <a>Whitepaper</a>
              </li>
              <li>
                <a>Tokenomics</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>
           <Settings className="size-5" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}
