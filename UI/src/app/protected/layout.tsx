"use client";

import { useFirebaseAuth } from "@/lib/firebase/hooks";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootNameLayout({
    children
}: {
    children: React.ReactNode;
}) {

    // Auth protected routes
    const { user, loading } = useFirebaseAuth()

    const router = useRouter()

    useEffect(() => {
        if (!user && !loading) {
            // redirect to login
            router.push('/login')
        }
    }, [user, loading])



    return (
        <div>
            <p>root layout at /protected</p>
            {children}
        </div>
    );
}