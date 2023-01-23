import Image from "next/image"
import {AiOutlineSearch} from "react-icons/ai"
import {MdMarkEmailUnread} from "react-icons/md"
import {FaJsSquare} from "react-icons/fa"
import {SiReplit} from "react-icons/si"
import {MdQuiz} from "react-icons/md"
import Autor from "../assets/author.jpg"
import Link from "next/link"




function Recomendation() {
  return (
    <div className="h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-2">
        <div>
            <Link href="#" >
                <div className="font-alkatip_tt text-md flex items-center justify-center bg-black text-white my-[2rem] py-[0.6rem] px-[1rem] rounded-full">
                    چەكسىز زىيارەتكە ئېرىشىڭ              
                </div>
            </Link>
        </div>

        <div className="flex gap-[0.6rem] items-center h-[2.4rem] px-[1rem] rounded-full ">
            <AiOutlineSearch className="h-5 w-5"/>
            <input className="font-alkatip_t border-none outline-none w-full  mt-1 p-2" placeholder="ئىزدەڭ" />
        </div>

            <div className="rounded-full overflow-hidden h-[5rem] w-[5rem]">
                  <Image className="object-cover " 
                  src={Autor} 
                  alt="author"
                  height={70} 
                  width={70} />
            </div>
            <h3 className="font-alkatip_t mb-[0.2rem] mt-[1rem] ">ئابدۇللا ئارىش</h3>
            <p className="font-alkatip_t text-[#787878] text-sm ">10 ئەگەشكۈچى </p>
        <div className="flex font-alkatip_t items-center gap-[0.6rem] my-[1rem]">
          <button className="bg-green-700 text-white pt-2 p-1 px-2 rounded-full">ئەگىشىش</button>
          <button className="bg-green-700 text-white p-2 rounded-full"><MdMarkEmailUnread className="w-5 h-5"/></button>
        </div>
        <div className="">
            <h2 className="font-alkatip_tt text-lg">
            تەۋىسسىيەلىك تەرمىلەر
            </h2>
            
            <div className="flex gap-3">
                <div className="flex flex-col my-[1rem] jusfity-center">
                    <div className="flex gap-3">
                      <div className="rounded-full overflow-hidden h-[2rem] w-[2rem]">
                            <Image className="object-cover " 
                            src={Autor} 
                            alt="author"
                            height={30} 
                            width={30} />
                      </div>
                      <h3 className="font-alkatip_t mb-[0.2rem] mt-[0.5rem] ">ئابدۇللا ئارىش</h3>            
                    </div>
                    <h2 className="font-alkatip_tt text-md mt-1">ئابدۇرېھىم ئۆتكۈر كىم؟</h2>
                </div>
                    <div className="overflow-hidden h-[6rem] w-[6rem]">
                            <Image className="object-cover " 
                            src={Autor} 
                            alt="author"
                            height={60} 
                            width={60} /> 
                    </div>
            </div>
        </div>
    </div>
       
   
  )
}

export default Recomendation