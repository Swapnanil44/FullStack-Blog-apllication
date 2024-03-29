interface labelInput{
    label: string,
    placeholder: string,
    onChange: (e: any)=> void,
    type?: string
   } 
export  function LabbledInput({label,placeholder,onChange,type}: labelInput){
       return <div>
       <label  className="block mb-2 text-xl font-bold text-gray-900 mt-4">{label}</label>
       <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
   </div>}