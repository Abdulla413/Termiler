import Image from 'next/image';
import BannerImage from "../assets/bannerimage.png";



function Banner() {
  return (
    <>
  <div className='h-max-[10rem] flex items-center justify-center bg-gray-100 border-y-2 border-gray-300 '>
    <div className='max-w-8xl flex-1 flex items-center justify-between gap-10 mx-5'>
      <div className='space-y-4 py-10 flex-[3]'> 
        <h1 className='max-w-xl text-[6rem] font-alkatip_tt'>قىزىقىڭ</h1>
          <h3 className='text-2xl font-alkatip_t'> 
    يازغۇچىلارنىڭ ھەرخىل تېمىدىكى سەرخىل يازمىلىرىنى، پىكىرلىرىنى ۋە تەجىربىلىرىنى بايقاڭ. 
          </h3>
         <button className="bg-black text-white py-2 px-4 rounded-full font-alkatip_t">ئوقۇيمەن</button>
      </div> 
      <Image className="cursor-pointer object-cover" src={BannerImage} alt='banner' width={500} height={400}  />
    </div>
  </div>
    </>

  )
}

export default Banner