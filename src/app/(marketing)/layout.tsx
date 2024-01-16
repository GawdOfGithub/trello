import { Footer } from "../_components/footer"
import { Navbar } from "../_components/navbar"

interface Props {
    children:React.ReactNode
}

const MarketingLayout = ({children}:Props)=>
{
    return(
        <div className="h-full bg-slate-100">
            <Navbar/>
            <main className="pt-40 pb-29 bg-slate-100">{children}</main>
            <Footer/>
        </div>
    )
}
export default MarketingLayout
