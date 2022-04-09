import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is home</h1>
            {user?.uid ?
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                  {user?.displayName && user.displayName}
                </p>
                :
                <></>
            }
        </div>
    );
};

export default Home;