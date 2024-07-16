import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const DesktopTransactions: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] mq950:pl-[1.25rem] mq950:box-border">
      <FrameComponent2 prop="/33@2x.png" muddashirSiddique="/34@2x.png" />
      <main className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] mq950:max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start gap-[1.75rem] max-w-full text-left text-[0.75rem] text-white font-montserrat mq975:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.75rem] max-w-full mq700:min-w-full">
            <FrameComponent1 transactions="Transactions" />
            <div className="self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[0.125rem] px-[0rem] pb-[0.937rem] gap-[0.875rem] max-w-full border-[0px] border-solid border-gray">
              <img
                className="self-stretch h-[56.063rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                alt=""
                src="/rectangle-13.svg"
              />
              <div className="self-stretch rounded-3xs bg-gray box-border flex flex-row items-start justify-between pt-[1.375rem] pb-[1.318rem] pr-[2.25rem] pl-[2.375rem] max-w-full gap-[1.25rem] z-[1] border-[0px] border-solid border-gray mq700:flex-wrap">
                <img
                  className="h-[5.313rem] w-[44.063rem] relative rounded-3xs hidden max-w-full"
                  alt=""
                  src="/rectangle-17.svg"
                />
                <img
                  className="h-[2.619rem] w-[2.619rem] relative object-cover min-h-[2.625rem] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240713-at-64039pm-1@2x.png"
                />
                <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                  <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                    <div className="relative font-medium z-[2]">
                      CAPITAL CLUB LIMITED DXB ARE
                    </div>
                    <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[2]">
                      13-07-2024 16:05:23
                    </div>
                  </div>
                </div>
                <div className="w-[5.931rem] flex flex-col items-start justify-start pt-[0.812rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-goldenrod">
                  <div className="relative inline-block min-w-[4.125rem] z-[2]">
                    Processing
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.312rem] text-right">
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                    <div className="relative font-medium inline-block min-w-[5.313rem] z-[2]">
                      - 100,000 EUR
                    </div>
                  </div>
                  <div className="rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[2] text-[0.625rem] border-[0px] border-solid border-gray">
                    <img
                      className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                      alt=""
                      src="/rectangle-18.svg"
                    />
                    <div className="relative font-light inline-block min-w-[3.938rem] z-[3]">
                      367,000 AED
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[43.188rem] flex flex-row items-start justify-end py-[0rem] px-[1.437rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[2.137rem] max-w-full mq700:gap-[1.063rem]">
                  <div className="w-[39.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="w-[20.125rem] flex flex-row items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border gap-[3.131rem] max-w-full mq450:flex-wrap mq450:gap-[1.563rem]">
                        <img
                          className="h-[2.619rem] w-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                          <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                            <div className="relative font-medium z-[1]">
                              CAPITAL CLUB LIMITED DXB ARE
                            </div>
                            <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                              13-07-2024 16:05:23
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] text-lime">
                        <div className="relative inline-block min-w-[4.25rem] z-[1]">
                          Completed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[2.619rem] h-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                      </div>
                      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="relative font-medium z-[1]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                            13-07-2024 16:05:23
                          </div>
                        </div>
                      </div>
                      <div className="w-[5.994rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-salmon">
                        <div className="relative inline-block min-w-[2.313rem] z-[1]">
                          Failed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[2.619rem] h-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                      </div>
                      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="relative font-medium z-[1]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                            13-07-2024 16:05:23
                          </div>
                        </div>
                      </div>
                      <div className="w-[5.994rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-lightgray">
                        <div className="relative inline-block min-w-[3.75rem] z-[1]">
                          Refunded
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.5rem] flex flex-col items-start justify-start gap-[1.693rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                        <div className="w-[20.125rem] flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[1.687rem] pl-[0rem] box-border max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                            <img
                              className="h-[2.619rem] w-[2.619rem] relative object-cover z-[1]"
                              loading="lazy"
                              alt=""
                              src="/screenshot-20240713-at-64039pm-1@2x.png"
                            />
                            <div className="w-[12.688rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                              <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                                <div className="relative font-medium z-[1]">
                                  CAPITAL CLUB LIMITED DXB ARE
                                </div>
                                <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                                  13-07-2024 16:05:23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-lime">
                          <div className="relative inline-block min-w-[4.25rem] z-[1]">
                            Completed
                          </div>
                        </div>
                        <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                            <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                              - 6.90 EUR
                            </div>
                          </div>
                          <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                            <img
                              className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                              alt=""
                              src="/rectangle-18.svg"
                            />
                            <div className="flex-1 relative font-light z-[2]">
                              25 AED
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq700:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[2.619rem] h-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                      </div>
                      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="relative font-medium z-[1]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                            13-07-2024 16:05:23
                          </div>
                        </div>
                      </div>
                      <div className="w-[5.931rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-darkturquoise">
                        <div className="relative inline-block min-w-[3.063rem] z-[1]">
                          Transfer
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="w-[20.125rem] flex flex-row items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border gap-[3.131rem] max-w-full mq450:flex-wrap mq450:gap-[1.563rem]">
                        <img
                          className="h-[2.619rem] w-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                          <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                            <div className="relative font-medium z-[1]">
                              CAPITAL CLUB LIMITED DXB ARE
                            </div>
                            <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                              13-07-2024 16:05:23
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] text-lime">
                        <div className="relative inline-block min-w-[4.25rem] z-[1]">
                          Completed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[2.619rem] h-[2.619rem] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/screenshot-20240713-at-64039pm-1@2x.png"
                        />
                      </div>
                      <div className="w-[16.056rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="relative font-medium z-[1]">
                            CAPITAL CLUB LIMITED DXB ARE
                          </div>
                          <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                            13-07-2024 16:05:23
                          </div>
                        </div>
                      </div>
                      <div className="w-[5.994rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border text-salmon">
                        <div className="relative inline-block min-w-[2.313rem] z-[1]">
                          Failed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="w-[19.563rem] flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[1.125rem] pl-[0rem] box-border">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                          <img
                            className="h-[2.619rem] w-[2.619rem] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/screenshot-20240713-at-64039pm-1@2x.png"
                          />
                          <div className="w-[12.688rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                              <div className="relative font-medium z-[1]">
                                CAPITAL CLUB LIMITED DXB ARE
                              </div>
                              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                                13-07-2024 16:05:23
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-lightgray">
                        <div className="relative inline-block min-w-[3.75rem] z-[1]">
                          Refunded
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.693rem] max-w-full">
                    <div className="w-[39.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                        <div className="w-[20.125rem] flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[1.687rem] pl-[0rem] box-border max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                            <img
                              className="h-[2.619rem] w-[2.619rem] relative object-cover z-[1]"
                              loading="lazy"
                              alt=""
                              src="/screenshot-20240713-at-64039pm-1@2x.png"
                            />
                            <div className="w-[12.688rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                              <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                                <div className="relative font-medium z-[1]">
                                  CAPITAL CLUB LIMITED DXB ARE
                                </div>
                                <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                                  13-07-2024 16:05:23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-lime">
                          <div className="relative inline-block min-w-[4.25rem] z-[1]">
                            Completed
                          </div>
                        </div>
                        <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                            <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                              - 6.90 EUR
                            </div>
                          </div>
                          <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                            <img
                              className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                              alt=""
                              src="/rectangle-18.svg"
                            />
                            <div className="flex-1 relative font-light z-[2]">
                              25 AED
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[39.438rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq700:flex-wrap">
                      <div className="w-[20.125rem] flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[1.687rem] pl-[0rem] box-border max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                          <img
                            className="h-[2.619rem] w-[2.619rem] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/screenshot-20240713-at-64039pm-1@2x.png"
                          />
                          <div className="w-[12.688rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                              <div className="relative font-medium z-[1]">
                                CAPITAL CLUB LIMITED DXB ARE
                              </div>
                              <div className="relative text-[0.625rem] inline-block min-w-[5.875rem] whitespace-nowrap z-[1]">
                                13-07-2024 16:05:23
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] text-lime">
                        <div className="relative inline-block min-w-[4.25rem] z-[1]">
                          Completed
                        </div>
                      </div>
                      <div className="w-[5.438rem] flex flex-col items-start justify-start gap-[0.312rem] text-right">
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                          <div className="relative font-medium inline-block min-w-[3.938rem] z-[1]">
                            - 6.90 EUR
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs bg-darkslategray-300 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.312rem] whitespace-nowrap z-[1] text-center text-[0.625rem] border-[0px] border-solid border-gray">
                          <img
                            className="h-[1.313rem] w-[5.438rem] relative rounded-3xs hidden"
                            alt=""
                            src="/rectangle-18.svg"
                          />
                          <div className="flex-1 relative font-light z-[2]">
                            25 AED
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end text-[0.5rem]">
                      <div className="w-[7.188rem] rounded-8xs box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-[0.187rem] pb-[0.312rem] pr-[0.625rem] pl-[0.687rem] gap-[0.656rem] z-[2] border-[2px] border-solid border-gray">
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
          </div>
          <div className="w-[25.188rem] flex flex-col items-end justify-start gap-[10.562rem] min-w-[25.188rem] max-w-full text-[1.563rem] mq700:min-w-full mq450:gap-[5.25rem] mq975:flex-1">
            <FrameComponent />
            <div className="self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[3.25rem] px-[1.062rem] pb-[20.875rem] gap-[1.437rem] max-w-full z-[1] border-[0px] border-solid border-gray mq950:pt-[2.125rem] mq950:pb-[13.563rem] mq950:box-border mq450:pt-[1.375rem] mq450:pb-[8.813rem] mq450:box-border">
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
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] text-center">
                <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                  <b className="relative whitespace-nowrap mq450:text-[1.25rem]">
                    367,000 AED
                  </b>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[2.687rem] text-[1.25rem]">
                    <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5rem] mq450:text-[1rem]">
                      Success
                    </h2>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.375rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-[0.625rem] text-silver">
                <div className="flex-1 rounded-3xs bg-gray box-border flex flex-col items-start justify-start pt-[1rem] pb-[1.812rem] pr-[0.937rem] pl-[1rem] gap-[0.937rem] max-w-full z-[2] border-[0px] border-solid border-gray">
                  <img
                    className="w-[23rem] h-[14.25rem] relative rounded-3xs hidden max-w-full"
                    alt=""
                    src="/rectangle-35.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                        <div className="relative inline-block min-w-[4.875rem] z-[1]">
                          Business Name
                        </div>
                        <div className="relative inline-block min-w-[1.5rem] z-[1]">
                          Type
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start gap-[0.937rem] text-right text-white">
                        <div className="relative font-medium z-[1]">
                          CAPITAL CLUB LIMITED DXB ARE
                        </div>
                        <div className="relative font-medium inline-block min-w-[2.938rem] z-[1]">
                          Payment
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                      <div className="relative inline-block min-w-[2.875rem] z-[1]">
                        Currency
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[1.218rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                          <div className="relative inline-block min-w-[4.813rem] z-[1]">
                            Billing Amount
                          </div>
                          <div className="relative inline-block min-w-[5.125rem] z-[1]">
                            Conversion Rate
                          </div>
                        </div>
                        <div className="relative inline-block min-w-[4.5rem] z-[1]">
                          Transaction ID
                        </div>
                        <div className="relative inline-block min-w-[5.375rem] z-[1]">
                          Transaction Time
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start gap-[0.937rem] text-right text-white">
                      <div className="relative font-medium inline-block min-w-[1.375rem] z-[1]">
                        EUR
                      </div>
                      <div className="relative font-medium inline-block min-w-[0.938rem] z-[1]">
                        6.9
                      </div>
                      <div className="relative font-medium inline-block min-w-[5.688rem] z-[1]">
                        1 AED = 0.252 EUR
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
                            className="absolute top-[0.375rem] left-[0.375rem] w-[0.563rem] h-[0.625rem] object-contain z-[1]"
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
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1rem] pl-[1.437rem] box-border max-w-full text-[0.75rem]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[1.125rem] max-w-full mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[8.313rem]">
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <div className="h-[3.25rem] w-[23rem] absolute !m-[0] top-[-1.187rem] right-[-8.812rem] rounded-8xs box-border border-[2px] border-solid border-gray" />
                      <b className="relative z-[2]">
                        Need help with this transaction?
                      </b>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesktopTransactions;
