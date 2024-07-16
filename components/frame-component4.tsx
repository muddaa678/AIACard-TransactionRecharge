import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[3.187rem] min-w-[25.188rem] max-w-full text-left text-[2rem] text-white font-montserrat mq700:gap-[1.563rem] mq700:min-w-full ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[0.437rem] max-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq950:text-[1.625rem] mq450:text-[1.188rem]">{`Transactions & Recharge`}</h1>
        <div className="relative text-[1rem]">
          View and manage your AIA Card transaction and recharge history.
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-row items-start justify-start gap-[0.812rem] mq700:flex-wrap">
        <div className="w-[10.813rem] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t-8xs rounded-b-none bg-gray flex flex-row items-start justify-start pt-[0.437rem] px-[0.75rem] pb-[0.562rem] border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]">
            <div className="h-[2.063rem] w-[10.813rem] relative rounded-t-8xs rounded-b-none bg-gray box-border hidden border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]" />
            <input
              className="w-[7.563rem] [border:none] [outline:none] font-montserrat text-[0.75rem] bg-[transparent] h-[0.938rem] relative text-white text-left inline-block p-0 z-[1] mq950:flex-1 mq950:min-w-full"
              placeholder="Muddashir Personal"
              type="text"
            />
          </div>
          <div className="self-stretch bg-black flex flex-row items-start justify-start pt-[0.5rem] px-[0.75rem] pb-[0.625rem] whitespace-nowrap z-[3] border-r-[1px] border-solid border-goldenrod border-l-[1px]">
            <div className="h-[2.063rem] w-[10.813rem] relative bg-black box-border hidden border-r-[1px] border-solid border-goldenrod border-l-[1px]" />
            <div className="relative text-[0.75rem] font-montserrat text-white text-left inline-block min-w-[6.313rem] z-[4]">
              Muddashir Work
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="h-[2.063rem] w-[7.188rem] absolute !m-[0] top-[-0.375rem] left-[0rem] rounded-8xs bg-black box-border border-[1px] border-solid border-goldenrod" />
            <div className="flex-1 rounded-t-none rounded-b-8xs bg-black flex flex-row items-start justify-start pt-[0.562rem] px-[0.75rem] pb-[0.437rem] z-[2] border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]">
              <div className="h-[2.063rem] w-[10.813rem] relative rounded-t-none rounded-b-8xs bg-black box-border hidden border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]" />
              <input
                className="w-[7.188rem] [border:none] [outline:none] font-montserrat text-[0.75rem] bg-[transparent] h-[0.938rem] relative text-white text-left inline-block p-0 z-[3] mq950:flex-1 mq950:min-w-full"
                placeholder="Muddashir Savings"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.687rem] min-w-[12.438rem]">
          <div className="w-[7.813rem] h-[2.063rem] relative rounded-t-8xs rounded-b-none bg-black box-border border-t-[1px] border-solid border-gray border-r-[1px] border-l-[1px]">
            <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-black box-border w-full h-full hidden border-t-[1px] border-solid border-gray border-r-[1px] border-l-[1px]" />
            <div className="absolute top-[0rem] left-[0.063rem] rounded-t-8xs rounded-b-none bg-gray box-border w-full h-full z-[2] border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]">
              <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-gray box-border w-full h-full hidden border-t-[1px] border-solid border-goldenrod border-r-[1px] border-l-[1px]" />
              <div className="absolute top-[0.563rem] left-[0.688rem] text-[0.75rem] font-montserrat text-white text-left inline-block min-w-[3.625rem] z-[3]">
                Recharge
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="w-[7.188rem] !m-[0] absolute h-full top-[0rem] bottom-[0rem] left-[-3.687rem] rounded-8xs box-border flex flex-row items-start justify-start py-[0.375rem] px-[1.187rem] border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
              <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.563rem] z-[1]">
                Last 60 days
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-end">
              <div className="w-[16.25rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[0.625rem]">
                <div className="flex-1 rounded-8xs flex flex-row items-start justify-start py-[0.375rem] px-[1.187rem] border-[2px] border-solid border-gray">
                  <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
                  <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.563rem] z-[1]">
                    Last 90 days
                  </div>
                </div>
                <button className="cursor-pointer py-[0.375rem] px-[2rem] bg-[transparent] flex-[0.6438] rounded-8xs flex flex-row items-start justify-start border-[2px] border-solid border-goldenrod hover:bg-darkgoldenrod-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkgoldenrod-100 mq950:text-center mq950:flex-1 mq950:min-w-[115]">
                  <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-goldenrod" />
                  <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[2.938rem] z-[1]">
                    Custom
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[7.75rem] !m-[0] absolute top-[-1.687rem] left-[0.063rem] rounded-t-none rounded-b-8xs bg-black box-border flex flex-row items-start justify-start py-[0.5rem] px-[0.687rem] z-[1] border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]">
              <div className="h-[2.063rem] w-[7.75rem] relative rounded-t-none rounded-b-8xs bg-black box-border hidden border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]" />
              <div className="relative text-[0.75rem] font-montserrat text-white text-left inline-block min-w-[4.75rem] z-[2]">
                Transactions
              </div>
            </div>
          </div>
        </div>
        <div className="w-[7.188rem] flex flex-col items-start justify-start pt-[3.75rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch rounded-8xs flex flex-row items-start justify-start py-[0.375rem] px-[1.437rem] border-[2px] border-solid border-gray">
            <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
            <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.063rem] z-[1]">{`01-02-2024 `}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent4;
