import React from "react";
import {ShopIcon,SettingsIcon,PropertiesIcon,PersonIcon,AnnotationIcon} from "evergreen-ui"



function SideNavbar() {
  return (
    <div display="flex"  >
      
        <div  className="p-6 w-1/2 h-screen bg-zinc-800 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-slate-50 border-b border-gray-100 pb-4 w-full">
             
             Grocery
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
           
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
                  <a href="/White">
                  Shop
                  </a>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <PersonIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                  <a href="/Yellow">
                  Employee
                  </a>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <AnnotationIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                  <a href="/Blue">
                  Inventory
                  </a>
                 
                </h3>
              </div>
             <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <SettingsIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-slate-50 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              
            </div>
           
          </div>
        </div>
     
    </div>
  );
}

export default SideNavbar;
