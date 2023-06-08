import { useState } from 'react';
import './login.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'

const Login = () => {
  const [name , setName] = useState('');
  const [profilePic , setProfilePic] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  
  const dispatch = useDispatch();


    const loginToApp = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
          const user = userAuth.user;

             dispatch(login({
               email : user.email,
               uid : user.uid,
               Name:user.displayName,
              thePhoto:user.photoURL
             }))
           })
          console.log('user logged in successfuly')
          
        

    }

    const registerToApp =async () => {
        if(!name) {
          return alert('please enter a full name')
        }
        createUserWithEmailAndPassword(auth, email, password)
       .then((userAuth) => {
          // Signed in 
          const user = userAuth.user;
          updateProfile(user, {
            displayName: name,
            photoURL: profilePic,
           })
           
           .then(() => {
           console.log('Profile Updatedd',user);   
          dispatch(login({
            email : user.email,
            uid :user.uid,
            Name:name,
            thePhoto:profilePic
          }))
          })

        }).catch((err)=>console.log(err))
      
      }


    return (
        <div className='login'>
         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png ' alt="" />

          <form >
            <input
              type="text"
              value={name}
              placeholder='Full name(required if registering)' 
              onChange={e =>setName(e.target.value)}
             />
            <input
              type="text"
              value={profilePic}
              placeholder='Profile pic URL (optional)'
              onChange={e => setProfilePic(e.target.value)}
              />  
            <input
              type="email"
              value={email}
              placeholder='email'
              onChange={e =>setEmail(e.target.value)}

                />
            <input
              type="password"
              value={password}
              placeholder='password'
              onChange={e => setPassword(e.target.value)}
                />
            <button type='submit' onClick={loginToApp} >Sign in</button>
          </form>
          <p>Not a mumber? <span className='login__register' onClick={registerToApp} >Register Now</span></p>
        </div>
    );

}
export default Login;