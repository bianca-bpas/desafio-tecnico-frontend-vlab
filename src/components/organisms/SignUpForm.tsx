import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/ui/card"
import { Form } from "../molecules/Form"
import { Label } from "../atoms/ui/label"
import { Button } from "../atoms/ui/button"
import { useState } from "react"

type SignUnFormProps = {
    onChangeForm: (form: "login" | "register") => void
}

export function SignUpForm ({ onChangeForm } : SignUnFormProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        setTimeout (() => {
            console.log({ name, email, password })
        }, 2000)
    }

    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Cadastro</CardTitle>
                    <CardDescription>Crie uma nova conta</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form 
                        fields={[
                            {
                                label: "Nome:",
                                type: "text",
                                value: name,
                                onChange: (e) =>setName(e.target.value)
                            },
                            {
                                label: "E-mail:",
                                type: "email",
                                value: email,
                                onChange: (e) =>setEmail(e.target.value)
                            },
                            {
                                label: "Senha:",
                                type: "password",
                                value: password,
                                onChange: (e) => setPassword(e.target.value)
                            }
                        ]}
                        onSubmit={handleSubmit}
                        buttonText="Cadastrar"
                    />

                </CardContent>
                <CardFooter className="flex justify-center">
                    <Label>Já possui uma conta?</Label>
                    <Button 
                        variant={"link"}
                        onClick={() => onChangeForm("login")}
                        >Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}