import{a,j as t}from"./app-c2e52a93.js";import{I as c}from"./InputError-dda5b5b1.js";import{I as u}from"./InputLabel-b6c5a941.js";import{M as p}from"./Modal-a9ea5355.js";import{P as f}from"./PrimaryButton-d03adcf2.js";import{T as h}from"./TextInput-aa3fc491.js";import"./transition-a4acc27a.js";function g({showModel:r,submit:s,isDelete:m,data:n,setData:i,errors:o,processing:l,onClick:d}){return a(p,{show:r,children:t("form",{className:"p-10",onSubmit:e=>s(e),children:[m?a("p",{className:"dark:text-slate-100 text-2xl",children:"Yakin hapus akun?"}):a("div",{children:t("div",{children:[a(u,{htmlFor:"name",value:"Nama"}),a(h,{id:"name",name:"name",value:n.name,className:"mt-1 block w-full",isFocused:!0,onChange:e=>i({field:"name",value:e.target.value})}),a(c,{message:o.name,className:"mt-2"})]})}),t("div",{className:"flex items-center justify-end mt-4",children:[a("div",{className:"ml-4 cursor-pointer text-slate-700 dark:text-slate-200",onClick:()=>d("cancel"),disabled:l,children:"Batal"}),a(f,{className:"ml-4",disabled:l,children:m?"Hapus":"Simpan"})]})]})})}export{g as default};
