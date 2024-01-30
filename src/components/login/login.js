import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

import './login.css'



const Login = ()=>{

    let navigate=useNavigate();

    const [loginBtn,setLoginBtn]=useState('login');
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showSubmitError,setSubmitError]=useState(false);
    const [errorMsg,setErrorMsg]=useState("");
    const [name,setName]=useState("");
    const [gender,setGender]=useState("");
    const [phnNumber,setPhnNumber]=useState('');

    const onSubmitSuccess = jwtToken=>{
        Cookies.set('jwt_token',jwtToken)//storing the token from server
        navigate("/auth/dashboard")
    }

    const onSubmitFailure = errorMsg=>{
        setSubmitError(true);
        setErrorMsg(errorMsg);
    }
    
    const renderUserName=()=>{
        return(
            <>
             <label className='label' htmlFor='name'>
                Username
             </label>
             <input
             type='text'
             id='name'
             placeholder='Enter Your Name'
             value={name}
             className='user-input'
             onChange={((e)=>setName(e.target.value))}
             />
            </>
        )
    }
    const renderEmail=()=>{
        return(
            <>
             <label className='label' htmlFor='mail'>
                Email
             </label>
             <input
             type='text'
             id='mail'
             placeholder='Enter Your Email'
             value={email}
             className='user-input'
             onChange={((e)=>setEmail(e.target.value))}
             />
            </>
        )
    }
    const renderPhnNumber=()=>{
        return(
            <>
             <label className='label' htmlFor='number'>
                Phone Number
             </label>
             <input
             type='text'
             id='number'
             placeholder='Enter Your Phone Number'
             value={phnNumber}
             className='user-input'
             onChange={((e)=>setPhnNumber(e.target.value))}
             />
            </>
        )
    }
    const renderGender=()=>{
        return(
            <>
             <label className='label' htmlFor='gender'>
                Gender
             </label>
             <input
             type='text'
             id='gender'
             placeholder='Enter Your Gender'
             value={gender}
             className='user-input'
             onChange={((e)=>setGender(e.target.value))}
             />
            </>
        )
    }
    const renderPassword=()=>{
        return(
            <>
             <label className='label' htmlFor='password'>
                Password
             </label>
             <input
             type='text'
             id='password'
             placeholder='Enter Your Password'
             value={password}
             className='user-input'
             onChange={((e)=>setPassword(e.target.value))}
             />
            </>
        )
    }


    const onSubmitForm= async (event)=>{
            event.preventDefault();

            if(loginBtn==='login'){
                //do login api
                const url='http://localhost:7777/auth/login'
                const options={
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        email,
                        password
                    }),
                }
                const response= await fetch(url,options);
                const data= await response.json();
                
                if(response.ok ===true){
                    //handle success
                    onSubmitSuccess(data.token)//call in login success function
                }else{
                    //handle failure
                    onSubmitFailure(data.message)
                }

            }else{
                //do signup api
                const url='http://localhost:7777/auth/signup'
                const options={
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        name,
                        email,
                        phoneNumber:phnNumber,
                        gender,
                        password
                    }),
                }
                const response= await fetch(url,options);
                const data= await response.json();
                
                if(response.ok === true){
                    //alert(data.message)
                    setLoginBtn('login')
                }else{
                    //alert(data.message)
                    onSubmitFailure(data.message)
                }
            }
            setName("");
            setEmail("");
            setGender("");
            setPhnNumber("");
            setPassword("");

    }

    useEffect(()=>{
        const token=Cookies.get("jwt_token");
        if(token !== undefined){
            navigate("/auth/dashboard")
        }
    },[])
    
    return(
        <div className='bayano-login-bg-container'>
          <div className='row bayanno-login-height'>
            <div className='col-md-4'>
            <div className='bayano-login-container'>
                <img src='https://demo.creativeitem.com/bayanno/uploads/logo.png'
                 alt='hospital logo'
                 className='hospital-logo'/>
                 <h2 className='bayanno-login-hospital-name'>Bayanno Hospital Management System</h2>

                <div>
                <button
                className={loginBtn==='login'? 'login-button': 'login-button btn-off'}
                type='submit'
                onClick={(()=>setLoginBtn("login"))}
                >
                Login
                </button>
                <button
                className={loginBtn==='signup'? 'login-button': 'login-button btn-off'}
                type='submit'
                onClick={(()=>setLoginBtn("signup"))}
                >
                Signup
                </button>
                </div>

                <form className='form-container' onSubmit={onSubmitForm}>
                    <div className='input-container'>{loginBtn==='signup'? renderUserName():""}</div>
                    <div className='input-container'>{renderEmail()}</div>
                    <div className='input-container'>{loginBtn==='signup'? renderPhnNumber():""}</div>
                    <div className='input-container'>{loginBtn==='signup'? renderGender():""}</div>
                    <div className='input-container'>{renderPassword()}</div>
                    <button className='login-button' type='submit'>{loginBtn==='login'? "Login": "Signup"}</button>
                    {showSubmitError && <p className='error-msg'>{errorMsg}</p>}
                </form>

            </div>
            </div>
            <div className='col-md-8'>
              <div className='bayanno-login-page-image'></div>
            </div>
            </div>

        </div>
    )
}

export default Login;