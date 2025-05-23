import{B as i}from"./Button-9mtAphOe.js";import{I as h}from"./Icon-CY7ex0Pt.js";import{R as v,P as b,O as x,C as E}from"./index-HZWH4ZGG.js";import{c as n}from"./clsx-B-dksMZM.js";import{R as e,r as l}from"./index-D4H_InIO.js";import"./iframe-DrfhUaOA.js";import"../sb-preview/runtime.js";import"./index-DnMpQ8e1.js";import"./index-HGhNz9tO.js";import"./index-C7hInxnB.js";import"./jsx-runtime-D5HtGlwT.js";import"./index-BGvQA-3y.js";import"./index-DdP30mdx.js";import"./index--4m2dg1r.js";import"./index-Cpou3Pjl.js";import"./Combination-D7VAQ2AB.js";import"./index-gyG8l0M0.js";const c=({isOpen:r,onClose:t,variant:s="left",className:o,children:p,...f})=>e.createElement(v,{open:r,onOpenChange:g=>!g&&t()},e.createElement(b,null,e.createElement(x,{className:n("fixed inset-0 z-50 bg-black/50","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=open]:fade-in data-[state=closed]:fade-out")}),e.createElement(E,{className:n("fixed z-50 bg-background p-6 shadow-lg border-border duration-300","data-[state=open]:animate-in data-[state=closed]:animate-out",{"right-0 inset-y-0 w-full h-full sm:max-w-sm border-l data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right":s==="right","left-0 inset-y-0 w-full h-full sm:max-w-sm border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left":s==="left","bottom-0 inset-x-0 max-h-[90vh] rounded-t-lg border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom":s==="bottom"},o),...f},e.createElement(i,{variant:"icon",size:"sm",className:"absolute top-4 right-4","aria-label":"Close",onClick:t},e.createElement(h,{name:"X"})),p)));c.__docgenInfo={description:"",methods:[],displayName:"Sheet",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'right' | 'left' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const a=()=>{const[r,t]=l.useState(!1),[s,o]=l.useState("left");return e.createElement("div",{className:"flex flex-row items-center gap-2"},e.createElement(i,{onClick:()=>{o("left"),t(!0)}},"Left"),e.createElement(i,{onClick:()=>{o("right"),t(!0)}},"Right"),e.createElement(i,{onClick:()=>{o("bottom"),t(!0)}},"Bottom"),e.createElement(c,{isOpen:r,onClose:()=>t(!1),variant:s},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h2",{className:"text-lg font-semibold"},"Hello World!"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id. Repudiandae porro perferendis nisi voluptatem. Eligendi voluptatibus odio cumque aut ad rerum nam. Inventore aliquam iste necessitatibus voluptates fugiat officiis cumque aut perferendis. At natus quia tenetur voluptatem magni sit suscipit nesciunt nihil."))))};a.storyName="Sheet";const H={title:"Components/Sheet"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<'right' | 'left' | 'bottom'>('left');
  return <div className="flex flex-row items-center gap-2">
      <Button onClick={() => {
      setVariant('left');
      setIsOpen(true);
    }}>
        Left
      </Button>

      <Button onClick={() => {
      setVariant('right');
      setIsOpen(true);
    }}>
        Right
      </Button>

      <Button onClick={() => {
      setVariant('bottom');
      setIsOpen(true);
    }}>
        Bottom
      </Button>

      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} variant={variant}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Hello World!</h2>
          <p className="text-sm text-muted-foreground">
            Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id.
            Repudiandae porro perferendis nisi voluptatem. Eligendi voluptatibus odio cumque aut ad rerum nam. Inventore
            aliquam iste necessitatibus voluptates fugiat officiis cumque aut perferendis. At natus quia tenetur
            voluptatem magni sit suscipit nesciunt nihil.
          </p>
        </div>
      </Sheet>
    </div>;
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const L=["Default"];export{a as Default,L as __namedExportsOrder,H as default};
