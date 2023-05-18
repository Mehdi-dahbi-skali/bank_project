import React, { useState } from 'react'
import styles from '../style'
import { star } from '../assets';
import { root } from "../main";
import { DasbordNotif,DashbordwalletCard,DashboardpayementCard,Acount} from '../components';



const DahboardCard = () => {
    const [page, setpage] = useState("Wallet");
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className="h-[594px] w-[1259px] rounded-[45px] bg-[#476566]/20  mt-12 items-center flex  mb-5">
                <div className=" flex flex-col mt-10 ml-10 ">
                    <div className={`link flex  items-center w-[380px] h-[79px] rounded-[19px]  ${page==="Wallet" ? 'bg-white/20 pl-5' : ''} hover:bg-white/20 mt-2 pl-5 `} onClick={()=>{
                        setpage("Wallet");
                    }} >
                        <img className="w-10 h-10 m-3" src={star} alt="" />
                        <div className="w-[3px] rounded h-14 bg-white m-3"></div>
                        <p className="w-24 h-10 not-italic font-medium text-3xl text-white/70 ">Wallet</p>
                    </div>
                    <div className={`link flex  items-center w-[380px] h-[79px] rounded-[19px]  ${page==="notification" ? 'bg-white/20 pl-5' : ''} hover:bg-white/20 mt-2 pl-5 `} onClick={()=>{
                        setpage("notification");
                    }}  >
                        <img className="w-10 h-10 m-3" src={star} alt="" />
                        <div className="w-[3px] rounded h-14 bg-white m-3"></div>
                        <p className="w-24 h-10 not-italic font-medium text-3xl text-white/70  ">Notification</p>
                    </div>
                    <div className={`link flex  items-center w-[380px] h-[79px] rounded-[19px]  ${page==="Payement" ? 'bg-white/20 pl-5' : ''} hover:bg-white/20 mt-2 pl-5 `} onClick={()=>{
                        setpage("Payement");
                    }}  >
                        <img className="w-10 h-10 m-3" src={star} alt="" />
                        <div className="w-[3px] rounded h-14 bg-white m-3"></div>
                        <p className="w-24 h-10 not-italic font-medium text-3xl text-white/70 ">Payement</p>
                    </div>
                    <div className={`link flex  items-center w-[380px] h-[79px] rounded-[19px]  ${page==="Account" ? 'bg-white/20 pl-5' : ''} hover:bg-white/20 mt-2 pl-5 `} onClick={()=>{
                        setpage("Account");
                    }}  >
                        <img className="w-10 h-10 m-3" src={star} alt="" />
                        <div className="w-[3px] rounded h-14 bg-white m-3"></div>
                        <p className="w-24 h-10 not-italic font-medium text-3xl text-white/70 ">Account</p>
                    </div>
                    <div className={`link flex  items-center w-[380px] h-[79px] rounded-[19px]  ${page==="Account2" ? 'bg-white/20 pl-5' : ''} hover:bg-white/20 mt-2 pl-5 `} onClick={()=>{
                        setpage("Account2");
                    }}  >
                        <img className="w-10 h-10 m-3" src={star} alt="" />
                        <div className="w-[3px] rounded h-14 bg-white m-3"></div>
                        <p className="w-24 h-10 not-italic font-medium text-3xl text-white/70 ">Account</p>
                    </div>

                </div>
                <div className="w-[60%] h-[80%] ">
                {page === "Wallet" && <DashbordwalletCard />}
                {page === "notification" && <DasbordNotif />}
                {page === "Payement" && <DashboardpayementCard/> }
                {page === "Account" && <Acount /> }
                </div>
            </div>
        </div>
    )
}

export default DahboardCard