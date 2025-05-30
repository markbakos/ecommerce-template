'use client';

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import Link from "next/link"
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const router = useRouter();

    function handleSearch() {
        router.push(`/search/${searchQuery}`);
    }

    return (
        <div className="flex w-screen h-24 items-center justify-center bg-white border space-x-4 lg:space-x-6 shadow-md">
            <div className="w-[30vw] lg:w-[16vw]">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-blue-600 text-center lg:p-0">
                        The Market
                    </h1>
                </Link>
            </div>
            <div className="w-[50vw] flex items-center">
                <Input onChange={(e) => {setSearchQuery(e)}} className="w-full h-12 pl-12 lg:pl-3" />
                <div onClick={handleSearch} className="lg:hidden absolute m-1 w-8 h-8 border border-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <Search className="w-5 h-5 text-blue-600 relative" />
                </div>
            </div>
            <div className="hidden lg:flex">
                <Button variant="default" className="bg-white border w-32 text-blue-600 h-12 hover:bg-blue-600 hover:text-white cursor-pointer"> Search </Button>
            </div>
        </div>
    )
}