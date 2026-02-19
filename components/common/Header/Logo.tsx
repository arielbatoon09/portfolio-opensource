"use client"

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="font-custom flex shrink-0 items-center gap-2 text-xl font-semibold transition-colors duration-300 ease-in-out">
      <Image
        className="contrast-[70%] dark:hidden"
        src="/media/ab_logo_pure_black.png"
        alt="Logo"
        width={50}
        height={50}
        priority
      />
      <Image
        className="contrast-[70%] hidden dark:block"
        src="/media/ab_logo_pure_white.png"
        alt="Logo"
        width={50}
        height={50}
        priority
      />
    </Link>
  )
}