import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/ui/card"
import { Label } from "../atoms/ui/label" 
import { Input } from "../atoms/ui/input"
import { Button } from "../atoms/ui/button"

export default function SignInForm () {
    return (
        <div className="flex-1 flex justify-center items-center relative h-screen">
            <Card className="absolute">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Entre com a sua conta</CardDescription>
                </CardHeader>
                <CardContent>
                    <Label>E-mail:</Label>
                    <Input></Input>
                    <Label>Senha:</Label>
                    <Input></Input>
                    <Button className="w-full mt-2">Login</Button>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Label>Não possui uma conta?</Label>
                    <Button variant={"link"}>Registre-se</Button>
                </CardFooter>
            </Card>
        </div>
    )
}