import { Link } from "react-router-dom"

export function AuthHeader({type}:{type: "signup" | "signin"}){
    return <div className="px-10">
    <div className="text-4xl font-bold">
        {type =="signup"?"Create an account": "Signin to your account"}
    </div>
    <div className="text-slate-400 mt-4 text-center">
        {type=="signup"? "Alredy have an account?" : "Don't have an account?"}
        <Link to={type=="signup"? "/signin":"/signup"} className="underline ml-2">
            {type=="signup"? "sign in":"sign up"}</Link>
    </div>
    </div>
}