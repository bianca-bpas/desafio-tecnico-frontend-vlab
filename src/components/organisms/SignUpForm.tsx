import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/ui/card"
import { Form } from "../molecules/Form"
import { Label } from "../atoms/ui/label"
import { Button } from "../atoms/ui/button"
import { useState } from "react"
import { useAuth } from '@/contexts/AuthContext';
import { Alert, AlertDescription } from "../atoms/ui/alert"

type SignUnFormProps = {
    onChangeForm: (form: "login" | "register") => void
}

export function SignUpForm ({ onChangeForm } : SignUnFormProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showError, setShowError] = useState(false) 
    const [showSuccess, setShowSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { register } = useAuth()

    const handleSubmit = async () => {
        if (password.length < 6) {
            setErrorMessage("A senha deve ter pelo menos 6 caracteres.");
            setShowError(true);
            setTimeout(() => 
                setShowError(false), 3000
            );
            return false;
        }

        const success = await register(name, email, password);
        if (success) {
            setShowSuccess(true);
            setTimeout(() => {
                onChangeForm("login");
            }, 3000);
        } else {
            setErrorMessage("Erro no cadastro. Tente novamente.");
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
        return success;
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
                    {showError && (
                        <Alert variant="destructive" className="mt-4">
                            <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                    )}
                    {showSuccess && (
                        <Alert className="mt-4">
                            <AlertDescription>Cadastro realizado com sucesso! Redirecionando para login...</AlertDescription>
                        </Alert>
                    )}
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