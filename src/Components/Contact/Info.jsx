import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation'

function Info() {

    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [div1Ref, isDiv1Visible] = useScrollAnimation();
    const [p2Ref, isP2Visible] = useScrollAnimation();
    const [div2Ref, isDiv2Visible] = useScrollAnimation();
    const [p3Ref, isP3Visible] = useScrollAnimation();
    const [div3Ref, isDiv3Visible] = useScrollAnimation();
    const [p4Ref, isP4Visible] = useScrollAnimation();
    const [div4Ref, isDiv4Visible] = useScrollAnimation();
    const [p5Ref, isP5Visible] = useScrollAnimation();
    const [div5Ref, isDiv5Visible] = useScrollAnimation();
    const [p6Ref, isP6Visible] = useScrollAnimation();
    const [div6Ref, isDiv6Visible] = useScrollAnimation();

    return (
        <div>
            <div className='relative w-full px-4 sm:px-6 md:px-10 xl:px-28 py-20 z-10' >
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                    <div className='flex flex-col gap-8'>
                        <h3 ref={headRef} className={`text-2xl md:text-3xl lg:text-5xl font-bold uppercase transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Info Contact</h3>
                        <p ref={textRef} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters.</p>
                        <div className="mt-10 flex flex-col md:flex-row w-full lg:w-200 gap-5 lg:gap-15">
                            <div className='flex flex-col gap-6'>
                                <div ref={div1Ref} className={`transition-all duration-500 ease-in-out ${isDiv1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h6 className='font-semibold uppercase'>Wills Point</h6>
                                    <hr className='border-line4 w-15 mt-2' />
                                </div>
                                <p ref={p1Ref} className={`text-neutral-600 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div ref={div2Ref} className={`transition-all duration-500 ease-in-out ${isDiv2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h6 className='font-semibold uppercase'>Chicago</h6>
                                    <hr className='border-line4 w-15 mt-2' />
                                </div>
                                <p ref={p2Ref} className={`text-neutral-600 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div ref={div3Ref} className={`transition-all duration-500 ease-in-out ${isDiv3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h6 className='font-semibold uppercase'>Harriman</h6>
                                    <hr className='border-line4 w-15 mt-2' />
                                </div>
                                <p ref={p3Ref} className={`text-neutral-600 transition-all duration-500 ease-in-out ${isP3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-white flex flex-col lg:ml-40 p-10'>
                        <img src="./images/2.jpg" alt="" className='w-100 h-50 object-cover' />
                        <div className="border-line4 py-20 px-10 mt-10">
                            <div className="flex flex-col gap-6">
                                <p ref={p4Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isP4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Headquarters</p>
                                <div ref={div4Ref} className={`transition-all duration-500 ease-in-out ${isDiv4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>USA</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>New York - 1800 Wazee Street</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Suite 300 NY, NY 80202</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mt-10">
                                <p ref={p5Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isP5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Phone</p>
                                <div ref={div5Ref} className={`transition-all duration-500 ease-in-out ${isDiv5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>+7 (200) 600-30-30</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>+7 (200) 200 - 80 - 02</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mt-10">
                                <p ref={p6Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isP6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Email</p>
                                <div ref={div6Ref} className={`transition-all duration-500 ease-in-out ${isDiv6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>info@ruizarch.com</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>hello@ruizarch.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-90 w-full h-screen">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.876364253645!2d-74.01008068459314!3d40.71952697933159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a177c205e3f%3A0xa0d7b21b3bb84b16!2s1800%20Wazee%20St%2C%20New%20York%2C%20NY%2080202%2C%20USA!5e0!3m2!1sen!2sin!4v1635850173142!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Info
