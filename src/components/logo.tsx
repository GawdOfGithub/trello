import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local"
import { cn } from "@/lib/utils";
const headingFont = localFont({
    src:"../app/(marketing)/font.woff2"
})
export const Logo = ()=>
{
return(
    <Link href="/">
    <Image
      src="/logo.svg"
      alt="Logo"
      width={30}
      height={30}
      className=""

    />
    <p className={cn("text-lg text-neutral-700 pb-1",headingFont.className)}>
     Taskify
    </p>
    </Link>)
}
