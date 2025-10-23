import { Input } from "../atoms/ui/input";
import { Label } from "../atoms/ui/label";

export interface Field {
    label: string
    type?: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export function LabelInputForm ({
    label,
    type="text",
    value,
    onChange,
    } : Field) {
    return (
        <div>
            <Label>{label}</Label>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}