'use client';

import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import Link from "next/link"
import axios from "axios";
import {useState} from "react";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    async function handleSearch() {
        const response = await axios.get(`http://localhost:3002/api/products/search?search=${searchQuery}`)
        console.log(response)
    }

    return (
        <div className="flex w-screen h-24 items-center justify-center bg-white border">
            <div className="w-[30vw] lg:w-[16vw]">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-blue-600 text-center pr-8 lg:p-0">
                        The Market
                    </h1>
                </Link>
            </div>
            <div className="w-[50vw] flex items-center">
                <Input onChange={(e) => {setSearchQuery(e)}} className="w-full h-12 pl-12" />
                <div onClick={handleSearch} className="absolute m-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                    <Search className="w-5 h-5 text-white relative" />
                </div>
            </div>
        </div>
    )
}