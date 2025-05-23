import{T as f}from"./Toast-CzN3p14D.js";import{r as o,R as n}from"./index-D4H_InIO.js";const u=o.createContext(void 0),g=({options:e,children:m})=>{const[d,i]=o.useState([]),c=t=>{const a=t.id||Math.random().toString(36).substring(2,9);i(r=>[...r,{...t,id:a}])},s=t=>{i(a=>a.filter(r=>r.id!==t))};return n.createElement(u.Provider,{value:{addToast:c,removeToast:s}},m,n.createElement(n.Fragment,null,d.map(t=>{var a,r,l;return n.createElement(f,{open:!0,key:t.id,variant:t.variant??"neutral",message:t.message??"",action:t.action,duration:t.duration??((a=e==null?void 0:e.toast)==null?void 0:a.defaultDuration)??5e3,position:(r=e==null?void 0:e.toast)==null?void 0:r.position,className:(l=e==null?void 0:e.toast)==null?void 0:l.className,onClick:t.onClick,onOpenChange:()=>s(t.id)})})))},b=()=>{const e=o.useContext(u);if(!e)throw new Error("useToastContext must be used within a SpindleProvider");return e};g.__docgenInfo={description:"",methods:[],displayName:"SpindleProvider",props:{options:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  toast?: {
    className?: string;
    defaultDuration?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  };
}`,signature:{properties:[{key:"toast",value:{name:"signature",type:"object",raw:`{
  className?: string;
  defaultDuration?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"defaultDuration",value:{name:"number",required:!1}},{key:"position",value:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}],required:!1}}]},required:!1}}]}},description:""}}};export{g as S,b as u};
