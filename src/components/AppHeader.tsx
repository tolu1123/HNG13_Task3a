import Link from "next/link"

function AppHeader() {
  return (
    <div className="w-full">
      <header className="">
        <h1 className="">
          <Link href="/"></Link>
        </h1>
        <nav className="">
          <Link href="/home">HOME</Link>
          <Link href="/headphones">HEADPHONES</Link>
          <Link href="/speakers">SPEAKERS</Link>
          <Link href="/earphones">EARPHONES</Link>
        </nav>
      </header>
    </div>
  )
}

export default AppHeader