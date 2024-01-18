"use server"
import {z} from "zod"
import { db } from "@/lib/db"

const CreateBoard = z.object({
    title:z.string()
})

export default function create({formData:FormData}) {
    const {title}
}