import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/ui/card"
import { Form } from "../molecules/Form"
import { Label } from "../atoms/ui/label"
import { Button } from "../atoms/ui/button"
import { useState } from "react"

export function SignInForm () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        setTimeout (() => {
            console.log({ email, password })
        }, 2000)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Entre com a sua conta</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form 
                        fields={[
                            {
                                label: "E-mail",
                                type: "email",
                                value: email,
                                onChange: (e) =>setEmail(e.target.value)
                            },
                            {
                                label: "Senha",
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
                    <Button variant={"link"}>Registre-se</Button>
                </CardFooter>
            </Card>
        </div>
    )
}