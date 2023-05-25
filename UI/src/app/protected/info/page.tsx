'use client';

import app from '@/lib/firebase';
import { useFirebaseAuth } from '@/lib/firebase/hooks';
import { getAuth } from 'firebase/auth';
import { get, getDatabase, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

interface IUserInfoPage {
    propName: string;
}
export default function UserInfoPage({ }: IUserInfoPage) {

    const { user } = useFirebaseAuth()

    const [data, setData] = useState(null)



    useEffect(() => {
        const db = getDatabase(app)
        const dbRef = ref(db)
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val())
            } else {
                setData(null)
            }
        }
        ).catch((error) => {
            console.error(error)
        }
        )
    }, [])

    const handleLogout = async () => {
        await getAuth(app).signOut()
    }

    return (
        <div>
            {
                user?.email || "No user"
            }
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
            {
                JSON.stringify(data)
            }
        </div>
    );
}