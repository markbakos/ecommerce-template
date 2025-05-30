"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SearchPage() {
    const params = useParams()
    const query = params.query as string;

    const [results, setResults] = useState<Product[] | null>(null);

    useEffect(() => {
        async function fetchSearchResults() {
            try {
                const response = await axios.get(`https://localhost:3002/api/products/search?search=${query}`);
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
        </div>
    )
}