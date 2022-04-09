import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(()=>{
      navigate(from, {replace: true})
    })
  }
    return (
        <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div>
            <button
              className={`bg-green  py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
          <h1 className="text-2xl font-medium text-primary mt-4 text-center">
            Log in with
          </h1>
        <div className="flex justify-center items-center mt-6">
          <button onClick={handleGoogleSignIn} className="bg-green py-2 px-4 text-sm text-black rounded border border-green">
            Google
          </button>
          <button className="bg-green py-2 px-4 ml-2 text-sm text-black rounded border border-green">
            Github
          </button>
          <button className="bg-green py-2 px-4 ml-2 text-sm text-black rounded border border-green">
            Facebook
          </button>
        </div>
      </div>
    </div>
    );
};

export default LogIn;