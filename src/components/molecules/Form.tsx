import { type Field, LabelInputForm } from "./LabelInputForm"
import { Button } from "../atoms/ui/button"
import { Spinner } from "../atoms/ui/spinner"
import { useState } from "react"
import { CircleCheck } from "lucide-react"

interface FormProps {
    fields: Field[]
    onSubmit: () => Promise<boolean>
    buttonText: string
}

export function Form ({
    fields,
    onSubmit,
    buttonText
} : FormProps) {
    
    const [submitedButton, setSubmitedButton] = useState(false)
    const [doneButton, setDoneButton] = useState(false)

    const handleSubmitedButton = async () => {
        setSubmitedButton(true)
        const success = await onSubmit()
        setSubmitedButton(false)
        if (success) {
            setDoneButton(true)
            setTimeout(() => {
                setDoneButton(false)
            }, 2000)
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmitedButton()
            }}
            className=""
            >
            {fields.map((field, index) => (
                <LabelInputForm key={index} {...field}/>
            ))}

            <Button type="submit" className="w-full mt-2" disabled={submitedButton}>
                {submitedButton && <Spinner />}
                {doneButton && <CircleCheck />}
                {buttonText}
            </Button>

        </form>
    )
}