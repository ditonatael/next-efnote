export default function Testimonials(){
    return(
       <div>
            {/* TITLE */}
            <div className="flex flex-col items-center justify-center gap-6">
                <div className="text-5xl font-bold font-mono">
                    Feedbacks
                </div>
                <div className="text-sm font-sans text-gray-500">
                    Feedbacks from musicians who are using Efnote products
                </div>
            </div>
            {/* TESTIMONIALS */}
            <div className="flex justify-between items-center mt-20 pt-5 px-40 bg-white h-[400px]">
                <span className="flex flex-col justify-between items-center gap-5">
                    <img src="/testimonials/echaSoemantri.webp" alt="" 
                        className="object-cover w-24 h-24 mx-2 rounded-full"
                    />
                    <p className="text-sm font-serif text-center">
                        "Since I discovered Efnote, I was amazed by their sound.<br />
                        I use them live and in the studio, and they always<br /> 
                        deliver the best!"
                    </p>
                    <div className="pt-5">
                        Echa Soemantri
                    </div>
                </span>
                <span className="flex flex-col justify-between items-center gap-5">                    
                    <img src="/testimonials/ikmalTobing.webp" alt="" 
                        className="object-cover w-24 h-24 mx-2 rounded-full"
                    />
                    <p className="text-sm font-serif text-center">
                        "Efnote has been a game-changer for me.<br /> 
                        It provides a clean and easy to set<br /> 
                        up one stop solution to get my tone with as<br /> 
                        little worries as possible"
                    </p>
                    <div>
                        Ikmal Tobing
                    </div>
                </span>
                <span className="flex flex-col justify-between items-center gap-5">                    
                    <img src="/testimonials/Yoiqball.webp" alt="" 
                        className="object-cover w-24 h-24 mx-2 rounded-full"
                    />
                    <p className="text-sm font-serif text-center">
                        "Never found an electric drum like efnote.<br /> 
                        it has great features and sound"
                    </p>
                    <div className="pt-10">
                        Yoiqball
                    </div>
                </span>
            </div>
       </div>
    )
}