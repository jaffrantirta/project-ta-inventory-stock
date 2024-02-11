import{a as e,_ as f,r as p,j as a,n as h,d as b}from"./app-c2e52a93.js";import{G as x}from"./GuestLayout-c2774f73.js";import{I as n}from"./InputError-dda5b5b1.js";import{I as l}from"./InputLabel-b6c5a941.js";import{P as y}from"./PrimaryButton-d03adcf2.js";import{T as d}from"./TextInput-aa3fc491.js";import"./ApplicationLogo-b0e4221b.js";function w({className:s="",...t}){return e("input",{...t,type:"checkbox",className:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 "+s})}function L({status:s,canResetPassword:t}){const{data:o,setData:m,post:c,processing:u,errors:i,reset:g}=f({email:"",password:"",remember:!1});return p.useEffect(()=>()=>{g("password")},[]),a(x,{children:[e(h,{title:"Log in"}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),a("form",{onSubmit:r=>{r.preventDefault(),c(route("login"))},children:[a("div",{children:[e(l,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:r=>m("email",r.target.value)}),e(n,{message:i.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>m("password",r.target.value)}),e(n,{message:i.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(w,{name:"remember",checked:o.remember,onChange:r=>m("remember",r.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[t&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Forgot your password?"}),e(y,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{L as default};
