import{B as e}from"./Button-DIL49ejJ.js";import{C as u}from"./Card-D4JKBJRj.js";import{u as v}from"./Spindle-SV_589sD.js";import{R as t}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";import"./Toast-BdGac-I-.js";import"./Icon-DKM_MZHR.js";import"./iframe-DJsnAtT2.js";import"../sb-preview/runtime.js";import"./index-DubjsFmy.js";import"./index-Bh7QTw9R.js";import"./index-DbL7VhtL.js";import"./jsx-runtime-BBa0EPuc.js";import"./index-mMbiGhrb.js";import"./index-ChFn0lD8.js";import"./index-BvvQoqyP.js";import"./index-BW1PioQb.js";import"./index-CpMZRsqH.js";import"./index-Cc0hJNjL.js";const p=()=>{const{addToast:a}=v();return s=>{a(s)}},o=()=>{const a=p(),s=()=>{a({variant:"positive",message:"This is a positive toast"})},l=()=>{a({variant:"negative",message:"This is a negative toast"})},c=()=>{a({variant:"neutral",message:"This is a neutral toast"})},m=()=>{a({variant:"action",message:"This is an action toast",action:"Undo",onClick:()=>alert("Action clicked!")})};return t.createElement(u,{className:"w-[400px] flex flex-col gap-4 p-4"},t.createElement("div",{className:"flex flex-col gap-1"},t.createElement("h2",{className:"text-lg font-bold"},"useToast"),t.createElement("h3",{className:"text-sm text-muted-foreground"},"A hook to trigger toasts with different variants and actions.")),t.createElement("div",{className:"flex flex-col gap-2"},t.createElement(e,{variant:"outline",onClick:s},"Positive"),t.createElement(e,{variant:"outline",onClick:l},"Negative"),t.createElement(e,{variant:"outline",onClick:c},"Neutral"),t.createElement(e,{variant:"outline",onClick:m},"Action")))};o.storyName="useToast";const U={title:"Hooks/useToast"};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,n,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
