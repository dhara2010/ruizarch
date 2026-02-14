import React, { useState } from 'react'
import Related from './Related';
import All from './All';
import Version from './Version';

const SideNavbar = () => {
    const [visible, setVisible] = useState(true);
    const [showHelp, setShowHelp] = useState(false);
    const [showDemo, setShowDemo] = useState(false);
const [activeTab, setActiveTab] = useState("Related");
    if (!visible) return null;

    return (
        <div>
            <div className={`fixed top-8/12 lg:top-1/3 right-0 z-50 flex flex-col border border-black bg-white shadow-lg transition-all duration-500 ${(showHelp || showDemo) ? "-translate-x-73" : "translate-x-0"}`}>
                <div className="relative group flex items-center">
                    <button onClick={() => setVisible(false)} className="p-2 sm:px-3 sm:py-2 transition">
                        <i className="fa-solid fa-eye-slash"></i>
                    </button>
                    <span className="absolute right-full mr-2 hidden whitespace-nowrap bg-gray-800 text-white text-xs p-2 group-hover:block">
                        Remove Panel
                    </span>
                </div>
                <hr />
                <div className="relative group flex items-center">
                    <button href="#" onClick={() => { setShowHelp(true); setShowDemo(false); }} className={`px-2 sm:px-3 sm:py-2 transition ${showHelp ? 'bg-gray-500/50 ' : ''}`}>
                        <i className="fa-solid fa-life-ring"></i>
                    </button>
                    <span className="absolute right-full mr-2 hidden whitespace-nowrap bg-gray-800 text-white text-xs p-2 group-hover:block">
                        Help
                    </span>
                </div>
                <hr />
                <div className="relative group flex items-center">
                    <a href="https://themeforest.net/checkout/111688724/create_account?clickid=0TLV7vUY5xycT%3AFV3EUer16CUkp1h3QfEzIuwU0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1790164&mp_value1=&utm_campaign=af_impact_radius_1790164&utm_medium=affiliate&utm_source=impact_radius" target='_blank' className="px-2 sm:px-3 sm:py-2 transition">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                    <span className="absolute right-full mr-2 hidden whitespace-nowrap bg-gray-800 text-white text-xs p-2 group-hover:block">
                        Buy Theme
                    </span>
                </div>
                <hr />
                <div className="relative group flex items-center">
                    <button onClick={() => { setShowDemo(true); setShowHelp(false) }} className={`px-2 sm:px-3 sm:py-2 transition ${showDemo ? 'bg-gray-500/50 ' : ''}`}>
                        <i className="fa-solid fa-th-large"></i>
                    </button>
                    <span className="absolute right-full mr-2 hidden whitespace-nowrap bg-gray-800 text-white text-xs p-2 group-hover:block">
                        Demo/Related
                    </span>
                </div>
                <hr />
                <div className="relative group flex items-center">
                    <a href="https://themeforest.net/item/ruizarch-architecture-wordpress-theme/53685277?irgwc=1&clickid=0TLV7vUY5xycT%3AFV3EUer16CUkp1hyxmEzIuwU0&iradid=275988&irpid=1790164&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1790164&utm_medium=affiliate&utm_source=impact_radius" target='_blank' rel="noopener noreferrer" className="px-2 sm:px-3 sm:py-2 transition">
                        <i className="fa-brands fa-wordpress text-blue-500"></i>
                    </a>
                    <span className="absolute right-full mr-2 hidden whitespace-nowrap bg-gray-800 text-white text-xs p-2 group-hover:block">
                        WP Theme
                    </span>
                </div>
            </div>

            <div className={`fixed top-13 right-0 h-full w-74 bg-white border-l items-center justify-center z-50 transition-transform duration-500 ${showHelp ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex p-4">
                    <button onClick={() => setShowHelp(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="flex flex-col p-6 gap-6 mt-30 lg:mt-40">
                    <a href="https://themeforest.net/item/ruizarch-react-nextjs-architecture-template/48905400/support?irgwc=1&clickid=0TLV7vUY5xycT%3AFV3EUer16CUkp1hS2OEzIuwU0&iradid=275988&irpid=1790164&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1790164&utm_medium=affiliate&utm_source=impact_radius" target='_blank'>
                        <div className="flex flex-col items-center">
                            <i className="fa-solid fa-life-ring text-3xl mb-2"></i>
                            <p className="font-medium">Get Support</p>
                        </div>
                    </a>
                    <hr />
                    <a href="https://bslthemes.com/product/ruizarch-react-nextjs-architecture-template/#item-description__changelog" target='_blank'>
                        <div className="flex flex-col items-center">
                            <i className="fa-solid fa-file-alt text-3xl mb-2"></i>
                            <p className="font-medium">Changelog</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className={`fixed top-13 right-0 h-full w-74 bg-white border-l items-center justify-center z-50 transition-transform duration-500 ${showDemo ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex p-4">
                    <button onClick={() => setShowDemo(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-between p-5 gap-2 overflow-y-auto h-[calc(100%-4rem)]">
                    <div className="flex items-center justify-between gap-4 text-sm uppercase">
                        <button onClick={() => setActiveTab("Related") } className={`px-2 py-1 ${activeTab === "Related" ? "border-b border-black" : ""}`} >Related</button>
                        <button onClick={() => setActiveTab("All") } className={`px-2 py-1 ${activeTab === "All" ? "border-b border-black" : ""}`}>All</button>
                        <button onClick={() => setActiveTab("Version") } className={`px-2 py-1 ${activeTab === "Version" ? "border-b border-black" : ""}`}>Version</button>
                    </div>
                    {activeTab === "Related" && <Related/>}
                    {activeTab === "All" && <All/>}
                    {activeTab === "Version" && <Version/>}
                </div>
            </div>
        </div>
    )
}

export default SideNavbar
