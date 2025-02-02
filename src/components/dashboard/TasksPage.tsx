import { IconExclamationCircle } from "@tabler/icons-react"
import { Star } from "lucide-react"
import Link from "next/link"

export const TasksPage = () => {
    return (
        <div className="bg-sidebar rounded-2xl p-6 mt-4 max-w-xl mx-auto">
            <p className="font-semibold text-2xl text-center">Token Holders</p>
            <p className="text-sm text-center text-gray-300 w-96 mt-2 mx-auto">Fetch a list of token holders for a particular token. Just input the contract address to start.
            ‍</p>
            <form>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className=" flex relative flex-col gap-3">
                        <label className="text-sm text-gray-300">Token Address</label>
                        <input type="text" placeholder="Mint Contact Address" className="placeholder:font-light placeholder:text-sm rounded-full border-0 focus:border focus:border-white focus:ring-0 focus:outline-none bg-[#151B2D] pl-10 py-2" />
                        <Star className="absolute h-4 w-4 left-4 top-11" />
                    </div>
                    <div className=" flex relative flex-col gap-3">
                        <label className="text-sm text-gray-300">Number of Makers (Min 10 Max 1000)</label>
                        <input type="text" placeholder="Markers required" className="placeholder:font-light placeholder:text-sm rounded-full border-0 focus:border focus:border-white focus:ring-0 focus:outline-none bg-[#151B2D] pl-10 py-2" />
                        <IconExclamationCircle className="absolute h-4 w-4 left-4 top-11" />
                    </div>
                    <div className=" flex relative flex-col gap-3">
                        <label className="text-sm text-gray-300">Offset</label>
                        <input type="text" placeholder="Offset Amount" className="placeholder:font-light placeholder:text-sm rounded-full border-0 focus:border focus:border-white focus:ring-0 focus:outline-none bg-[#151B2D] pl-10 py-2" />
                        <IconExclamationCircle className="absolute h-4 w-4 left-4 top-11" />
                    </div>
                </div>
                    <p className="text-green-500 text-center my-6">Total Cost: 0.25  SOL</p>
                    <label className="flex items-center gap-2 text-sm  text-gray-300" htmlFor="curve">
                        <input type="checkbox" id="curve" className="" />
                        Remove off curve wallets (recommended) Other filter options
                    </label>
                    <label className="flex items-center gap-2 mt-3 text-sm  text-gray-300" htmlFor="terms">
                        <input type="checkbox" id="terms" className="" />
                        I have read and agreed to the <Link href="terms" className="text-white underline">Terms & Conditions</Link>
                    </label>
                    <button className="text-white mt-4 bg-blue-600 rounded-full p-2 w-full text-sm">Pay Now</button>
            </form>
        </div>
    )
}