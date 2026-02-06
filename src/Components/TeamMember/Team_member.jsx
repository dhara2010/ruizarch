import React from "react";
import { useLocation } from "react-router-dom";

function Team_member() {
    const location = useLocation(); 
    const {img, text, desg} = location.state || {};

    const getSignature = (fullname) => {
        if(!fullname) return "";
        const parts = fullname.split(" ");
        const firstLetter = parts[0]?.charAt(0) || "";
        const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
        return `${firstLetter}.${lastName}`
    }

    return (
         <div className="relative w-full bg-gradient-to-b from-black to-white text-white py-20 z-10">
            <div className="mx-5 lg:mx-28 mt-50 flex flex-col lg:flex-row bg-white text-black shadow-lg p-5 lg:p-15">
                <div className="w-full lg:w-150">
                    <img src={img || "./images/member.jpg"} alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <div className="w-full lg:w-2/3 lg:p-10 flex flex-col justify-center">
                    <p className="uppercase font-bold tracking-wide">{desg || "Project Manager"}</p>
                    <hr className="border-line4 w-15" />
                    <h2 className="text-xl md:text-3xl font-bold mt-5 uppercase">{text || "Charlie Williams"}</h2>
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>Location: Dallas, Texas, USA</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>Experience: 2 Years in the planning industry</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>Phone: + 1 300 3060 30 30</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-8 text-neutral-600 font-medium">
                        <a href="https://www.facebook.com/" target="_blank" className="hover:text-[#bcff00]">Facebook</a>
                        <a href="https://www.twitter.com/" target="_blank" className="hover:text-[#bcff00]">Twitter</a>
                        <a href="https://www.instagram.com/" target="_blank" className="hover:text-[#bcff00]">Instagram</a>
                        <a href="https://www.youtube.com/" target="_blank" className="hover:text-[#bcff00]">YouTube</a>
                    </div>
                    <hr className="my-6 border-line4 w-full" />
                    <p className="text-neutral-600 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <p className="text-2xl lg:text-5xl mt-6" style={{ fontFamily: "Caveat, cursive" }}>{getSignature(text) || "C.Williams"}</p>
                </div>
            </div>
        </div>
    );
}

export default Team_member;
