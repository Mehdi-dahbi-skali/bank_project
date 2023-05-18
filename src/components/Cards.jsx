import React from 'react'
import styles from '../style'
import { logo } from '../assets';
const Cards = () => {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} mt-[5rem] ml-[3rem] `}>
                <div className=" h-[258px] w-[420px] rounded-[45px] flex flex-col bg-black-gradient-2 box-shadow p-5 items-center ">
                    <div className=" top flex w-full  justify-between  mt-[35px] items-center ">
                        <p className="text-5xl font-medium tracking-normal text-left font-poppins text-[#5CE1E6]" >Balance</p>
                        <div className="btn-coin flex border-[2px] rounded-[12px] border-[#5CE1E6] h-fit mr-5">
                            <div className="h-12 w-12 bg-[#5CE1E6] rounded-l-[11px] text-2xl font-black leading-8 tracking-normal text-center font-poppins m-auto  ">
                                <p className=" w-full h-full m-auto pt-[9px] text-[#296466] ">DH</p>
                            </div>
                            <div className="h-12 w-12 text-2xl font-black leading-8 tracking-normal font-poppins m-auto text-center">
                                <p className="w-full h-full m-auto pt-[9px] text-[#296466]" >$</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-between mt-[30px] items-center ">
                        <p className="text-5xl font-black tracking-normal text-left font-poppins text-[#5CE1E6]">1000.00</p>
                        <p className="text-5xl font-black tracking-normal text-left font-poppins text-[#5CE1E6] mr-[2.25rem] ">DH</p>
                    </div>
                </div>

            </div>
            <div className={`${styles.boxWidth} mt-[5rem]`}>
                <div className="ml-[120px] h-[208px] w-[323px] rounded-[45px] flex flex-col items-start bg-black-gradient-2 box-shadow p-5 justify-between ">
                    <img src={logo} alt="logo" className="w-[124px]  h-[32px] mt-2" />
                    <div className="bottom">
                        <p className="text-3xl font-semibold leading-10 tracking-normal text-white/70 font-poppins " >123 456 789 901</p>
                        <p className="text-sm font-semibold leading-5 tracking-normal font-poppins text-white/70" >name of user</p>
                    </div>
                </div>

            </div>
            <div className={`${styles.boxWidth} m-0 mt-[5rem]`}>
                <div className=" ml-[88px] h-[208px] w-[323px] rounded-[45px] flex flex-col items-start bg-black-gradient-2 box-shadow  justify-between ">
                    <div className="w-[323px] h-[38px] bg-[#296466] mt-[3rem] "></div>
                    <p className="p-5 text-3xl font-semibold leading-10 tracking-normal text-white/70 font-poppins " >123 456 789 901</p>
                </div>

            </div>

        </div>
    )
}

export default Cards