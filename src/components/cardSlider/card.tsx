"use client";

import Image from "next/image";
import affirmIcon from "@/asset/icon-affirm.svg";
interface CardProps {
  isMobile: boolean;
  pcType: string;
  productName: string;
  delivery: string;
  buyButtonText: string;
  spec: Array<string>;
  originalPrice: number;
  discountPrice: number;
  affirmPrice: number;
  pcImage: string;
}

const Card: React.FC<CardProps> = ({
  isMobile = false,
  pcType = "pcType",
  productName = "productName",
  delivery = "delivery",
  buyButtonText = "buyButtonText",
  spec = ["spec"],
  originalPrice = 0,
  discountPrice = 0,
  affirmPrice = 0,
  pcImage = "",
}) => {
  return (
    <div
      className={` shadow-[rgba(0,0,0,0.16)_0px_0px_20px] rounded-[15px] bg-white  ${
        isMobile ? "w-auto mr-[16px]" : "w-[320px]  md:w-auto md:mr-[16px]"
      }`}
    >
      <div className=" p-5  flex flex-col items-start justify-start">
        <div className=" border-2 border-[##929292] p-1 rounded-xl w-max">
          <p className="text-left font-bold text-[10px] leading-tight tracking-normal text-[#929292]">
            {pcType}
          </p>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src={pcImage}
            alt="pc"
            priority={true}
            width={230}
            height={230}
          />
        </div>
        <p className="text-left font-bold text-md leading-tight tracking-normal min-h-[48px] text-black">
          {productName}
        </p>
        <ul className="flex flex-col items-start gap-1">
          {spec.map((val, k) => {
            return (
              <li
                key={k}
                className="list-none whitespace-normal text-start text-xs xl:text-sm"
              >
                {val}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" bg-[#F2F6FA] p-5 pt-2">
        <div className=" bg-[#FF1B1B] p-1 rounded-xl w-max">
          <p className="text-left text-xs leading-tight tracking-normal text-white px-1">
            SAVE ${(originalPrice - discountPrice).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-row justify-start items-end">
          <p className="text-left font-bold text-3xl leading-10 tracking-normal text-black pr-2">
            ${discountPrice.toLocaleString()}
          </p>
          <p className="text-left line-through font-normal text-base leading-6 tracking-normal text-[#929292]">
            ${originalPrice.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="text-left font-normal text-xs leading-5 tracking-normal">
            Starting at
            <span className="text-[#004CFF]">
              &nbsp;$
              {affirmPrice.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
              /mo&nbsp;
            </span>
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
              {delivery}
            </p>
          </div>
          <button className="border border-solid border-[#FF1B1B] text-[#FF1B1B] hover:!bg-[#FF1B1B] hover:text-gray-50 hover:border-[#FF1B1B] rounded-full py-[0.5rem] px-5 ">
            {buyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
