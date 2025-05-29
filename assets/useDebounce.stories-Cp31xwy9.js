import{B as u}from"./Badge-zIzy1Imd.js";import{C as p}from"./Card-D4JKBJRj.js";import{I as i}from"./Input-CYDcQPVO.js";import{r as n,R as e}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";function f(t,o){const[r,s]=n.useState(t);return n.useEffect(()=>{const m=setTimeout(()=>{s(t)},o);return()=>{clearTimeout(m)}},[t,o]),r}const a=()=>{const[t,o]=n.useState(""),r=f(t,500);return e.createElement(p,{className:"w-[400px] flex flex-col gap-4"},e.createElement("div",{className:"flex flex-col"},e.createElement("h2",{className:"text-lg font-bold"},"useDebounce"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Returns a debounced value based on the provided delay.")),e.createElement(i,{type:"text",className:"border p-2 rounded-md",value:t,onChange:s=>o(s.target.value),placeholder:"Type something..."}),e.createElement("div",{className:"flex flex-row gap-2"},e.createElement(u,{variant:"outline"},"Original: ",t||"Empty"),e.createElement(u,{variant:"primary"},"Debounced: ",r||"Empty")))};a.storyName="useDebounce";const E={title:"Hooks/useDebounce"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);
  return <Card className="w-[400px] flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">useDebounce</h2>
        <h3 className="text-sm text-muted-foreground">Returns a debounced value based on the provided delay.</h3>
      </div>

      <Input type="text" className="border p-2 rounded-md" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type something..." />

      <div className="flex flex-row gap-2">
        <Badge variant="outline">Original: {inputValue || 'Empty'}</Badge>
        <Badge variant="primary">Debounced: {debouncedValue || 'Empty'}</Badge>
      </div>
    </Card>;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const N=["Default"];export{a as Default,N as __namedExportsOrder,E as default};
