import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div className="">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/logodgfs.jpg" alt="logo" width={100} height={100} className="rounded-2xl"/>
      </Link>
    </div>
  )
}

export default Logo