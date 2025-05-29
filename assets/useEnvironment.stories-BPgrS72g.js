import{B as r}from"./Badge-zIzy1Imd.js";import{C as i}from"./Card-D4JKBJRj.js";import{r as l,R as e}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";const c=()=>l.useMemo(()=>{const o=(window==null?void 0:window.location.hostname)==="localhost";return{isDevelopment:o,isProduction:!o}},[location.hostname]),t=()=>{const{isDevelopment:n,isProduction:o}=c();return e.createElement(i,{className:"w-[400px] flex flex-col gap-4"},e.createElement("div",{className:"flex flex-col"},e.createElement("h2",{className:"text-lg font-bold"},"useEnvironment"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Returns an object with the current environment status.")),e.createElement("div",{className:"flex flex-row gap-2"},e.createElement(r,{variant:n?"primary":"outline"},"Development"),e.createElement(r,{variant:o?"primary":"outline"},"Production")))};t.storyName="useEnvironment";const x={title:"Hooks/useEnvironment"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,s,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    isDevelopment,
    isProduction
  } = useEnvironment();
  return <Card className="w-[400px] flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">useEnvironment</h2>
        <h3 className="text-sm text-muted-foreground">Returns an object with the current environment status.</h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={isDevelopment ? 'primary' : 'outline'}>Development</Badge>
        <Badge variant={isProduction ? 'primary' : 'outline'}>Production</Badge>
      </div>
    </Card>;
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,x as default};
