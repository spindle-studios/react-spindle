import{B as n}from"./Badge-zIzy1Imd.js";import{B as c}from"./Button-DIL49ejJ.js";import{C as d}from"./Card-D4JKBJRj.js";import{L as p}from"./Loader-D59oTP-b.js";import{r as i,R as t}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";import"./Icon-qrXa-9-p.js";import"./iframe-BWLfmNr-.js";import"../sb-preview/runtime.js";const f=()=>{const s=i.useRef(null);return i.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),i.useCallback(r=>new Promise(o=>{s.current=setTimeout(()=>{o()},r)}),[])},a=()=>{const s=f(),[e,r]=i.useState("idle"),o=i.useCallback(async()=>{if(e==="done")return r("idle");r("waiting"),await s(2e3),r("done")},[e]);return t.createElement(d,{className:"w-[400px] flex flex-col gap-4 p-4"},t.createElement("div",{className:"flex flex-col gap-1"},t.createElement("h2",{className:"text-lg font-bold"},"useTimeout"),t.createElement("h3",{className:"text-sm text-muted-foreground"},"Returns a promise-based timeout that resolves after a specified duration.")),t.createElement(c,{onClick:o,disabled:e==="waiting",className:"self-start",variant:"primary"},e==="idle"&&"Start Timeout (2s)",e==="waiting"&&t.createElement(p,{size:"sm",variant:"secondary"}),e==="done"&&"Reset"),t.createElement("div",{className:"flex flex-row gap-2 items-center"},t.createElement(n,{variant:e==="idle"?"primary":"outline"},"Idle"),t.createElement(n,{variant:e==="waiting"?"primary":"outline"},"Waiting"),t.createElement(n,{variant:e==="done"?"primary":"outline"},"Done")))};a.storyName="useTimeout";const B={title:"Hooks/useTimeout"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const timeout = useTimeout();
  const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle');
  const handleClick = useCallback(async () => {
    if (status === 'done') {
      return setStatus('idle');
    }
    setStatus('waiting');
    await timeout(2000);
    setStatus('done');
  }, [status]);
  return <Card className="w-[400px] flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useTimeout</h2>
        <h3 className="text-sm text-muted-foreground">
          Returns a promise-based timeout that resolves after a specified duration.
        </h3>
      </div>

      <Button onClick={handleClick} disabled={status === 'waiting'} className="self-start" variant="primary">
        {status === 'idle' && 'Start Timeout (2s)'}
        {status === 'waiting' && <Loader size="sm" variant="secondary" />}
        {status === 'done' && 'Reset'}
      </Button>

      <div className="flex flex-row gap-2 items-center">
        <Badge variant={status === 'idle' ? 'primary' : 'outline'}>Idle</Badge>
        <Badge variant={status === 'waiting' ? 'primary' : 'outline'}>Waiting</Badge>
        <Badge variant={status === 'done' ? 'primary' : 'outline'}>Done</Badge>
      </div>
    </Card>;
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,B as default};
