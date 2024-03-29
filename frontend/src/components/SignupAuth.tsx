import { useState } from "react"
import { AuthHeader } from "./AuthHeader"
import { LabbledInput } from "./LabbledInput"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
export function SignupAuth(){
    const navigate = useNavigate();
    type Inputs ={
        name?: string,
        email: string,
        password: string
    }
    const [postInput,setPostInput] = useState<Inputs>({
        name: "",
        email:"",
        password:""
    })

    async function sendrequest(){
       try{
       const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInput);
       const token = response.data;
        localStorage.setItem("token",token.token);
       navigate("/blogs")
       }
       catch(e){
        console.log(e);
       }
    }
    return <div className="flex justify-center  h-screen flex-col">
        <div className="flex justify-center">
        <div>
        <AuthHeader type={"signup"}/>
        <LabbledInput label="Name"  placeholder="Jhon Doe" onChange={e=>{
                setPostInput(c=>({
                    ...c,
                    name: e.target.value
                }))
            }}></LabbledInput>
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
             Sign up</button>

        </div>
        </div>
    </div>
}

