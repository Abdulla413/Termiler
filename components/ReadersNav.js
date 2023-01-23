import SmallLogo from "../assets/termilerlogo.png"
import {HiOutlineHome} from "react-icons/hi"
import {FiBell} from "react-icons/fi"
import {BiBookmarks} from "react-icons/bi"
import {RiArticleLine} from "react-icons/ri"
import {BsPencilSquare} from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"
import Author from "../assets/author.jpg"


function ReadersNav() {
  return (
    <>
      <div className="w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem] ">
          <Link href={`/`}>
            <div className="cursor-pointer">
              <Image src={SmallLogo} className="author" width={50}/>  
            </div>
          </Link>
          <div className="flex-1 flex flex-col justify-center gap-[1.4rem] text-3xl text-[#787878] ">
            <Link href="#"> <HiOutlineHome /> </Link>
            <Link href="#"><FiBell /> </Link>
            <Link href="#"><BiBookmarks /> </Link>
            <Link href="#"><RiArticleLine /> </Link>
            <div className="border-b mt-10">
                <Link href="#"><BsPencilSquare /> </Link>
            </div>
          </div>
          <div className="grid place-items-center rounded-full overflow-hidden h-[2.4rem] w-[2rem]">
              <Image className="object-cover " 
              src={Author} 
              alt="author"
              height={50} 
              width={50} />
          </div>
      </div>
      
    </>
  )
}

export default ReadersNav