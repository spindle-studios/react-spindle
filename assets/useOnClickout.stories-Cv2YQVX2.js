import{B as i}from"./Badge-HzO4wXPW.js";import{C as f}from"./Card-DKGsw4s_.js";import{r,R as e}from"./index-D4H_InIO.js";import"./clsx-B-dksMZM.js";const p=(a,o)=>{const t=r.useCallback(d=>{a.map(m=>{var l;return(l=m.current)==null?void 0:l.contains(d.target)}).some(Boolean)||o()},[a,o]);r.useEffect(()=>(window.addEventListener("mousedown",t),()=>{window.removeEventListener("mousedown",t)}),[t])},s=()=>{const a=r.useRef(null),[o,t]=r.useState(!1);return p([a],()=>t(!0)),e.createElement(f,{ref:a,className:"w-[400px] flex flex-col gap-4 p-4 cursor-pointer",onClick:()=>t(!1)},e.createElement("div",{className:"flex flex-col gap-1"},e.createElement("h2",{className:"text-lg font-bold"},"useOnClickout"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Detects clicks outside of the specified elements and triggers a handler.")),e.createElement("div",{className:"flex flex-row gap-2"},e.createElement(i,{variant:o?"outline":"primary"},"Inside"),e.createElement(i,{variant:o?"primary":"outline"},"Outside")))};s.storyName="useOnClickout";const E={title:"Hooks/useOnClickout"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,c,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [clickOutside, setClickOutside] = useState(false);
  useOnClickout([ref], () => setClickOutside(true));
  return <Card ref={ref} className="w-[400px] flex flex-col gap-4 p-4 cursor-pointer" onClick={() => setClickOutside(false)}>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useOnClickout</h2>
        <h3 className="text-sm text-muted-foreground">
          Detects clicks outside of the specified elements and triggers a handler.
        </h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={!clickOutside ? 'primary' : 'outline'}>Inside</Badge>
        <Badge variant={clickOutside ? 'primary' : 'outline'}>Outside</Badge>
      </div>
    </Card>;
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,E as default};
