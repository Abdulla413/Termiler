import Image from "next/image"
import Logo from "../assets/termilerlogo.png"

const styles = {
    wrapper:"flex justify-center gap-10 p-5 bg-gray-100",
    content:"max-w-7xl flex-1 flex justify-between gap-10",
    logoContainer: "flex items-center flex-start",
    logo:"cursor-pointer object-contain",
    bannerNav:"flex cursor-pointer items-center gap-5 font-alkatip_t",
    accentedButton:"bg-black text-white py-2 px-4 rounded-full"

}

function Header() {
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer} >
        <Image className={styles.logo} src={Logo} alt='author' width={150} />
        </div>
        <div className={styles.bannerNav}>
            <div>ھىكايىلىرىمىز</div>
            <div>ئەزالىق </div>
            <div>تىزىملىتىش</div>
            <div className={styles.accentedButton}>باشلاش</div>
        </div>
      </div>
    </div>
  )
}

export default Header