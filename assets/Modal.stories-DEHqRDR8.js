import{B as r}from"./Button-9mtAphOe.js";import{I as x}from"./Icon-CY7ex0Pt.js";import{R as v,P as C,O as E,C as O}from"./index-HZWH4ZGG.js";import{c as n}from"./clsx-B-dksMZM.js";import{R as e,r as m}from"./index-D4H_InIO.js";import"./iframe-DrfhUaOA.js";import"../sb-preview/runtime.js";import"./index-DnMpQ8e1.js";import"./index-HGhNz9tO.js";import"./index-C7hInxnB.js";import"./jsx-runtime-D5HtGlwT.js";import"./index-BGvQA-3y.js";import"./index-DdP30mdx.js";import"./index--4m2dg1r.js";import"./index-Cpou3Pjl.js";import"./Combination-D7VAQ2AB.js";import"./index-gyG8l0M0.js";const c=({isOpen:l,onClose:t,size:s="md",className:o,children:p,...f})=>e.createElement(v,{open:l,onOpenChange:g=>!g&&t()},e.createElement(C,null,e.createElement(E,{className:n("fixed inset-0 z-50 bg-black/50","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=open]:fade-in data-[state=closed]:fade-out")}),e.createElement(O,{className:n("fixed z-50 bg-background p-6 shadow-lg border-border border rounded-lg","left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0","data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95","data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]","data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]","w-full h-full sm:h-auto sm:max-w-[90vw] sm:max-h-[90vh]",{"sm:w-[400px]":s==="sm","sm:w-[500px]":s==="md","sm:w-[600px]":s==="lg"},o),...f},e.createElement(r,{variant:"icon",size:"sm",className:"absolute top-4 right-4","aria-label":"Close",onClick:t},e.createElement(x,{name:"X"})),p)));c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const a=()=>{const[l,t]=m.useState(!1),[s,o]=m.useState("md");return e.createElement("div",{className:"flex flex-row items-center gap-2"},e.createElement(r,{onClick:()=>{t(!0),o("sm")}},"Small"),e.createElement(r,{onClick:()=>{t(!0),o("md")}},"Medium"),e.createElement(r,{onClick:()=>{t(!0),o("lg")}},"Large"),e.createElement(c,{size:s,isOpen:l,onClose:()=>t(!1)},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h2",{className:"text-lg font-semibold"},"Hello World"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id."))))};a.storyName="Modal";const L={title:"Components/Modal"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  return <div className="flex flex-row items-center gap-2">
      <Button onClick={() => {
      setIsOpen(true);
      setSize('sm');
    }}>
        Small
      </Button>

      <Button onClick={() => {
      setIsOpen(true);
      setSize('md');
    }}>
        Medium
      </Button>

      <Button onClick={() => {
      setIsOpen(true);
      setSize('lg');
    }}>
        Large
      </Button>

      <Modal size={size} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Hello World</h2>
          <p className="text-sm text-muted-foreground">
            Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id.
          </p>
        </div>
      </Modal>
    </div>;
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,L as default};
