"use client";

import { loginWithEmailAndPassword } from "@/lib/firebase";
import { useFirebaseAuth } from "@/lib/firebase/hooks";
import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Login page 
 */

export default function LoginPage() {

    const t = useFirebaseAuth()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e: MouseEvent) => {
        e.preventDefault()
        const res = await loginWithEmailAndPassword(email, password)
        if (res.status === "success") {
            // redirect to user info page
            router.push('/protected/info')
        }
        else {
            alert(res.message)
        }
    }

    useEffect(() => {
        if (t.user) {
            // redirect to user info page
            router.push('/protected/info')
        }
    }, [t.user])

    return (
        <div>
            {/* Login form using tailwind css */}
            <h1>Hello Page Login</h1>
            {
                JSON.stringify(t)
            }
            <div className="flex justify-center items-center h-screen">
                <form className="w-full max-w-sm"
                >
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                                id="inline-email" type="email" placeholder="Email" autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                                id="inline-password" type="password" placeholder="******************"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}