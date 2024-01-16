import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
export const Navbar = ()=>
{
    return(
        <nav className="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center"> 
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
               <Logo/>
                </div>
            </div>
            <Button size="sm" >
                Create
            </Button>
        </nav>
         
    )
}
export default Navbar