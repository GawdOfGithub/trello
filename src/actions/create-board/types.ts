import {z} from "zod"
import { Boarding } from "@prisma/client"
import { ActionState } from "@/lib/create-safe-action"
import { CreateBoard } from "./schema"


export type InputType = z.infer<typeof CreateBoard>
export type ReturnType = ActionState<InputType,Boarding>