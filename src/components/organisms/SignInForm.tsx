import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/ui/card"
import { Form } from "../molecules/Form"
import { Label } from "../atoms/ui/label"
import { Button } from "../atoms/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from '@/contexts/AuthContext';
import { Alert, AlertDescription } from "../atoms/ui/alert"

type SignInFormProps = {
    onChangeForm: (form: "login" | "register") => void
}

export function SignInForm ({ onChangeForm } : SignInFormProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showDoneButton, setShowDoneButton] = useState(false)
    const [showError, setShowError] = useState(false)
    const { login } = useAuth()!;
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const success = await login(email, password);
        if (success) {
            setShowDoneButton(true);
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
        return success;
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
                        buttonText={showDoneButton ? "Done" : "Entrar"}
                    />
                    {showError && ( 
                        <Alert variant="destructive" className="mt-4">
                            <AlertDescription>Credenciais inválidas</AlertDescription>
                        </Alert>
                    )}
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