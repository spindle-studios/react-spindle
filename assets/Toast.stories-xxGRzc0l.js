import{B as n}from"./Button-DIL49ejJ.js";import{T as o}from"./Toast-BdGac-I-.js";import{r as s,R as e}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";import"./Icon-DKM_MZHR.js";import"./iframe-DJsnAtT2.js";import"../sb-preview/runtime.js";import"./index-DubjsFmy.js";import"./index-Bh7QTw9R.js";import"./index-DbL7VhtL.js";import"./jsx-runtime-BBa0EPuc.js";import"./index-mMbiGhrb.js";import"./index-ChFn0lD8.js";import"./index-BvvQoqyP.js";import"./index-BW1PioQb.js";import"./index-CpMZRsqH.js";import"./index-Cc0hJNjL.js";const t=()=>{const[u,a]=s.useState(!1),[O,r]=s.useState(!1),[g,i]=s.useState(!1),[f,c]=s.useState(!1);return e.createElement("div",{className:"flex flex-col items-center justify-center h-screen gap-4"},e.createElement(n,{onClick:()=>a(!0)},"Positive"),e.createElement(n,{onClick:()=>r(!0)},"Negative"),e.createElement(n,{onClick:()=>i(!0)},"Neutral"),e.createElement(n,{onClick:()=>c(!0)},"Action"),e.createElement(o,{open:u,onOpenChange:a,variant:"positive",message:"Your changes were saved successfully."}),e.createElement(o,{open:O,onOpenChange:r,variant:"negative",message:"Something went wrong. Please try again."}),e.createElement(o,{open:g,onOpenChange:i,variant:"neutral",message:"This is some informational message."}),e.createElement(o,{open:f,onOpenChange:c,variant:"action",message:"Deleted the production database.",action:"Undo",onClick:()=>alert("Action button clicked!")}))};t.storyName="Toast";const b={title:"Components/Toast"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);
  return <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button onClick={() => setSuccessOpen(true)}>Positive</Button>
      <Button onClick={() => setErrorOpen(true)}>Negative</Button>
      <Button onClick={() => setInfoOpen(true)}>Neutral</Button>
      <Button onClick={() => setActionOpen(true)}>Action</Button>

      <Toast open={successOpen} onOpenChange={setSuccessOpen} variant="positive" message="Your changes were saved successfully." />

      <Toast open={errorOpen} onOpenChange={setErrorOpen} variant="negative" message="Something went wrong. Please try again." />

      <Toast open={infoOpen} onOpenChange={setInfoOpen} variant="neutral" message="This is some informational message." />

      <Toast open={actionOpen} onOpenChange={setActionOpen} variant="action" message="Deleted the production database." action="Undo" onClick={() => alert('Action button clicked!')} />
    </div>;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,b as default};
