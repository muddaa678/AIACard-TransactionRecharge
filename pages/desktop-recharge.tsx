import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import TransactionList from "../components/transaction-list";
import FrameComponent from "../components/frame-component";
import FrameComponent3 from "../components/frame-component3";

const DesktopRecharge: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] mq950:pl-[1.25rem] mq950:box-border">
      <FrameComponent2 prop="/331@2x.png" muddashirSiddique="/341@2x.png" />
      <main className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] mq950:max-w-full">
        <section className="self-stretch flex flex-row items-start justify-start gap-[1.75rem] max-w-full mq975:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.75rem] max-w-full mq700:min-w-full">
            <FrameComponent1 transactions="Recharge" />
            <TransactionList />
          </div>
          <div className="w-[25.188rem] flex flex-col items-end justify-start gap-[10.562rem] min-w-[25.188rem] max-w-full mq700:min-w-full mq450:gap-[5.25rem] mq975:flex-1">
            <FrameComponent />
            <FrameComponent3 />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesktopRecharge;
