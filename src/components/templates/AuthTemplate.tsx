import { SignInForm } from "../organisms/SignInForm"
import { SignUpForm } from "../organisms/SignUpForm"
import { useState } from "react"

export default function AuthTemplate () {
    const [authForm, setAuthForm] = useState<"login" | "register">("login")

    const handleChangeForm = (nextForm: "login" | "register") => {
        setAuthForm(nextForm)
    }

    return (
        <div className="flex justify-center items-center min-h-screen w-full max-w-xs mx-auto">
            { authForm === "login" ? (
                <SignInForm onChangeForm={handleChangeForm}/>
            ) : (
                <SignUpForm onChangeForm={handleChangeForm}/>
            )}
        </div>
    )
}