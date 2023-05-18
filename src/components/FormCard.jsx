import React, { useState } from 'react'
import { logo, check } from '../assets';
import '../ecran.css';
import { info, infopass } from "../constants";
import { validateLastname, validateName, validatePwd, validateEmail, validatePwdrepeatedcharacters, validateInputvariations } from '../js/formulaire.js';
import { root } from "../main";
import Login from '../pages/login';

const FormCard = () => {
    const [lists, setlists] = useState(info.list);
    const [toggele, setToggele] = useState(false);
    const [Checked, setChecked] = useState(false);



    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [pass, setPwd] = useState('');
    const [errors, setErrors] = useState({});

    const handleClick = () => {
        setlists(infopass);
        setToggele(true);
    };
    const handleClick2 = () => {
        setlists(info.list);
        setToggele(false);
    };

    const handelCheck = () => {
        if (Checked) {
            setChecked(false);
            return;
        }
        setChecked(true);
        return;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'name') {
            setName(value);
        } else if (name === 'LastName') {
            setLastname(value);
        } else if (name === 'Password') {
            setPwd(value);
        }
    };

    const handellogin=(e)=>{
        root.render(<Login/>)
    }


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!validateName(name)) {
            // alert(" name Must be 6 or more characters ");
            errors.name = 'Invalid name';

        };

        if (!validateLastname(lastname)) {
            // errors.lastname="lastname Must be 6 or more characters"
            errors.lastname = "Invalid lastname";

        };

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
        if (!errors.email && !errors.lastname && !errors.pass && !errors.name) {

            const data = {
                "name":name,
                "lastname":lastname,
                "email":email,
                "pwd":pass
              };

                fetch("http://localhost:3000/register", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                  })
                    .then(response => response.json())
                    .then(json => {
                        if(json.err){
                            const errors = {};
                            errors.email=json.err;
                            setErrors(errors);
                            // console.log(json.err);
                            // alert(json.err);
                        }else{
                            // console.log(json);
                            root.render(<Login />);
                        }
                        
                        
                    })
        }
        
    }

    return (
        <section className="back  relative">
            <header onClick={handleClick2} className="w-fit m-auto ">

                <img src={logo} alt="" className="icon " />
                <p className="font-poppins font-normal text-[25px] ">Get started with a free Twilio account.</p>
                <p className="font-poppins font-normal text-[25px]">No credit card required.</p>
            </header>
            <main className="m-auto mt-10 max-w-[644.3 px] static backdrop-blur-sm bg-white/10 px-10 py-10 rounded-3xl shadow-gray-400  shadow border/40 ">
                <div className=" flex justify-around">
                    <div className={`${toggele ? 'hidden' : 'visible'} glass z-10 w-full  text-[10px] sm:text-[15px] `} >
                        <p className="mt-3 " onClick={handleClick2}>{info.title}</p>
                        <ul className="pl-5" onClick={handleClick2}>
                            {lists.map((info) => {
                                return (
                                    <div className="flex items-center w-fit ">
                                        <img src={check} className="w-5 h-5" />
                                        <li className="ml-2 my-2 ">{info.name}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={`${toggele ? 'visible' : 'hidden'} transition w-fit  text-[10px] sm:text-[15px] `} >

                        <p className="mt-3 w-[17rem] text-xs" onClick={handleClick2}>SAFEGUARD YOUR TWILIO COMMUNICATIONS WITH A STRONG, UNIQUE PASSWORD</p>
                        <ul className="pl-5" onClick={handleClick2}>
                            <div className="flex items-center w-fit ">
                                <li className={`my-3 w-[22rem] py-2 text-dimWhite list-disc text-xs ${info.title === "PASSWORD REQUIREMENTS:" ? Long === false || variation === false || doubulre === false ? "text-red-600 underline" : "text-white underline" : "text-dimWhite"}`}>We recommend using a password manager to generate and manage your Twilio password or choosing a unique phrase for your password (e.g. 'Owls are such lovely creatures!')</li>
                            </div>
                        </ul>

                        <p className="mt-3 w-[17rem] text-xs" onClick={handleClick2}>PASSWORD REQUIREMENTS:</p>
                        <ul className="pl-5" onClick={handleClick2}>
                            <div className="flex items-center w-fit flex-col ">
                                {/* <li className={styles.red} >Must be 16 or more characters</li> */}

                                <li className={` my-3 w-[22rem] py-2  list-disc text-[15px] ${pass.length >= 16 ? "text-green-500" : "text-red-600"
                                    }`} >Must be 16 or more characters</li>

                                <li className={` my-3 w-[22rem] py-2  list-disc text-[15px] ${validatePwdrepeatedcharacters(pass) && pass.length != 0 ? "text-green-500" : "text-red-600"
                                    }`}>Can't include 3 or more consecutive repeated characters (e.g. 'aaabode')</li>
                                <li className={` my-3 w-[22rem] py-2  list-disc text-[15px] ${validateInputvariations(pass) && pass.length != 0 ? "text-green-500" : "text-red-600"
                                    }`}>Can't include 'Twilio' 'Sendgrid' or variations (e.g 'TwIL1o' 'S3ndGrld')</li>

                            </div>
                        </ul>

                    </div>
                    <div className=" ">
                        <form onSubmit={handleSubmit} className="z-[2] form w-[70%] items-start flex flex-col">
                            <input onClick={handleClick2} className="m-y-7 mt-5 ml-7 sm:ml-7 w-fit bg-transparent text-white p-y-4 outline-none border-b-2 placeholder:text-white/70 font-poppins text-[10px] sm:text-3xl" type="text" placeholder="First Name *" name="name" id="Name" value={name} onChange={handleChange} />
                            {/* err */}
                            {errors.name && <p className="text-xs m-0 ml-[1.5rem] mt-2 text-red-400 font-poppins" >{errors.name}</p>}
                            {/* end err */}
                            <input onClick={handleClick2} className="m-y-7 mt-5 ml-7 w-fit bg-transparent text-white p-y-4 outline-none border-b-2 placeholder:text-white/70 font-poppins text-[10px] sm:text-3xl" type="text" placeholder="Last Name *" name="LastName" id="LastName" value={lastname} onChange={handleChange} />
                            {/* err */}
                            {errors.lastname && <p className="text-xs m-0 ml-[1.5rem] mt-2 text-red-400 font-poppins" >{errors.lastname}</p>}
                            {/* end err */}
                            <input onClick={handleClick2} className="m-y-7 mt-5 ml-7 w-fit bg-transparent text-white p-y-4 outline-none border-b-2 placeholder:text-white/70 font-poppins text-[10px] sm:text-3xl" type="email" placeholder="Email *" name="email" id="Email" value={email} onChange={handleChange} />
                            {/* err */}
                            {errors.email && <p className="text-xs m-0 ml-[1.5rem] mt-2 text-red-400 font-poppins" >{errors.email}</p>}
                            {/* end err */}
                            <input onClick={handleClick} className="m-y-7 mt-5 ml-7 w-[145px]  sm:w-[370px] bg-transparent text-white p-y-4 outline-none border-b-2 placeholder:text-white/70 font-poppins text-[9px] sm:text-xl" type="password" placeholder="Password (16 Characteres) *" name="Password" id="Password" value={pass} onChange={(event) => {
                                handleChange(event);
                                handlePasswordChange(event);
                            }} />
                            {/* err */}
                            {errors.pass && <p className="text-xs m-0 ml-[1.5rem] mt-2 text-red-400 font-poppins" >{errors.pass}</p>}
                            {/* end err */}
                            <div className="cond w-fit  flex mt-5 ">
                                <label className="ml-7 text-[7px] sm:text-[13px] flex items-start text-white/50">
                                    <input onClick={() => {
                                        handleClick2();
                                        handelCheck();
                                    }} type="checkbox" name="option1" value="Option 1" className=" mr-1 mt-2" />I accept the Twilio Terms of Service <br /> and have read the Twilio Privacy Notice. <br /> If I am a micro- or small enterprise or a not-for-profit <br /> organization in the EEA or UK, I agree to  <br /> the European Electronic Communications Code Rights Waiver.  1
                                </label>
                            </div>
                            <button disabled={!Checked} id="GetStartedButton" className=" m-auto p-2 rounded-[8px] mt-7 shadow border bg-white/80 hover:bg-white/100 transition text-primary hover:text-primary/60 text-[10px] sm:text-[20px]  font-poppins">Start your free trial</button>
                        </form>
                    </div>
                </div>
            </main>
            <div className="connection w-full flex justify-center items-center mt-6">
                <a href="#" className="font-poppins font-normal text-[15px] hover:text-white/60 transition " >Already have a acount</a>
                <button onClick={handellogin} className="font-poppins font-normal text-[15px] ml-2 p-2 transition bg-white/40 hover:bg-white/10  text-white/80 hover:text-white rounded-[8px]">Log In</button>
            </div>

        </section>
    )
}

export default FormCard