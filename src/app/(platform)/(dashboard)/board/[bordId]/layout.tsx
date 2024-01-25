import { auth } from "@clerk/nextjs"
import {notFound,redirect} from "next/navigation"
import { db } from "@/lib/db"
import { BoardNavbar } from "./_components/board-navbar"
interface BoardIdLayoutProps{
    children:React.ReactNode
    params:{boardId:string}
}
export async function generateMetaData({
    params
}:{params:
{boardId:string}}) {
    const {orgId} = auth()
    if(!orgId){
        return{
            title:"Board"
        }
    }

}
const BoardIdLayout = async({
    children,
    params
}:BoardIdLayoutProps)=>
{
    const {orgId} = auth()
    if(!orgId){
        redirect("/select-org")
    }
    const board = await db.board.findUnique({
        where:{
            id:params.boardId,
            orgId
        }

    })
    return{
        title:board?.title || "Board"
    }
    if(!board){
        notFound()

    }
return(
    <div
    className="relative h-full bg-no-repeat bg-cover"
    style={{backgroundImage:`url(${board.imageFullUrl})`}}
    >
        <BoardNavbar data={params.boardId}/>
        <div className="absolute inset-0 bg-black/10"/>

        <main className="relative pt-28 h-full">
       {children}
        </main>

    </div>
)
}