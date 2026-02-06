import React from 'react'

const Img = ({ src, label, head, height }) => {
    return (
        <div className={`relative group w-full overflow-hidden ${height}`}>
            <p className="absolute left-15 bottom-0 -rotate-90 origin-bottom-left uppercase tracking-widest px-5 py-1 bg-[#bcff00] z-30 transition-colors duration-500 group-hover:bg-white group-hover:opcity-100">{label}</p>
            <img src={src} alt="Project" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-full h-50 flex flex-col justify-center items-start px-8 bg-[#bcff00] opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="pl-20">
                    <h3 className="text-2xl font-bold text-black uppercase">{head}</h3>
                    <button className="mt-4 flex items-center gap-3 font-semibold hover:gap-4 transition-all">
                        START A PROJECT
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-white transition-all">
                            <i className='fa-solid fa-arrow-right'></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Img
