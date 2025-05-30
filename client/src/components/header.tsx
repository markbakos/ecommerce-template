import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import Link from "next/link"

export default function Header() {


    return (
        <div className="flex w-screen h-24 items-center justify-center bg-white">
            <div className="w-[30vw] lg:w-[16vw]">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-blue-600 text-center pr-8 lg:p-0">
                        The Market
                    </h1>
                </Link>
            </div>
            <div className="w-[50vw] flex items-center">
                <Input className="w-full h-12 pl-12" />
                <div className="absolute m-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <Search className="w-5 h-5 text-white relative" />
                </div>
            </div>
        </div>
    )
}