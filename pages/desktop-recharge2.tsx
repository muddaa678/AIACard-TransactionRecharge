import type { NextPage } from "next";
import FrameComponent2 from "../components/frame-component2";
import TransactionsTitle from "../components/transactions-title";
import TransactionDetails from "../components/transaction-details";

const DesktopRecharge2: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] text-center text-[0.75rem] text-white font-montserrat mq950:pl-[1.25rem] mq950:box-border">
      <b className="relative hidden min-w-[4.875rem]">Last 30 days</b>
      <FrameComponent2 prop="/331@2x.png" muddashirSiddique="/341@2x.png" />
      <main className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_264px)] mq950:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
          <TransactionsTitle />
          <TransactionDetails />
        </section>
      </main>
    </div>
  );
};

export default DesktopRecharge2;
