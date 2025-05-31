"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "@/components/header";

export default function SearchPage() {
    const params = useParams()
    const query = params.query as string;

    const [results, setResults] = useState<Product[] | null>(null);

    useEffect(() => {
        async function fetchSearchResults() {
            try {
                const response = await axios.get(`http://localhost:3002/api/products/search?search=${query}`);
                if (response.status === 200) {
                    setResults(response.data)
                    console.log()
                }
                else {
                    console.error("Error fetching search results: " + response.statusText)
                }
            }
            catch (error) {
                console.error("Error fetching search results:", error);
            }

            console.log(results);
        }

        fetchSearchResults()
    }, [query]);

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
                { results && results.length > 0 ? (
                    results.map((product) => (
                        <SearchResultCard key={product._id} name={product.name} description={product.description} price={product.price} />
                    ))
                    ) : (
                    <div>
                        <h1>No results</h1>
                    </div>
                    )}
            </div>
        </div>
    )
}

export function SearchResultCard ({name, description, price, imageUrl, categories, stock}: Product) {
    return (
        <div className="border-2 rounded-sm shadow-md h-64 w-[20vw]">
            <h1>
                {name}
            </h1>
            <p>
                {description}
            </p>
            <p>
                {price} $
            </p>
        </div>
    )
}