import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form className="mx-auto text-center mt-6">
                <h1>Please Register</h1>
                <input className="border rounded mt-3" type="text" name="" placeholder='enter your name' id="" />
                <br />
                <input className="border rounded mt-3" type="email" name="" placeholder='Enter your email' id="" />
                <br />
                <input className="border rounded mt-3" type="password" name="" placeholder='Enter your password' id="" />
                <br />
                <button className="mt-3 text-emerald-600 font-bold"><Link to="/login">Already have an account </Link></button>
                <br />
                <input className="border rounded mt-3" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignUp;