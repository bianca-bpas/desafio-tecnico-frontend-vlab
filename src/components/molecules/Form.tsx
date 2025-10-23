import { type Field, LabelInputForm } from "./LabelInputForm"
import { Button } from "../atoms/ui/button"

interface FormProps {
    fields: Field[]
    onSubmit: () => void
    buttonText: string
}

export function Form ({
    fields,
    onSubmit,
    buttonText
} : FormProps) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }}
            className=""
            >
            {fields.map((field, index) => (
                <LabelInputForm key={index} {...field}/>
            ))}

            <Button type="submit" className="w-full mt-2">
                {buttonText}
            </Button>

        </form>
    )
}