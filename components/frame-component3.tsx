import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[3.25rem] px-[1.062rem] pb-[20.875rem] gap-[1.437rem] max-w-full z-[1] text-left text-[1.563rem] text-white font-montserrat border-[0px] border-solid border-gray mq950:pt-[2.125rem] mq950:pb-[13.563rem] mq950:box-border mq450:pt-[1.375rem] mq450:pb-[8.813rem] mq450:box-border ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem]">
        <img
          className="h-[5.625rem] w-[5.438rem] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/muddashir-siddique-16-1@2x.png"
        />
      </div>
      <img
        className="w-[25.188rem] h-[53.875rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-34.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem] text-center">
        <div className="flex flex-col items-start justify-start gap-[0.375rem]">
          <b className="relative mq450:text-[1.25rem]">100,000 EUR</b>
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.625rem] pl-[2.562rem] text-[1.25rem]">
            <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5rem] mq450:text-[1rem]">
              Success
            </h2>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.375rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-[0.625rem] text-silver">
        <div className="flex-1 rounded-3xs bg-gray box-border flex flex-row items-start justify-between py-[1rem] pr-[0.937rem] pl-[1rem] min-h-[14.25rem] max-w-full gap-[1.25rem] z-[2] border-[0px] border-solid border-gray mq450:flex-wrap mq450:justify-center">
          <img
            className="h-[14.25rem] w-[23rem] relative rounded-3xs hidden max-w-full"
            alt=""
            src="/rectangle-35.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[0.75rem] min-w-[5.875rem] mq450:flex-1">
            <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.187rem] pr-[0rem] pl-[0.062rem]">
              <div className="relative inline-block min-w-[5.813rem] z-[1]">
                Recharge Amount
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.062rem] pb-[0.187rem]">
              <div className="relative inline-block min-w-[4.813rem] z-[1]">
                Actual Amount
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.187rem]">
              <div className="relative inline-block min-w-[5.125rem] z-[1]">
                Conversion Rate
              </div>
            </div>
            <div className="relative inline-block min-w-[4.375rem] z-[1]">
              Recharge Fee
            </div>
            <div className="relative inline-block min-w-[3.938rem] z-[1]">
              Recharge ID
            </div>
            <div className="relative inline-block min-w-[4.75rem] z-[1]">
              Recharge Time
            </div>
          </div>
          <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[0.937rem] min-w-[8.938rem] text-right text-white mq450:flex-1">
            <div className="relative font-medium inline-block min-w-[4rem] z-[1]">
              100,000 EUR
            </div>
            <div className="relative font-medium inline-block min-w-[4.813rem] z-[1]">
              99,997.23 USDT
            </div>
            <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
              <div className="relative font-medium z-[1]">
                1 USDT = 0.92096042 EUR
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.062rem] pl-[0rem]">
              <div className="flex-1 flex flex-col items-end justify-start gap-[0.531rem]">
                <div className="relative font-medium inline-block min-w-[2.875rem] z-[1]">
                  0.98 EUR
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.437rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                    <div className="relative font-medium inline-block min-w-[7.125rem] z-[1]">
                      1260942952960757760
                    </div>
                  </div>
                  <div className="h-[1.313rem] w-[1.313rem] relative z-[1]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-black w-full h-full" />
                    <img
                      className="absolute top-[0.375rem] left-[0.375rem] w-[0.563rem] h-[0.625rem] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/muddashir-siddique-11-1@2x.png"
                    />
                  </div>
                </div>
                <div className="relative font-medium inline-block min-w-[5.938rem] whitespace-nowrap z-[1]">
                  13-07-2024 16:05:23
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1rem] pl-[1.437rem] box-border max-w-full text-[0.75rem]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[2.062rem] max-w-full mq450:flex-wrap mq450:gap-[1rem]">
          <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start relative">
              <div className="h-[3.25rem] w-[23rem] absolute !m-[0] top-[-1.187rem] right-[-9.75rem] rounded-8xs box-border border-[2px] border-solid border-gray" />
              <b className="relative z-[2]">Need help with this recharge?</b>
            </div>
          </div>
          <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start pt-[0.25rem] px-[0.562rem] pb-[0.187rem] whitespace-nowrap z-[2] text-[0.625rem] text-black border-[1px] border-solid border-goldenrod">
            <div className="h-[1.438rem] w-[6.688rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
            <b className="relative inline-block min-w-[5.438rem] z-[3]">
              Contact Support
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
