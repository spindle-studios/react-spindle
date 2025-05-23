import{B as l}from"./Badge-HzO4wXPW.js";import{C as h}from"./Card-DKGsw4s_.js";import{r as y,R as e}from"./index-D4H_InIO.js";import"./clsx-B-dksMZM.js";const n=({key:r,useShift:t,useCtrl:d,useMeta:o,useAlt:K,shouldSkip:m,onPress:c})=>{const i=y.useCallback(async s=>{if(m)return;const k=t===void 0?!0:s.shiftKey===t,P=d===void 0?!0:s.ctrlKey===d,g=o===void 0?!0:s.metaKey===o,x=K===void 0?!0:s.altKey===K;k&&P&&g&&x&&s.code===r&&s.shiftKey===!!t&&s.ctrlKey===!!d&&s.metaKey===!!o&&s.altKey===!!K&&(s.preventDefault(),c())},[r,t,d,o,K,c,m]);y.useEffect(()=>(window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)),[i])},a=()=>{const[r,t]=y.useState(null);return n({key:"KeyK",onPress:()=>t("K")}),n({key:"KeyK",useShift:!0,onPress:()=>t("ShiftK")}),n({key:"KeyK",useCtrl:!0,onPress:()=>t("CtrlK")}),n({key:"KeyK",useMeta:!0,onPress:()=>t("MetaK")}),n({key:"KeyK",useAlt:!0,onPress:()=>t("AltK")}),e.createElement(h,{className:"w-[400px] flex flex-col gap-4 p-4"},e.createElement("div",{className:"flex flex-col gap-1"},e.createElement("h2",{className:"text-lg font-bold"},"useOnKeypress"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Detects key presses with optional modifiers (Shift, Ctrl, Meta, Alt) and triggers a handler.")),e.createElement("div",{className:"flex flex-row gap-2"},e.createElement(l,{variant:r==="K"?"primary":"outline"},e.createElement("kbd",null,"K")),e.createElement(l,{variant:r==="ShiftK"?"primary":"outline"},e.createElement("kbd",null,"Shift + K")),e.createElement(l,{variant:r==="CtrlK"?"primary":"outline"},e.createElement("kbd",null,"Ctrl + K")),e.createElement(l,{variant:r==="MetaK"?"primary":"outline"},e.createElement("kbd",null,"Meta + K")),e.createElement(l,{variant:r==="AltK"?"primary":"outline"},e.createElement("kbd",null,"Alt + K"))))};a.storyName="useOnKeyPress";const w={title:"Hooks/useOnKeyPress"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [keyPressed, setKeyPressed] = useState<'K' | 'ShiftK' | 'CtrlK' | 'MetaK' | 'AltK' | null>(null);
  useOnKeypress({
    key: 'KeyK',
    onPress: () => setKeyPressed('K')
  });
  useOnKeypress({
    key: 'KeyK',
    useShift: true,
    onPress: () => setKeyPressed('ShiftK')
  });
  useOnKeypress({
    key: 'KeyK',
    useCtrl: true,
    onPress: () => setKeyPressed('CtrlK')
  });
  useOnKeypress({
    key: 'KeyK',
    useMeta: true,
    onPress: () => setKeyPressed('MetaK')
  });
  useOnKeypress({
    key: 'KeyK',
    useAlt: true,
    onPress: () => setKeyPressed('AltK')
  });
  return <Card className="w-[400px] flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useOnKeypress</h2>
        <h3 className="text-sm text-muted-foreground">
          Detects key presses with optional modifiers (Shift, Ctrl, Meta, Alt) and triggers a handler.
        </h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={keyPressed === 'K' ? 'primary' : 'outline'}>
          <kbd>K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'ShiftK' ? 'primary' : 'outline'}>
          <kbd>Shift + K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'CtrlK' ? 'primary' : 'outline'}>
          <kbd>Ctrl + K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'MetaK' ? 'primary' : 'outline'}>
          <kbd>Meta + K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'AltK' ? 'primary' : 'outline'}>
          <kbd>Alt + K</kbd>
        </Badge>
      </div>
    </Card>;
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,w as default};
