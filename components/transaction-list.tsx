import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TransactionListType = {
  className?: string;

  /** Style props */
  screenshot20240713At841AlignSelf?: CSSProperties["alignSelf"];
  screenshot20240713At841Flex?: CSSProperties["flex"];
  screenshot20240713At841Position?: CSSProperties["position"];
  screenshot20240713At841Top?: CSSProperties["top"];
  screenshot20240713At841Left?: CSSProperties["left"];
  screenshot20240713At841Width?: CSSProperties["width"];
};

const TransactionList: NextPage<TransactionListType> = ({
  className = "",
  screenshot20240713At841AlignSelf,
  screenshot20240713At841Flex,
  screenshot20240713At841Position,
  screenshot20240713At841Top,
  screenshot20240713At841Left,
  screenshot20240713At841Width,
}) => {
  const transactionListStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: screenshot20240713At841AlignSelf,
      flex: screenshot20240713At841Flex,
      position: screenshot20240713At841Position,
      top: screenshot20240713At841Top,
      left: screenshot20240713At841Left,
      width: screenshot20240713At841Width,
    };
  }, [
    screenshot20240713At841AlignSelf,
    screenshot20240713At841Flex,
    screenshot20240713At841Position,
    screenshot20240713At841Top,
    screenshot20240713At841Left,
    screenshot20240713At841Width,
  ]);

  return (
    <div
      className={`self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.937rem] gap-[0.937rem] max-w-full text-left text-[0.75rem] text-white font-montserrat border-[0px] border-solid border-gray ${className}`}
      style={transactionListStyle}
    >
      <img
        className="self-stretch h-[56.063rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
        alt=""
        src="/rectangle-13.svg"
      />
      <div className="self-stretch rounded-3xs bg-gray box-border flex flex-row items-start justify-between py-[1.312rem] pr-[2.312rem] pl-[2.375rem] max-w-full gap-[1.25rem] z-[1] border-[0px] border-solid border-gray mq700:flex-wrap">
        <img
          className="h-[5.313rem] w-[44.063rem] relative rounded-3xs hidden max-w-full"
          alt=""
          src="/rectangle-17.svg"
        />
        <div className="w-[11.625rem] flex flex-row items-start justify-start gap-[3.125rem]">
          <img
            className="h-[2.688rem] w-[2.625rem] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/screenshot-20240713-at-84107pm-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="relative font-medium inline-block min-w-[5.813rem] z-[2]">
                99,997.23 USDT
              </div>
              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[2]">
                13-07-2024 16:05:23
              </div>
            </div>
          </div>
        </div>
        <div className="w-[14.438rem] flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border text-goldenrod">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="relative inline-block min-w-[4.125rem] z-[2]">
              Processing
            </div>
            <div className="relative font-medium text-white text-right inline-block min-w-[5.313rem] z-[2]">
              - 100,000 EUR
            </div>
          </div>
        </div>
      </div>
      <div className="w-[43.125rem] flex flex-row items-start justify-end py-[0rem] px-[1.437rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq700:gap-[0.938rem]">
          <div className="w-[38.75rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq700:flex-wrap">
            <img
              className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/screenshot-20240713-at-84107pm-1@2x.png"
            />
            <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
              <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  99.23 AIAT
                </div>
                <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                  13-07-2024 16:05:23
                </div>
              </div>
            </div>
            <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.75rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lime">
              <div className="relative inline-block min-w-[4.25rem] z-[1]">
                Completed
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] text-right">
              <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                - 6.90 EUR
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq700:gap-[0.938rem]">
            <div className="w-[38.75rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.875rem] z-[1]">
                    100,000.00 BTC
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.937rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-salmon">
                <div className="relative inline-block min-w-[2.313rem] z-[1]">
                  Failed
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.75rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.187rem] box-border gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.25rem] z-[1]">
                    99,997.23 ETH
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lightgray">
                <div className="relative inline-block min-w-[3.75rem] z-[1]">
                  Refunded
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.688rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.938rem] z-[1]">
                    99,997.23 USDC
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.688rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lime">
                <div className="relative inline-block min-w-[4.25rem] z-[1]">
                  Completed
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.75rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                    99.23 AIAT
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.75rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lime">
                <div className="relative inline-block min-w-[4.25rem] z-[1]">
                  Completed
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.75rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.875rem] z-[1]">
                    100,000.00 BTC
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.937rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-salmon">
                <div className="relative inline-block min-w-[2.313rem] z-[1]">
                  Failed
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.75rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.187rem] box-border gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.25rem] z-[1]">
                    99,997.23 ETH
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lightgray">
                <div className="relative inline-block min-w-[3.75rem] z-[1]">
                  Refunded
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.688rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.938rem] z-[1]">
                    99,997.23 USDC
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.688rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lime">
                <div className="relative inline-block min-w-[4.25rem] z-[1]">
                  Completed
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="w-[38.75rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.187rem] box-border gap-[1.25rem] max-w-full mq700:flex-wrap">
              <img
                className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/screenshot-20240713-at-84107pm-1@2x.png"
              />
              <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative font-medium inline-block min-w-[5.25rem] z-[1]">
                    99,997.23 ETH
                  </div>
                  <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                    13-07-2024 16:05:23
                  </div>
                </div>
              </div>
              <div className="w-[6.75rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lightgray">
                <div className="relative inline-block min-w-[3.75rem] z-[1]">
                  Refunded
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                  - 6.90 EUR
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[1.187rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.562rem] pl-[0rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                  <img
                    className="h-[2.688rem] w-[2.625rem] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/screenshot-20240713-at-84107pm-1@2x.png"
                  />
                  <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                    <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                      <div className="relative font-medium inline-block min-w-[5.938rem] z-[1]">
                        99,997.23 USDC
                      </div>
                      <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                        13-07-2024 16:05:23
                      </div>
                    </div>
                  </div>
                  <div className="w-[6.688rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lime">
                    <div className="relative inline-block min-w-[4.25rem] z-[1]">
                      Completed
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-right">
                    <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                      - 6.90 EUR
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[7.188rem] rounded-8xs box-border overflow-x-auto flex flex-row items-start justify-start pt-[0.187rem] pb-[0.312rem] pr-[0.625rem] pl-[0.687rem] gap-[0.656rem] z-[2] text-[0.5rem] border-[2px] border-solid border-gray">
                <div className="h-[1.188rem] w-[1.188rem] relative shrink-0">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
                  <img
                    className="absolute top-[0.438rem] left-[0.313rem] w-[0.563rem] h-[0.375rem] object-contain z-[3]"
                    alt=""
                    src="/muddashir-siddique-15-1@2x.png"
                  />
                </div>
                <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border shrink-0 hidden border-[2px] border-solid border-gray" />
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <div className="relative inline-block min-w-[1.938rem] z-[1]">
                    <b>1</b>
                    <span> 2 3 ... 9</span>
                  </div>
                </div>
                <div className="h-[1.188rem] w-[1.188rem] relative shrink-0">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
                  <img
                    className="absolute top-[0.438rem] left-[0.313rem] w-[0.563rem] h-[0.375rem] object-contain z-[3]"
                    alt=""
                    src="/muddashir-siddique-15-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
