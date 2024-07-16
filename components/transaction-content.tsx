import type { NextPage } from "next";
import FrameComponent4 from "./frame-component4";
import FrameComponent from "./frame-component";

export type TransactionContentType = {
  className?: string;
};

const TransactionContent: NextPage<TransactionContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.687rem] max-w-full text-center text-[0.75rem] text-white font-montserrat mq950:flex-col ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[0.468rem] min-w-[30.938rem] max-w-full mq700:flex-wrap mq700:min-w-full mq950:flex-[unset] mq950:self-stretch">
        <FrameComponent4 />
        <div className="flex flex-col items-start justify-start pt-[11.625rem] px-[0rem] pb-[0rem]">
          <div className="relative font-light inline-block min-w-[0.75rem]">
            to
          </div>
        </div>
        <div className="w-[7.188rem] flex flex-col items-start justify-start pt-[11.062rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch rounded-8xs flex flex-row items-start justify-start py-[0.375rem] px-[1.437rem] border-[2px] border-solid border-gray">
            <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
            <div className="relative font-light inline-block min-w-[4.063rem] z-[1]">{`01-02-2024 `}</div>
          </div>
        </div>
      </div>
      <div className="w-[7.688rem] flex flex-col items-start justify-start pt-[11.062rem] pb-[0rem] pr-[0.5rem] pl-[0rem] box-border">
        <div className="self-stretch rounded-8xs flex flex-row items-start justify-start py-[0.375rem] px-[0.812rem] border-[2px] border-solid border-gray">
          <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
          <input
            className="w-[4.313rem] [border:none] [outline:none] font-light font-montserrat text-[0.75rem] bg-[transparent] h-[0.938rem] relative text-white text-left inline-block p-0 z-[1] mq950:flex-1 mq950:min-w-full"
            placeholder="All Statuses"
            type="text"
          />
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default TransactionContent;
