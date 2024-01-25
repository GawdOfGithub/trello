"use client"
import { CreateBoard } from "@/actions/create-board/schema"
import { useAction } from "@/hooks/use-action"
import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"
export const Form = ()=>{
    const {execute,fieldErrors} = useAction(CreateBoard,{
        onSuccess:(data)=>{
            console.log(data,"Success");
        },
        onError:(error)=>{
            console.log(error);
        }
    })
    const onSubmit = (formData:FormData) =>{
        const title = formData.get("title") as string
        console.log({title});
        execute({title})
    }
    return(
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
                <FormInput
                id="title"
                label="Board Title"
                errors={fieldErrors}
                />

            </div>
        </form>
    )
}