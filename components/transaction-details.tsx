import type { NextPage } from "next";

export type TransactionDetailsType = {
  className?: string;
};

const TransactionDetails: NextPage<TransactionDetailsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[1.75rem] max-w-full text-left text-[0.75rem] text-white font-montserrat mq975:flex-wrap ${className}`}
    >
      <div className="flex-1 rounded-3xs flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.937rem] box-border relative gap-[0.937rem] max-w-full mq700:min-w-full">
        <img
          className="self-stretch h-[56.063rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden z-[0]"
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
                      className="absolute top-[0.438rem] left-[0.313rem] w-[0.563rem] h-[0.375rem] object-cover z-[3]"
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
        <img
          className="w-[11.688rem] h-[10.813rem] absolute !m-[0] top-[-0.937rem] right-[4.688rem] rounded-3xs object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/screenshot-20240713-at-101729pm-1@2x.png"
        />
      </div>
      <div className="w-[25.188rem] rounded-3xs flex flex-col items-end justify-start pt-[3.25rem] px-[1.062rem] pb-[20.875rem] box-border relative gap-[1.437rem] min-w-[25.188rem] max-w-full z-[1] text-[1.563rem] mq700:min-w-full mq950:pt-[2.125rem] mq950:pb-[13.563rem] mq950:box-border mq450:pt-[1.375rem] mq450:pb-[8.813rem] mq450:box-border mq975:flex-1">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem]">
          <img
            className="h-[5.625rem] w-[5.438rem] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/muddashir-siddique-16-1@2x.png"
          />
        </div>
        <img
          className="w-[25.188rem] h-[53.875rem] relative rounded-3xs hidden max-w-full z-[1]"
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
        <div className="flex flex-row items-start justify-end py-[0rem] pr-[1rem] pl-[1.437rem] box-border max-w-full text-[0.75rem]">
          <div className="flex flex-row items-start justify-start gap-[2.062rem] max-w-full mq450:flex-wrap mq450:gap-[1rem]">
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
        <img
          className="w-[11.688rem] h-[10.813rem] absolute !m-[0] top-[-0.937rem] left-[-6rem] rounded-3xs object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/screenshot-20240713-at-101729pm-1@2x.png"
        />
      </div>
    </div>
  );
};

export default TransactionDetails;
