import React, { useState } from 'react'
import axios from 'axios'
import '../../Css/Form.css'



function Login() {

    const URI = "http://localhost:4000/"
    const [Uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [passWd, setPassWd] = useState("");
    const [rePass, setRePass] = useState("")

    // console.log(userId)
    const HandleSubmit = async (e) => {
        console.log(e.target.id == "signupbtn")

        if (e.target.id == "loginbtn") {

            if (email=="" || passWd==""){return}
            const Data = {
                "email": email,
                "password": passWd,
            }
            setEmail("")
            setPassWd("")
            const result = await axios.post(URI + "api/auth/user/login", Data, { withCredentials: true });

            const cookies = result.headers['set-cookie'];
            if (cookies) {
                document.cookie = `token=${cookies[0]}; path=/; secure;`;
                console.log('Cookie set:', cookies);
            }
            console.log(result)
        }else  if (e.target.id == "loginbtn") {

            if (email=="" || passWd=="" || Uname=="" || rePass=="" || rePass!=passWd){return}
            const Data = {
                
                    "Name":Uname,
                    "age": -1,
                    "email":email,
                    "password":passWd,
                    "gender":false
                  
                }
            setUname("")
            setEmail("")
            setPassWd("")
            setRePass("")
            const result = await axios.post(URI + "api/auth/user/register", Data, { withCredentials: true });

            const cookies = result.headers['set-cookie'];
            if (cookies) {
                document.cookie = `token=${cookies[0]}; path=/; secure;`;
                console.log('Cookie set:', cookies);
            }
            console.log(result)

        }



    }




    return (
        <div className='flex H-center' style={{ width: '100vw', marginTop: '10px' }}>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" value={passWd} onChange={(e) => setPassWd(e.target.value)} type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" defaultChecked />
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <button id="loginbtn" onClick={HandleSubmit} className="button1" >Sign In</button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" value={Uname} onChange={(e) => setUname(e.target.value)} type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" value={passWd} onChange={(e) => setPassWd(e.target.value)} type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input id="pass" value={rePass} onChange={(e) => setRePass(e.target.value)} type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" />
                            </div>
                            <div className="group">
                                <button id='signupbtn' onClick={HandleSubmit} className="button1">Sign Up</button>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login