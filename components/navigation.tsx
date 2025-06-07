"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";   

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us/company">About Us</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us/company/sales">Sales</Link> {path === "/" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    );
}