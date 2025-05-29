import{B as n}from"./Badge-zIzy1Imd.js";import{C as b}from"./Card-D4JKBJRj.js";import{r,R as e}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";const h=({mobile:s=600,desktop:a=1024}={})=>{const[o,m]=r.useState(!1),[p,u]=r.useState(!1),[f,x]=r.useState(!1);return r.useEffect(()=>{const i=()=>{m(window.innerWidth<s),u(window.innerWidth>=s&&window.innerWidth<a),x(window.innerWidth>=a)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[s,a]),{isMobile:o,isTablet:p,isDesktop:f}},t=()=>{const{isMobile:s,isTablet:a,isDesktop:o}=h();return e.createElement(b,{className:"w-[400px] flex flex-col gap-4"},e.createElement("div",{className:"flex flex-col"},e.createElement("h2",{className:"text-lg font-bold"},"useBreakpoints"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Returns the current breakpoint status based on the screen width.")),e.createElement("div",{className:"flex flex-row gap-2"},e.createElement(n,{variant:s?"primary":"outline"},"Mobile"),e.createElement(n,{variant:a?"primary":"outline"},"Tablet"),e.createElement(n,{variant:o?"primary":"outline"},"Desktop")))};t.storyName="useBreakpoints";const B={title:"Hooks/useBreakpoints"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const {
    isMobile,
    isTablet,
    isDesktop
  } = useBreakpoints();
  return <Card className="w-[400px] flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">useBreakpoints</h2>
        <h3 className="text-sm text-muted-foreground">
          Returns the current breakpoint status based on the screen width.
        </h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={isMobile ? 'primary' : 'outline'}>Mobile</Badge>
        <Badge variant={isTablet ? 'primary' : 'outline'}>Tablet</Badge>
        <Badge variant={isDesktop ? 'primary' : 'outline'}>Desktop</Badge>
      </div>
    </Card>;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,B as default};
