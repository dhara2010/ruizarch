import React from 'react'

function Header() {
    return (
        <div className="fixed flex top-0 z-50 bg-neutral-700 w-full justify-between px-5 py-2.5">
            <div className="flex items-center text-white justify-between">
                <img src="./images/logo.png" alt="logo" className="h-6 w-6" />
                <span className="font-bold text-lg">
                    evanto<span className="font-normal">market</span>
                </span>
            </div>
            <a className="bg-[#82b440] px-5 py-1 rounded-sm duration-300 hover:bg-[#80ad45] text-white text-center text-[15px]" href="https://themeforest.net/checkout/from_item/48905400?license=regular&amp;support=bundle_6month">Buy now</a>
        </div>
    )
}

export default Header
