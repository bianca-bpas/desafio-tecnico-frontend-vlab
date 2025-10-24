import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../atoms/ui/card"
import { Button } from "../atoms/ui/button"
import { CirclePlus } from "lucide-react"
import { Label } from "@radix-ui/react-label"
import { Badge } from "../atoms/ui/badge"
import { ArrowDownToLine } from "lucide-react"
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard () {
    const { logout } = useAuth();

    return (
        <div className="p-20">
            <div className="flex items-center justify-between">
                <h1>Meus Cursos</h1>
                <div className="flex gap-4">
                    <Button>
                        <CirclePlus />
                        Novo Curso
                    </Button>
                    <Button onClick={logout} variant={"outline"}>Logout</Button>
                </div>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <Card className="pt-0">
                    <CardHeader className="bg-gradient-to-br from-fuchsia-200 h-30 rounded-t-lg">
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="pb-2">Matemática</CardTitle>
                        <CardDescription className="text-justify">
                            Aulas sobre álgebra linear do curso de graduação em ciência da computação
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="text-sm flex justify-center gap-2">
                        <div className="flex flex-col items-center gap-1">
                            <Label>Início</Label>
                            <Badge variant={"secondary"}>20/10/2025</Badge>
                        </div>
                        <Label>-</Label>
                        <div className="flex flex-col items-center gap-1">
                            <Label>Término</Label>
                            <Badge variant={"secondary"}>23/10/2025</Badge> 
                        </div>
                    </CardFooter>
                        <div className="flex justify-center mt-2">
                            <Button variant={"ghost"} className="w-50 rounded-lg">
                                <ArrowDownToLine />
                                Mais detalhes
                            </Button>
                        </div>
                </Card>
            </div>
        </div>
    )
}