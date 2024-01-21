"use client"
import {
Popover,
PopoverContent,
PopoverTrigger,

} from "#/popover"
import {toast} from "sonner"
import { useAction } from "@/hooks/use-action"
import { CreateBoard } from "@/actions/create-board/schema"
import { FormInput } from "./form-input"
import { FormSubmit } from "./form-button"
import  {PopoverClose} from "#/popover"
import { X } from "lucide-react"
import { Button } from "#/button"
interface FormPopoverProps{
    children:React.ReactNode
    side?:"left"|"right"|"top"|"bottom";
    align?:"start"|"center"|"end"
    sideOffSet?:number

}
export const FormPopover = ({
    children,
    side="bottom",
    align,
    sideOffSet=0,
    
    

}:FormPopoverProps)=>{
    const {execute,fieldErrors} = useAction(CreateBoard, {
        onSuccess:(data)=>{
            console.log({data});
            toast.success("Board created")

        },
        onError:(error)=>{
            console.log(error);
            toast.error(error)

        }

    })
    const onSubmit = (formData:FormData)=>
    {
        const title = formData.get("title") as string
        execute({title})

    }
    return(    
    <Popover>
        <PopoverTrigger asChild>
        {children}
        </PopoverTrigger>
        <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffSet}
        >
            <div className="text-sm font-medium text-center text-neutral-600 pb-4">
            Create Board
            </div>
            <PopoverClose asChild>
                <Button
                className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
                variant="ghost"
                >
                    <X className="h-4 w-4"/>

                </Button>
                <form className="space-y-4" action={onSubmit}>
                    <div className="space-y-4">
                    <FormInput
                    id="title"
                    label="Board Title"
                    type="text"
                    errors={fieldErrors}
                    
                    />
                    </div>
                    <FormSubmit className="w-full">
                         Create
                    </FormSubmit>
                </form>

            </PopoverClose>


        </PopoverContent>
    </Popover>)

}