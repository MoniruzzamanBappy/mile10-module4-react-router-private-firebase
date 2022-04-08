import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "./../firebase.init";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        console.log('successful sign out')
      }).catch((error) => {
          console.log(error.message);
      });
      
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, []);

  // return [user, setUser];
  return { user, signInWithGoogle, handleSignOut};
};

export default useFirebase;
