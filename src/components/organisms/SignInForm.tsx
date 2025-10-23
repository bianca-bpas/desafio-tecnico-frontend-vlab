import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/ui/card"
import { Form } from "../molecules/Form"
import { Label } from "../atoms/ui/label"
import { Button } from "../atoms/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type SignInFormProps = {
    onChangeForm: (form: "login" | "register") => void
}

export function SignInForm ({ onChangeForm } : SignInFormProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {
        setTimeout (() => {
            navigate("/dashboard")
        }, 4000)
    }

    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Entre com a sua conta</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form 
                        fields={[
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
                        buttonText="Entrar"
                    />

                </CardContent>
                <CardFooter className="flex justify-center">
                    <Label>Não possui uma conta?</Label>
                    <Button 
                        variant={"link"}
                        onClick={() => onChangeForm("register")}
                        >Registre-se</Button>
                </CardFooter>
            </Card>
        </div>
    )
}