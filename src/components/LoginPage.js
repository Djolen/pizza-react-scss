import React, {useState, useEffect} from 'react'
import { 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import{
    collection,
    query,
    where,
    onSnapshot,
    getDocs
}from "firebase/firestore"

import { auth, db } from '../firebase-config';
import '../styles/LoginPage/LoginPage.css'


function LoginPage() {

    const [loginEmail, setloginEmail] = useState("");

    const [loginPassword, setloginPassword] = useState("");

    const [user, setUser] = useState({});

    const [userInfo, setUserInfo] = useState([]);

    const colRef = collection(db,'users');

    /* useEffect(()=>{
        const getUsers = async()=> {
            const data = await getDocs(colRef);
            setUserInfo(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        };
        getUsers()
        console.log(userInfo)
    }) */
    

    /* const q = query(colRef, where("email","==",auth.currentUser.email))  */


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])


    


    /* onSnapshot(colRef ,(snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            setUserInfo({...doc.data(),id: doc.id})
        })
        console.log(userInfo)
    })  */

     const logOut = async () => {
        await signOut(auth);
    } 

    const login = async () => {

        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user)
        }catch(err){
            console.log(err.message)
        }
    } 

  return (
      
    <div className='loginPageWrapper'>
         {!user && <div>

            <form>
                <input className='formInput' type={"email"} placeholder='Email'  
                onChange={(e) =>{
                    setloginEmail(e.target.value)
                }}
                />
                <input className='formInput' type={"password"} placeholder='Password'
                onChange={(e) => {
                    setloginPassword(e.target.value)
                }}
                />
                <button className='loginButton' onClick={(e)=>{
                    e.preventDefault();
                    console.log("hello");
                    login();
                }}> Ulogujte se </button>
            </form>

            <div className='registerWrapper'>
                <h1>Nemate nalog? Registrujte se ovde</h1> 
                <button className='registerButton'> 
                Registrujte se 
                </button>
            </div>

        </div>
        }  
        
          {user && 
            <div className='ulogovaniWrapper'>
                <h1>
                    Ulogovani korisnik: {user.email}

                </h1>
                <button className='loginButton' onClick={logOut}>
                    Odjavite se
                </button> 
            </div>
        } 
    </div>
  )
}



export default LoginPage
