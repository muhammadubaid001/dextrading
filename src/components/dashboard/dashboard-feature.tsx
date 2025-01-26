"use client";

import Link from "next/link";
import { WalletButton } from "../solana/solana-provider";

export default function DashboardFeature() {
  return (
    <div className="bg-sidebar rounded-2xl h-96 flex flex-col items-center justify-center">
        <WalletButton className='!bg-green-200 !rounded-full' />
     
    </div>
  );
}
