import Image from "next/image"
import Author from "../assets/author.jpg"
import {FiBookmark} from "react-icons/fi"
import contentImage from "../assets/A-Otkur.jpg"
import Link from "next/link";


function PostCard() {
  return (
    <>
    <Link href={`/post/123`}>
    <div className="flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer mt-3">
    <div className="">
    <div className="flex gap-3 items-center ">
        <div className="grid place-items-center rounded-full overflow-hidden h-[2rem] w-[2rem]">
        <Image className="object-cover " 
        src={Author} 
        alt="author"
        height={50} 
        width={50} />
        </div>
        <div className="font-alkatip_t items-center pt-3">ئابدۇللا ئارىش</div>
    </div>
    <h1 className="font-alkatip_tt text-2xl p-1"> ئابدۇرېھىم ئۆتكۈر كىم؟</h1>
    <p className="text-[#787878] font-alkatip_t p-1"> كۈچلىك رېئالىزملىق روھ ۋە چوڭقۇر تارىخىي ئاساسقا ئىگە ئەسەرلىرى بىلەن جامائەتچىلىككە تونۇلغان تالانتلىق شائىر ۋە يازغۇچى ئابدۇرېھىم ئۆتكۈر </p>     
        <div className="flex items-center justify-between gap-3 font-alkatip_t text-sm text-[#787878] p-1">
        <span className="font-[0.8rem] my-2">1- ئاينىڭ 18 -كۈنى   *  ئوقۇشقا بەش مىنۇت كېتىدۇ  <span className="bg-[#F2F3F2] rounded-full p-1 px-2">تەرجىمىھال</span> </span>
        <span className="cursor-pointer"><FiBookmark className="h-5 w-5" /> </span>
        </div>
    </div>
    <div>
        <Image src={contentImage} height={200} width={200}/>
    </div>
    </div>
    </Link>
    </> 
  )
}

export default PostCard