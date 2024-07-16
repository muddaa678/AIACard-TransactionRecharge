import type { NextPage } from "next";
import TransactionList from "./transaction-list";
import FrameComponent3 from "./frame-component3";

export type TransactionList1Type = {
  className?: string;
};

const TransactionList1: NextPage<TransactionList1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[1.75rem] max-w-full mq975:flex-wrap ${className}`}
    >
      <TransactionList
        screenshot20240713At841AlignSelf="unset"
        screenshot20240713At841Flex="1"
        screenshot20240713At841Position="unset"
        screenshot20240713At841Top="unset"
        screenshot20240713At841Left="unset"
        screenshot20240713At841Width="unset"
      />
      <FrameComponent3
        propAlignSelf="unset"
        propWidth="25.188rem"
        propMinWidth="25.188rem"
      />
    </div>
  );
};

export default TransactionList1;
