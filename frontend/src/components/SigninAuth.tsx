import { useState } from "react"
import { AuthHeader } from "./AuthHeader"
import { LabbledInput } from "./LabbledInput"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
export function SigninAuth(){
    const navigate = useNavigate();
    type Inputs ={
        email: string,
        password: string
    }
    const [postInput,setPostInput] = useState<Inputs>({
        email:"",
        password:""
    })
    async function sendrequest(){
        try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInput);
        const token = response.data;
        localStorage.setItem("token",token.jwt);
        navigate("/blogs")
        }
        catch(e){
 
        }
     }
    return <div className="flex justify-center  h-screen flex-col">
        <div className="flex justify-center">
        <div>
        <AuthHeader type={"signin"}/>
        <LabbledInput label="Email"  placeholder="jhondoe@example.com" onChange={e=>{
        setPostInput(c=>({
            ...c,
            email: e.target.value
        }))
        }}></LabbledInput>
        <LabbledInput label="Password" type={"password"} placeholder="enter your Password" onChange={e=>{
            setPostInput(c=>({
            ...c,
            password: e.target.value
            }))
        }}></LabbledInput>

        <button onClick={sendrequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Sign in</button>

        </div>
        </div>
    </div>
}
