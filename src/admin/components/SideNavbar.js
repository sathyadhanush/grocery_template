import React from "react";
import {ShopIcon,PropertiesIcon} from "evergreen-ui"
import styles from "./sidenav.module.css"
import {ArrowRightIcon} from 'evergreen-ui';
import {ArrowLeftIcon} from 'evergreen-ui';
import {UserIcon} from 'evergreen-ui';
import {PeopleIcon} from 'evergreen-ui';
import { useState } from "react";


function SideNavbar() {
  const [open, setopen] = useState(true)
  const toggleOpen = () => {
      setopen(!open)
  }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}   >
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <ArrowLeftIcon />: <ArrowRightIcon />}
        </button>
        <div  className="p-6 w-1/2 h-screen bg-zinc-800 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-slate-50 border-b border-gray-100 pb-4 w-full">
             
             Grocery
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <PeopleIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                  <a href="/Employee">
                  Employee
                  </a>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <PropertiesIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                <a href="/Product">
                  Product
                  </a>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ShopIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                  <a href="/Shop">
                  Shop
                  </a>
                </h3>
              </div>
           
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <UserIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                  <a href="/User">
                  Users
                  </a>
                </h3>
              </div>
            
            
           
              
            </div>
           
          </div>
        </div>
     
    </div>
  );
}

export default SideNavbar;
