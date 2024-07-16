import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
  transactions?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  transactions,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[3.187rem] max-w-full text-left text-[2rem] text-white font-montserrat mq700:gap-[1.563rem] ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq950:text-[1.625rem] mq450:text-[1.188rem]">{`Transactions & Recharge`}</h1>
        <div className="relative text-[1rem]">
          View and manage your AIA Card transaction and recharge history.
        </div>
      </div>
      <div className="w-[30.625rem] flex flex-row items-end justify-start gap-[0.625rem] max-w-full text-[0.75rem] text-black mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.687rem] min-w-[14.813rem] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[0.687rem]">
            <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start py-[0.437rem] pr-[0.625rem] pl-[0.687rem] gap-[0.562rem] border-[1px] border-solid border-goldenrod">
              <div className="h-[2.063rem] w-[10.813rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
              <b className="relative inline-block min-w-[7.875rem] z-[1]">
                Muddashir Personal
              </b>
              <div className="w-[0.938rem] rounded-6xl bg-black flex flex-row items-start justify-start py-[0.062rem] px-[0.25rem] box-border z-[1] text-[0.688rem] text-goldenrod">
                <div className="h-[0.938rem] w-[0.938rem] relative rounded-6xl bg-black hidden" />
                <b className="relative [transform:_rotate(-180deg)] z-[1]">^</b>
              </div>
            </div>
            <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start py-[0.437rem] pr-[0.562rem] pl-[0.687rem] gap-[0.437rem] border-[1px] border-solid border-goldenrod">
              <div className="h-[2.063rem] w-[7.813rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
              <b className="relative inline-block min-w-[5.063rem] z-[1]">
                {transactions}
              </b>
              <div className="w-[0.938rem] rounded-6xl bg-black flex flex-row items-start justify-start py-[0.062rem] px-[0.25rem] box-border z-[1] text-[0.688rem] text-goldenrod">
                <div className="h-[0.938rem] w-[0.938rem] relative rounded-6xl bg-black hidden" />
                <b className="relative [transform:_rotate(-180deg)] z-[1]">^</b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem] text-center text-white mq450:flex-wrap">
            <button className="cursor-pointer py-[0.437rem] pr-[1rem] pl-[1.187rem] bg-black rounded-8xs flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-goldenrod hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs bg-black box-border hidden border-[1px] border-solid border-goldenrod" />
              <b className="relative text-[0.75rem] inline-block font-montserrat text-white text-center min-w-[4.875rem] z-[1]">
                Last 30 days
              </b>
            </button>
            <div className="flex-1 rounded-8xs box-border flex flex-row items-start justify-start py-[0.375rem] px-[1.187rem] min-w-[4.688rem] border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
              <div className="relative font-light inline-block min-w-[4.563rem] z-[1]">
                Last 60 days
              </div>
            </div>
            <div className="flex-1 rounded-8xs box-border flex flex-row items-start justify-start py-[0.375rem] px-[1.187rem] min-w-[4.688rem] border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
              <div className="relative font-light inline-block min-w-[4.563rem] z-[1]">
                Last 90 days
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-[0.375rem] px-[2rem] bg-[transparent] w-[7.188rem] rounded-8xs box-border flex flex-row items-start justify-start border-[2px] border-solid border-gray hover:bg-darkslategray-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100">
          <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
          <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[2.938rem] z-[1]">
            Custom
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
