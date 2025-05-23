import{B as e}from"./Button-9mtAphOe.js";import{C as u}from"./Card-DKGsw4s_.js";import{u as v}from"./Spindle-BQgV5paE.js";import{R as t}from"./index-D4H_InIO.js";import"./clsx-B-dksMZM.js";import"./Toast-CzN3p14D.js";import"./Icon-CY7ex0Pt.js";import"./iframe-DrfhUaOA.js";import"../sb-preview/runtime.js";import"./index-HGhNz9tO.js";import"./index-C7hInxnB.js";import"./index-DnMpQ8e1.js";import"./jsx-runtime-D5HtGlwT.js";import"./index-t_-pYcMr.js";import"./index-BGvQA-3y.js";import"./index-Cpou3Pjl.js";import"./index-gyG8l0M0.js";import"./index--4m2dg1r.js";import"./index-DFZj4_xT.js";const p=()=>{const{addToast:a}=v();return s=>{a(s)}},o=()=>{const a=p(),s=()=>{a({variant:"positive",message:"This is a positive toast"})},l=()=>{a({variant:"negative",message:"This is a negative toast"})},c=()=>{a({variant:"neutral",message:"This is a neutral toast"})},m=()=>{a({variant:"action",message:"This is an action toast",action:"Undo",onClick:()=>alert("Action clicked!")})};return t.createElement(u,{className:"w-[400px] flex flex-col gap-4 p-4"},t.createElement("div",{className:"flex flex-col gap-1"},t.createElement("h2",{className:"text-lg font-bold"},"useToast"),t.createElement("h3",{className:"text-sm text-muted-foreground"},"A hook to trigger toasts with different variants and actions.")),t.createElement("div",{className:"flex flex-col gap-2"},t.createElement(e,{variant:"outline",onClick:s},"Positive"),t.createElement(e,{variant:"outline",onClick:l},"Negative"),t.createElement(e,{variant:"outline",onClick:c},"Neutral"),t.createElement(e,{variant:"outline",onClick:m},"Action")))};o.storyName="useToast";const U={title:"Hooks/useToast"};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,n,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const toast = useToast();
  const showPositiveToast = () => {
    toast({
      variant: 'positive',
      message: 'This is a positive toast'
    });
  };
  const showNegativeToast = () => {
    toast({
      variant: 'negative',
      message: 'This is a negative toast'
    });
  };
  const showNeutralToast = () => {
    toast({
      variant: 'neutral',
      message: 'This is a neutral toast'
    });
  };
  const showActionToast = () => {
    toast({
      variant: 'action',
      message: 'This is an action toast',
      action: 'Undo',
      onClick: () => alert('Action clicked!')
    });
  };
  return <Card className="w-[400px] flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useToast</h2>
        <h3 className="text-sm text-muted-foreground">A hook to trigger toasts with different variants and actions.</h3>
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={showPositiveToast}>
          Positive
        </Button>
        <Button variant="outline" onClick={showNegativeToast}>
          Negative
        </Button>
        <Button variant="outline" onClick={showNeutralToast}>
          Neutral
        </Button>
        <Button variant="outline" onClick={showActionToast}>
          Action
        </Button>
      </div>
    </Card>;
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,U as default};
