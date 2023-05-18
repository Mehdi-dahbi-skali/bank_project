import React, { useState } from 'react'
import { logo, check } from '../assets';
import '../ecran.css';
import { validatePwd, validateEmail, validatePwdrepeatedcharacters, validateInputvariations } from '../js/formulaire.js';
import { root } from "../main";
import Dashbord from '../pages/Dashbord';
import Form from './Form';

const FormloginCard = () => {

    

    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [errors, setErrors] = useState({});



    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'Password') {
            setPassword(value);
        }
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};



        if (!validatePwd(pass)) {
            // alert("password Must be 16 or more characters");
            errors.pass = "Invalid pass";

        };
        if (!validateEmail(email.toString())) {
            // alert("Invalid email");
            errors.email = "Invalid email";

        };
        if (!validatePwdrepeatedcharacters(pass)) {
            // alert("the passworld Can't include 3 or more consecutive repeated characters (e.g. 'aaabode')");
            errors.pass = "Invalid passworld";


        };
        if (!validateInputvariations(pass)) {
            // alert("the passworld can't include the strings 'Twilio', 'Sendgrid', or variations of those strings");
            errors.pass = "Invalid passworld";

        }
        setErrors(errors);
        if (!errors.email && !errors.pass) {

            const data = {
                "email": email,
                "pwd": pass
            };

            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message != "success") {
                        const errors = {};
                        errors.email = json.message
                        errors.pass = json.message
                        setErrors(errors);
                    } else {
                        root.render(<Dashbord/>)
                        
                    }


                })
        }

    }

    const handelCreateaccpunt = (e) => {
        root.render(<Form />)
    }

    return (
        <section className="back  relative">
            <header className="w-fit m-auto ">

                <img src={logo} alt="" className="icon " />
                <p className="font-poppins font-normal text-[25px] ">Get started with a free Twilio account.</p>
                <p className="font-poppins font-normal text-[25px]">No credit card required.</p>
            </header>
            <main className="m-auto mt-10 max-w-[644.3 px] static backdrop-blur-sm bg-white/10 px-10 py-10 rounded-3xl shadow-gray-400  shadow border/40 ">
                <div className=" flex justify-around">
                    <div className=" ">
                        <form onSubmit={handleSubmit} className="z-[2] form w-[70%] items-start flex flex-col">
                            <input className="m-y-7 mt-5 ml-7 w-fit bg-transparent text-white p-y-4 outline-none border-b-2 placeholder:text-white/70 font-poppins text-[10px] sm:text-3xl" type="email" placeholder="Email *" name="email" id="Email" value={email} onChange={handleChange} />
                            {/* err */}
                            {errors.email && <p className="text-xs m-0 ml-[1.5rem] mt-2 text-red-400 font-poppins" >{errors.email}</p>}
                            {/* end err */}
                            <input className="m-y-7 mt-5 ml-7 w-[145px]  sm:w-[370px] bg-transparent text-white p-y-4 outline-none border-b-2 placeholder:text-white/70 font-poppins text-[9px] sm:text-xl" type="password" placeholder="Password (16 Characteres) *" name="Password" id="Password" value={pass} onChange={(event) => {
                                handleChange(event);
                                handlePasswordChange(event);
                            }} />
                            {/* err */}
                            {errors.pass && <p className="text-xs m-0 ml-[1.5rem] mt-2 text-red-400 font-poppins" >{errors.pass}</p>}
                            {/* end err */}
                            <button id="GetStartedButton" className=" m-auto p-2 rounded-[8px] mt-7 shadow border bg-white/80 hover:bg-white/100 transition text-primary hover:text-primary/60 sm:text-[20px]  font-poppins text-[30px] ml-[60px] w-full">Login</button>
                        </form>
                    </div>
                </div>
            </main>
            <div className="connection w-full flex justify-center items-center mt-6">
                <a href="#" className="font-poppins font-normal text-[15px] hover:text-white/60 transition " >Don't have a acount</a>
                <button onClick={handelCreateaccpunt} className="font-poppins font-normal text-[15px] ml-2 p-2 transition bg-white/40 hover:bg-white/10  text-white/80 hover:text-white rounded-[8px]">Create one</button>
            </div>

        </section>
    )
}

export default FormloginCard