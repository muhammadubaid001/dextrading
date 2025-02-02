"use client";

import { WalletButton } from "../solana/solana-provider";
import { CircleDollarSign, Eye, User } from "lucide-react";

import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

export default function DashboardFeature() {
  const options: any = {
    chart: {
      id: "chart2",
      type: "area",
      height: 20,
      foreColor: "#ffffff",
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    colors: ["#1967FF", '#A8B2D3'],
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    fill: {
      colors: "#ffffff",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      colors: ["#1967FF"],
      strokeColor: "#ffffff",
      strokeWidth: 2
    },
    series: [
      {
        data: [91, 70, 28, 61, 88, 109, 100],
         color: "#1967FF"
      }, {
        data: [31, 32, 45, 32, 140, 52, 41],
      color: "#A8B2D3"
      }
    ],
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      type: "string",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yaxis: {
      min: 0,
      tickAmount: 4
    }
  };
  
  
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-sidebar rounded-2xl h-96 flex flex-col gap-3 items-center justify-center">
        <p className="text-white font-semibold text-4xl">Dex Trending Tools</p>
        <p className="text-gray-300 font-light">A suite of tools.. more text</p>
        <WalletButton className="!bg-green-200 !rounded-full" />
        <p className="mt-6 font-light">Connect your wallet to start</p>
      </div>
      <div className="bg-sidebar rounded-2xl p-7">
        <div className="flex items-center">
          <div className="md:w-96">
            <p className="font-semibold text-white text-xl">DXT Token</p>
            <p className="text-gray-300 text-sm">
              Livew up to date information for $DXT
            </p>
          </div>
          <div className="h-14 w-14">
            <img src="/dxlogo.webp" className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="border-t border-gray-600/20 grid py-5 grid-cols-3 gap-3 md:divide-x divide-gray-600/20 mt-4">
          <div className="">
            <p className="text-2xl md:text-4xl text-white font-semibold">0.0232</p>
            <div className="flex gap-2 items-center mt-2">
              <Eye  className="text-gray-400 h-5 w-5"/>
              <p className="font-medium text-gray-400 whitespace-nowrap">Price USD</p>
            </div>
          </div>
          <div className="md:pl-12">
            <p className="text-2xl md:text-4xl text-white font-semibold">203.6K</p>
            <div className="flex gap-2 items-center mt-2">
              <User className="text-gray-400 h-5 w-5" />
              <p className="font-medium text-gray-400 whitespace-nowrap">Holders</p>
            </div>
          </div>
          <div className="md:pl-12">
            <p className="text-2xl md:text-4xl text-white font-semibold">0.0232</p>
            <div className="flex gap-2 items-center mt-2">
              <CircleDollarSign  className="text-gray-400 h-5 w-5" />
              <p className="font-medium text-gray-400 whitespace-nowrap">Price USD</p>
            </div>
          </div>
        </div>
         <DynamicComponentWithNoSSR  options={options} series={options.series} type="area" height={350} />
      </div>
    </div>
  );
}
