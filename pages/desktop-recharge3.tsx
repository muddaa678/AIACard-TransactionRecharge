import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import TransactionsDetails from "../components/transactions-details";
import TransactionList from "../components/transaction-list";

const DesktopRecharge3: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] text-center text-[0.75rem] text-white font-montserrat mq950:pl-[1.25rem] mq950:box-border">
      <b className="relative hidden min-w-[4.875rem]">Last 30 days</b>
      <FrameComponent5 />
      <main className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] mq950:max-w-full">
        <form className="m-0 self-stretch flex flex-col items-start justify-start max-w-full">
          <TransactionsDetails />
          <div className="self-stretch h-[61.563rem] relative max-w-full mq450:h-auto mq450:min-h-[985]">
            <div className="absolute top-[1.688rem] left-[15.625rem] rounded-8xs box-border w-[7.188rem] flex flex-row items-start justify-start py-[0.375rem] px-[1.187rem] border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden z-[0] border-[2px] border-solid border-gray" />
              <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.563rem] z-[1]">
                Last 90 days
              </div>
              <div className="w-full !m-[0] absolute top-[-1.687rem] left-[-4.062rem] rounded-t-none rounded-b-8xs bg-black box-border flex flex-row items-start justify-start py-[0.5rem] px-[0.687rem] h-full z-[1] border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]">
                <div className="h-[2.063rem] w-[7.75rem] relative rounded-t-none rounded-b-8xs bg-black box-border hidden border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]" />
                <div className="relative text-[0.75rem] font-montserrat text-white text-left inline-block min-w-[4.75rem] z-[2]">
                  Transactions
                </div>
              </div>
            </div>
            <button className="cursor-pointer py-[0.375rem] pr-[0.437rem] pl-[0.625rem] bg-goldenrod absolute top-[1.438rem] left-[63.813rem] rounded-8xs box-border w-[7.188rem] flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-gray hover:bg-darkgoldenrod-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs bg-goldenrod box-border hidden border-[2px] border-solid border-gray" />
              <b className="relative text-[0.75rem] inline-block font-montserrat text-gray text-center min-w-[5.875rem] z-[1]">
                Download PDF
              </b>
            </button>
            <div className="absolute top-[1.688rem] left-[31.563rem] rounded-8xs bg-black box-border w-[7.188rem] flex flex-row items-start justify-start py-[0.375rem] px-[1.437rem] whitespace-nowrap border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs bg-black box-border hidden border-[2px] border-solid border-gray" />
              <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.063rem] z-[1]">{`01-02-2024 `}</div>
            </div>
            <div className="absolute top-[2.25rem] left-[39.25rem] text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[0.75rem]">
              to
            </div>
            <button className="cursor-pointer py-[0.375rem] px-[2rem] bg-[transparent] absolute top-[1.688rem] left-[23.438rem] rounded-8xs box-border w-[7.188rem] flex flex-row items-start justify-start border-[2px] border-solid border-goldenrod hover:bg-darkgoldenrod-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkgoldenrod-100">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-goldenrod" />
              <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[2.938rem] z-[1]">
                Custom
              </div>
            </button>
            <div className="absolute top-[5.5rem] left-[45.813rem] rounded-3xs box-border w-[25.188rem] flex flex-col items-start justify-start pt-[0.312rem] pb-[18.125rem] pr-[1.062rem] pl-[1.125rem] gap-[1rem] max-w-full z-[1] border-[0px] border-solid border-gray">
              <div className="w-[15.438rem] flex flex-row items-start justify-start pt-[0rem] px-[1.187rem] pb-[0.437rem] box-border">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[7.188rem] bg-black box-border flex flex-row items-start justify-start py-[0.562rem] px-[0.812rem] z-[3] border-r-[2px] border-solid border-gray border-l-[2px]">
                    <div className="h-[2.063rem] w-[7.188rem] relative bg-black box-border hidden border-r-[2px] border-solid border-gray border-l-[2px]" />
                    <div className="relative text-[0.75rem] font-light font-montserrat text-white text-left inline-block min-w-[4.063rem] z-[4]">
                      Processing
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0.437rem]">
                    <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch bg-black flex flex-row items-start justify-start py-[0.562rem] px-[0.812rem] z-[4] border-r-[2px] border-solid border-gray border-l-[2px]">
                          <div className="h-[2.063rem] w-[7.188rem] relative bg-black box-border hidden border-r-[2px] border-solid border-gray border-l-[2px]" />
                          <div className="relative text-[0.75rem] font-light font-montserrat text-white text-left inline-block min-w-[2.25rem] z-[5]">
                            Failed
                          </div>
                        </div>
                        <div className="self-stretch bg-black flex flex-row items-start justify-start py-[0.562rem] px-[0.812rem] z-[5] border-r-[2px] border-solid border-gray border-l-[2px]">
                          <div className="h-[2.063rem] w-[7.188rem] relative bg-black box-border hidden border-r-[2px] border-solid border-gray border-l-[2px]" />
                          <div className="relative text-[0.75rem] font-light font-montserrat text-white text-left inline-block min-w-[3.313rem] z-[6]">
                            Transfers
                          </div>
                        </div>
                        <div className="self-stretch rounded-t-none rounded-b-8xs bg-black flex flex-row items-start justify-start pt-[0.562rem] px-[0.812rem] pb-[0.375rem] z-[6] border-r-[2px] border-solid border-gray border-b-[2px] border-l-[2px]">
                          <div className="h-[2.063rem] w-[7.188rem] relative rounded-t-none rounded-b-8xs bg-black box-border hidden border-r-[2px] border-solid border-gray border-b-[2px] border-l-[2px]" />
                          <div className="relative text-[0.75rem] font-light font-montserrat text-white text-left inline-block min-w-[3.75rem] z-[7]">
                            Refunded
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-[5.625rem] w-[5.438rem] relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/muddashir-siddique-16-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <img
                className="w-[25.188rem] h-[53.875rem] relative rounded-3xs hidden max-w-full"
                alt=""
                src="/rectangle-34.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[0.437rem] pr-[1.25rem] pl-[1.312rem]">
                <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                  <b className="relative text-[1.563rem] font-montserrat text-white text-center mq450:text-[1.25rem]">
                    100,000 EUR
                  </b>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.625rem] pl-[2.562rem]">
                    <h2 className="m-0 relative text-[1.25rem] font-normal font-montserrat text-white text-center inline-block min-w-[5rem] mq450:text-[1rem]">
                      Success
                    </h2>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-gray box-border flex flex-row items-start justify-between py-[1rem] pr-[0.937rem] pl-[1rem] min-h-[14.25rem] max-w-full gap-[1.25rem] z-[2] border-[0px] border-solid border-gray mq450:flex-wrap mq450:justify-center">
                <img
                  className="h-[14.25rem] w-[23rem] relative rounded-3xs hidden max-w-full"
                  alt=""
                  src="/rectangle-35.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[0.75rem] min-w-[5.875rem] mq450:flex-1">
                  <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.187rem] pr-[0rem] pl-[0.062rem]">
                    <div className="relative text-[0.625rem] font-montserrat text-silver text-left inline-block min-w-[5.813rem] z-[1]">
                      Recharge Amount
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[0rem] px-[0.062rem] pb-[0.187rem]">
                    <div className="relative text-[0.625rem] font-montserrat text-silver text-left inline-block min-w-[4.813rem] z-[1]">
                      Actual Amount
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.187rem]">
                    <div className="relative text-[0.625rem] font-montserrat text-silver text-left inline-block min-w-[5.125rem] z-[1]">
                      Conversion Rate
                    </div>
                  </div>
                  <div className="relative text-[0.625rem] font-montserrat text-silver text-left inline-block min-w-[4.375rem] z-[1]">
                    Recharge Fee
                  </div>
                  <div className="relative text-[0.625rem] font-montserrat text-silver text-left inline-block min-w-[3.938rem] z-[1]">
                    Recharge ID
                  </div>
                  <div className="relative text-[0.625rem] font-montserrat text-silver text-left inline-block min-w-[4.75rem] z-[1]">
                    Recharge Time
                  </div>
                </div>
                <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[0.937rem] min-w-[8.938rem] mq450:flex-1">
                  <div className="relative text-[0.625rem] font-medium font-montserrat text-white text-right inline-block min-w-[4rem] z-[1]">
                    100,000 EUR
                  </div>
                  <div className="relative text-[0.625rem] font-medium font-montserrat text-white text-right inline-block min-w-[4.813rem] z-[1]">
                    99,997.23 USDT
                  </div>
                  <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                    <div className="relative text-[0.625rem] font-medium font-montserrat text-white text-right z-[1]">
                      1 USDT = 0.92096042 EUR
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.062rem] pl-[0rem]">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[0.531rem]">
                      <div className="relative text-[0.625rem] font-medium font-montserrat text-white text-right inline-block min-w-[2.875rem] z-[1]">
                        0.98 EUR
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.437rem]">
                        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                          <div className="relative text-[0.625rem] font-medium font-montserrat text-white text-right inline-block min-w-[7.125rem] z-[1]">
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
                      <div className="relative text-[0.625rem] font-medium font-montserrat text-white text-right inline-block min-w-[5.938rem] whitespace-nowrap z-[1]">
                        13-07-2024 16:05:23
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[7.438rem] flex flex-row items-start justify-start pt-[0rem] px-[0.125rem] pb-[0.5rem] box-border">
                <button className="cursor-pointer py-[0.375rem] pr-[0.437rem] pl-[0.625rem] bg-goldenrod flex-1 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[2px] border-solid border-gray hover:bg-darkgoldenrod-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100">
                  <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs bg-goldenrod box-border hidden border-[2px] border-solid border-gray" />
                  <b className="relative text-[0.75rem] inline-block font-montserrat text-gray text-center min-w-[5.875rem] z-[3]">
                    Download PDF
                  </b>
                </button>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[1.375rem] box-border max-w-full">
                <div className="flex flex-row items-start justify-center gap-[2.062rem] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-row items-start justify-start relative">
                      <div className="h-[3.25rem] w-[23rem] absolute !m-[0] top-[-1.187rem] right-[-9.75rem] rounded-8xs box-border border-[2px] border-solid border-gray" />
                      <b className="relative text-[0.75rem] font-montserrat text-white text-left z-[2]">
                        Need help with this recharge?
                      </b>
                    </div>
                  </div>
                  <div className="rounded-8xs bg-goldenrod flex flex-row items-start justify-start pt-[0.25rem] px-[0.562rem] pb-[0.187rem] whitespace-nowrap z-[2] border-[1px] border-solid border-goldenrod">
                    <div className="h-[1.438rem] w-[6.688rem] relative rounded-8xs bg-goldenrod box-border hidden border-[1px] border-solid border-goldenrod" />
                    <b className="relative text-[0.625rem] inline-block font-montserrat text-black text-left min-w-[5.438rem] z-[3]">
                      Contact Support
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[2.063rem] left-[0rem] w-[10.813rem] flex flex-row items-start justify-start">
              <div className="w-[7.188rem] !m-[0] absolute top-[-0.375rem] right-[-4.187rem] rounded-8xs box-border flex flex-row items-start justify-start py-[0.375rem] px-[1.187rem] border-[2px] border-solid border-gray">
                <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
                <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.563rem] z-[1]">
                  Last 60 days
                </div>
              </div>
              <div className="h-[2.063rem] w-[7.188rem] absolute !m-[0] top-[-0.375rem] left-[0rem] rounded-8xs bg-black box-border border-[1px] border-solid border-goldenrod" />
              <div className="flex-1 rounded-t-none rounded-b-8xs bg-black flex flex-row items-start justify-start pt-[0.562rem] px-[0.75rem] pb-[0.437rem] z-[2] border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]">
                <div className="h-[2.063rem] w-[10.813rem] relative rounded-t-none rounded-b-8xs bg-black box-border hidden border-r-[1px] border-solid border-goldenrod border-b-[1px] border-l-[1px]" />
                <input
                  className="w-[7.188rem] [border:none] [outline:none] font-montserrat text-[0.75rem] bg-[transparent] h-[0.938rem] relative text-white text-left inline-block p-0 z-[3]"
                  placeholder="Muddashir Savings"
                  type="text"
                />
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] bg-black box-border w-[10.813rem] flex flex-row items-start justify-start pt-[0.5rem] px-[0.75rem] pb-[0.625rem] whitespace-nowrap z-[3] border-r-[1px] border-solid border-goldenrod border-l-[1px]">
              <div className="h-[2.063rem] w-[10.813rem] relative bg-black box-border hidden border-r-[1px] border-solid border-goldenrod border-l-[1px]" />
              <div className="relative text-[0.75rem] font-montserrat text-white text-left inline-block min-w-[6.313rem] z-[4]">
                Muddashir Work
              </div>
            </div>
            <TransactionList
              screenshot20240713At841AlignSelf="unset"
              screenshot20240713At841Flex="unset"
              screenshot20240713At841Position="absolute"
              screenshot20240713At841Top="5.5rem"
              screenshot20240713At841Left="0rem"
              screenshot20240713At841Width="44.063rem"
            />
            <div className="absolute top-[1.688rem] left-[48.125rem] rounded-t-8xs rounded-b-none bg-black box-border w-[7.188rem] h-[2.063rem] border-t-[2px] border-solid border-gray border-r-[2px] border-l-[2px]">
              <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-black box-border w-full h-full hidden border-t-[2px] border-solid border-gray border-r-[2px] border-l-[2px]" />
              <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-gray w-full h-full whitespace-nowrap z-[1]">
                <div className="absolute top-[0rem] left-[0rem] rounded-t-8xs rounded-b-none bg-gray w-full h-full hidden" />
                <div className="absolute top-[0.563rem] left-[0.813rem] text-[0.75rem] font-light font-montserrat text-white text-left inline-block min-w-[4.313rem] z-[2]">
                  All Statuses
                </div>
              </div>
            </div>
            <div className="absolute top-[3.75rem] left-[48.125rem] bg-black box-border w-[7.188rem] flex flex-row items-start justify-start py-[0.562rem] px-[0.812rem] z-[2] border-r-[2px] border-solid border-gray border-l-[2px]">
              <div className="h-[2.063rem] w-[7.188rem] relative bg-black box-border hidden border-r-[2px] border-solid border-gray border-l-[2px]" />
              <div className="relative text-[0.75rem] font-light font-montserrat text-white text-left inline-block min-w-[4.188rem] z-[3]">
                Completed
              </div>
            </div>
            <div className="absolute top-[1.688rem] left-[40.438rem] rounded-8xs bg-black box-border w-[7.188rem] flex flex-row items-start justify-start py-[0.375rem] px-[1.437rem] whitespace-nowrap border-[2px] border-solid border-gray">
              <div className="h-[2.063rem] w-[7.188rem] relative rounded-8xs bg-black box-border hidden border-[2px] border-solid border-gray" />
              <div className="relative text-[0.75rem] font-light font-montserrat text-white text-center inline-block min-w-[4.063rem] z-[1]">{`01-02-2024 `}</div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default DesktopRecharge3;
