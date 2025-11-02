import Link from "next/link"
import Logo from "@/assets/logo.svg"
import Cart from "@/assets/carts.svg"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function AppHeader() {
  return (
    <div className="w-full top-0 z-9999 font-manrope">
      <div className="container px-5 py-2 border-b border-[#979797] sm:border-0">
        <header className="w-full text-white flex justify-between items-center sm:border-b sm:border-[#979797]">
          <h1 className="">
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </h1>
          <nav className="hidden lg:flex gap-[2.12rem] uppercase text-[0.8125rem]/[192.308%] tracking-[0.125rem] font-bold text-white">
            <Link href="/home" className="hover:text-orange">HOME</Link>
            <Link href="/headphones" className="hover:text-orange">HEADPHONES</Link>
            <Link href="/speakers" className="hover:text-orange">SPEAKERS</Link>
            <Link href="/earphones" className="hover:text-orange">EARPHONES</Link>
          </nav>

          <Button className="bg-transparent hover:bg-transparent focus:bg-transparent p-0! flex justify-end">
            <Image src={Cart} alt="Cart" />
          </Button>
        </header>
      </div>
    </div>
  )
}

export default AppHeader