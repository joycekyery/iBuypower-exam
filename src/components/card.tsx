"use client";

import Image from "next/image";
import affirmIcon from "@/asset/icon-affirm.svg";
interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className=" h-max w-[398px] shadow-[rgba(0,0,0,0.16)_0px_0px_20px] rounded-[15px] bg-white ">
      <div className=" p-5  flex flex-col items-start justify-start">
        <div className=" border-2 border-[##929292] p-1 rounded-xl w-max">
          <p className="text-left font-bold text-[10px] leading-tight tracking-normal text-[#929292]">
            Prebuilt PC
          </p>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27296/gaming-pc-01-Y60-001-Main-400-.png?v=b1b30b635f23fbb1776cfe0cdf7ec8343cafe604"
            alt="pc"
            width={230}
            height={230}
          />
        </div>
        <p className="text-left font-bold text-lg leading-tight tracking-normal text-black pb-8">
          Creator RDY Y40BG201
        </p>
        <ul className="flex flex-col items-start gap-1">
          {Array.from({ length: 5 }, () => 0).map((val, k) => {
            return (
              <li
                key={k}
                className="list-none whitespace-normal text-start text-xs xl:text-sm"
              >
                Windows 11 Pro
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" bg-[#F2F6FA] p-5 pt-2">
        <div className=" bg-[#FF1B1B] p-1 rounded-xl w-max">
          <p className="text-left text-xs leading-tight tracking-normal text-white px-1">
            SAVE $200
          </p>
        </div>
        <div className="flex flex-row justify-start items-end">
          <p className="text-left font-bold text-3xl leading-10 tracking-normal text-black pr-2">
            $1,799
          </p>
          <p className="text-left line-through font-normal text-base leading-6 tracking-normal text-[#929292]">
            $1,799
          </p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="text-left font-normal text-xs leading-5 tracking-normal">
            Starting at
            <span className="text-[#004CFF]">&nbsp;$172.07/mo&nbsp;</span>
            with
          </p>
          <Image alt="affirmIcon" src={affirmIcon} height={24} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <p className="text-left font-bold text-xs  tracking-normal">
              Free Shipping
            </p>
            <p className="text-left font-normal text-xs  tracking-normal">
              Delivery By Friday, Jul 7
            </p>
          </div>
          <button className="border border-solid border-[#FF1B1B] text-[#FF1B1B] hover:!bg-[#FF1B1B] hover:text-gray-50 hover:border-[#FF1B1B] rounded-full py-[0.5rem] px-5 ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
