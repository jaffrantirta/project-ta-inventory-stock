import{j as r,a as e}from"./app-c2e52a93.js";import{D as i}from"./Dropdown-e42d57b0.js";import{P as m}from"./Paginate-6440b45e.js";import{T as n,a as d}from"./TableHeader-c6fdd518.js";import{P as s}from"./PrimaryButton-d03adcf2.js";import"./transition-a4acc27a.js";function b({heads:o,contents:a,onClick:c}){return r("div",{children:[r("p",{className:"font-bold text-lg text-center md:text-left my-3",children:["Total: ",a.total]}),e("div",{className:"overflow-x-auto",children:r("table",{className:"w-full",children:[e("thead",{className:"",children:e("tr",{className:"text-center font-bold text-xl",children:o.map((t,l)=>e(n,{title:t},l))})}),e("tbody",{children:a.data.map((t,l)=>r("tr",{className:"border-b",children:[e(d,{className:"text-center",children:a.from+l}),e(d,{children:t.name}),e(d,{className:"text-center p-0 grid cursor-pointer grid-cols-1 md:grid-cols-1 gap-2",children:r(i,{children:[e(i.Trigger,{children:"..."}),r(i.Content,{children:[e(s,{className:"flex m-1 w-fit justify-center",onClick:()=>c("edit",t),children:"Edit"}),e(s,{className:"flex m-1 w-fit justify-center",onClick:()=>c("delete",t),children:"Hapus"})]})]})})]},l))})]})}),e(m,{contents:a})]})}export{b as default};
