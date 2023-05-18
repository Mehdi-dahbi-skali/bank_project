import React from 'react'
import styles from '../style'
import { star } from '../assets';


const DasbordNotif = () => {
    return (
        <div className="tabel flex flex-col  w-[100%] h-[100%] ml-10">
            <div className="header flex w-full  justify-between ">
                <p className="p-5 font-bold text-2xl font-poppins text-[#fff]">Notification</p>

                <p className="p-5 font-bold text-2xl font-poppins text-[#fff]">Date</p>
                <p className="p-5 font-bold text-2xl font-poppins text-[#fff]">Stats</p>
            </div>
            <div className="bg bg-white/50 h-1 rounded-xl w-full"></div>
            <div className=" w-full h-full overflow-y-scroll">
                <div className="header flex w-full  justify-between bg-[#296466] rounded-[17px] mt-6 ">
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Name</p>

                    <p className="p-5 font-bold  font-poppins text-[#fff]">12/2/22</p>
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Opened</p>
                </div>
                <div className="header flex w-full  justify-between bg-black-gradient-2 rounded-[17px] mt-2 ">
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Name</p>

                    <p className="p-5 font-bold  font-poppins text-[#fff]">12/2/22</p>
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Opened</p>
                </div>
                <div className="header flex w-full  justify-between bg-[#296466] rounded-[17px] mt-2 ">
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Name</p>

                    <p className="p-5 font-bold  font-poppins text-[#fff]">12/2/22</p>
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Opened</p>
                </div>
                <div className="header flex w-full  justify-between bg-black-gradient-2 rounded-[17px] mt-2 ">
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Name</p>

                    <p className="p-5 font-bold  font-poppins text-[#fff]">12/2/22</p>
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Opened</p>
                </div>
                <div className="header flex w-full  justify-between bg-[#296466] rounded-[17px] mt-2 ">
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Name</p>

                    <p className="p-5 font-bold  font-poppins text-[#fff]">12/2/22</p>
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Opened</p>
                </div>
                <div className="header flex w-full  justify-between bg-[#296466] rounded-[17px] mt-2 ">
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Name</p>

                    <p className="p-5 font-bold  font-poppins text-[#fff]">12/2/22</p>
                    <p className="p-5 font-bold  font-poppins text-[#fff]">Opened</p>
                </div>


            </div>
        </div>
    )
}

export default DasbordNotif