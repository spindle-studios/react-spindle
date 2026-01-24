import{B as r}from"./Button-DIL49ejJ.js";import{I as x}from"./Icon-DKM_MZHR.js";import{R as v,P as C,O as E,C as O}from"./index-CpERbDRv.js";import{c as n}from"./clsx-B-dksMZM.js";import{R as e,r as m}from"./index-DQDNmYQF.js";import"./iframe-DJsnAtT2.js";import"../sb-preview/runtime.js";import"./index-DbL7VhtL.js";import"./index-DubjsFmy.js";import"./index-Bh7QTw9R.js";import"./jsx-runtime-BBa0EPuc.js";import"./index-ChFn0lD8.js";import"./index-ks_SECD6.js";import"./index-CpMZRsqH.js";import"./index-BvvQoqyP.js";import"./Combination-Cc51ItCx.js";import"./index-BW1PioQb.js";const c=({isOpen:l,onClose:t,size:s="md",className:o,children:p,...f})=>e.createElement(v,{open:l,onOpenChange:g=>!g&&t()},e.createElement(C,null,e.createElement(E,{className:n("fixed inset-0 z-50 bg-black/50","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=open]:fade-in data-[state=closed]:fade-out")}),e.createElement(O,{className:n("fixed z-50 bg-background p-6 shadow-lg border-border border rounded-lg","left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0","data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95","data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]","data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]","w-full h-full sm:h-auto sm:max-w-[90vw] sm:max-h-[90vh]",{"sm:w-[400px]":s==="sm","sm:w-[500px]":s==="md","sm:w-[600px]":s==="lg"},o),...f},e.createElement(r,{variant:"icon",size:"sm",className:"absolute top-4 right-4","aria-label":"Close",onClick:t},e.createElement(x,{name:"X"})),p)));c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const a=()=>{const[l,t]=m.useState(!1),[s,o]=m.useState("md");return e.createElement("div",{className:"flex flex-row items-center gap-2"},e.createElement(r,{onClick:()=>{t(!0),o("sm")}},"Small"),e.createElement(r,{onClick:()=>{t(!0),o("md")}},"Medium"),e.createElement(r,{onClick:()=>{t(!0),o("lg")}},"Large"),e.createElement(c,{size:s,isOpen:l,onClose:()=>t(!1)},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h2",{className:"text-lg font-semibold"},"Hello World"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id."))))};a.storyName="Modal";const L={title:"Components/Modal"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
