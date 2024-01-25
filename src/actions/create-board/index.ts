"use server"
import {InputType,ReturnType} from "./types"
import { auth } from "@clerk/nextjs"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { createSafeAction } from "@/lib/create-safe-action"
import { CreateBoard } from "./schema"
// ImageString is to be later replaced with ImageId
const handler = async(data:InputType):Promise<ReturnType> =>{
    const {userId,orgId} = auth()
    if(!userId || !orgId ){
        return{
            error:"Unauthorized"
        }
    }
    const {title,image} = data
    const [
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHtml,
        imageUserName


    ] = image.split("|")
    if(!imageId || !imageThumbUrl || !imageFullUrl || !imageUserName || !imageLinkHtml){
        return{
            error:"Missing fields.Failed to create board"
        }
    }
    let board
    try{
        board = await db.board.create({
            data:{
                title,
                orgId,
                imageId,
                imageThumbUrl,
                imageFullUrl,
                imageUserName,
                imageLinkHtml,

            }


        })
    }
    catch(error){
        return{
            error:"Failed to create"
        }
    }
    revalidatePath(`/board/${board.id}`)
    return {data:board}

}
export const createBoard = createSafeAction(CreateBoard,handler)