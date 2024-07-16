import type { NextPage } from "next";
import FrameComponent from "./frame-component";

export type TransactionsDetailsType = {
  className?: string;
};

const TransactionsDetails: NextPage<TransactionsDetailsType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[2rem] text-white font-montserrat ${className}`}
    >
      <div className="w-[33rem] flex flex-col items-start justify-start gap-[3.187rem] max-w-full mq700:gap-[1.563rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block whitespace-nowrap max-w-full">{`Transactions & Recharge`}</h1>
          <div className="relative text-[1rem] whitespace-nowrap">
            View and manage your AIA Card transaction and recharge history.
          </div>
        </div>
        <div className="w-[19.313rem] flex flex-row items-start justify-start gap-[0.687rem] text-[0.75rem]">
          <div className="flex-1 rounded-t-8xs rounded-b-none bg-gray flex flex-row items-start justify-start pt-[0.437rem] px-[0.75rem] pb-[0.562rem] border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]">
            <div className="h-[2.063rem] w-[10.813rem] relative rounded-t-8xs rounded-b-none bg-gray box-border hidden border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]" />
            <input
              className="w-[7.563rem] [border:none] [outline:none] font-montserrat text-[0.75rem] bg-[transparent] h-[0.938rem] relative text-white text-left inline-block whitespace-nowrap p-0 z-[1]"
              placeholder="Muddashir Personal"
              type="text"
            />
          </div>
          <div className="h-[2.063rem] w-[7.813rem] relative rounded-t-8xs rounded-b-none bg-black box-border border-t-[1px] border-solid border-gray border-r-[1px] border-l-[1px]">
            <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-black box-border w-full h-full hidden border-t-[1px] border-solid border-gray border-r-[1px] border-l-[1px]" />
            <div className="absolute top-[0rem] left-[0.063rem] rounded-t-8xs rounded-b-none bg-gray box-border w-full h-full z-[2] border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]">
              <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-gray box-border w-full h-full hidden border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]" />
              <div className="absolute top-[0.563rem] left-[0.688rem] inline-block min-w-[3.625rem] z-[3]">
                Recharge
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
    </header>
  );
};

export default TransactionsDetails;
