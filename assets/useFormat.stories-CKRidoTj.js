import{B as m}from"./Badge-zIzy1Imd.js";import{C as u}from"./Card-D4JKBJRj.js";import{r as g,R as e}from"./index-DQDNmYQF.js";import"./clsx-B-dksMZM.js";const N=()=>g.useCallback((t,n)=>{const{includeSymbol:s=!0,...l}=n||{},a=s?{style:"currency",currency:"GBP"}:{minimumFractionDigits:2,maximumFractionDigits:2};return new Intl.NumberFormat("en-US",{...a,...l}).format(t)},[]),v=()=>g.useCallback(t=>{let n=t;return t>=1&&(n=t-1),`${Math.floor(n*100)}%`},[]),D=()=>g.useCallback((t,n)=>{const{format:s="DD/MM/YYYY",includeTime:l=!1}=n||{},a=new Date(t),o=a.getDate().toString().padStart(2,"0"),r=(a.getMonth()+1).toString().padStart(2,"0"),c=a.getFullYear(),i=a.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),f=l?` ${i}`:"";switch(s){case"short":return`${a.toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"}).replace(",","")}${f}`;case"long":return`${a.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}).replace(",","")}${f}`;case"MM/DD/YYYY":return`${r}/${o}/${c}${f}`;case"YYYY/MM/DD":return`${c}/${r}/${o}${f}`;default:return`${o}/${r}/${c}${f}`}},[]),F=()=>g.useCallback((t,n)=>{const{format:s="HH:MM"}=n||{},l=new Date(t),a=l.getHours().toString().padStart(2,"0"),o=l.getMinutes().toString().padStart(2,"0"),r=l.getSeconds().toString().padStart(2,"0");switch(s){case"HH:MM:SS":return`${a}:${o}:${r}`;default:return`${a}:${o}`}},[]),E=()=>g.useCallback(t=>{const n=new Date(t),s=new Date,l=n.getTime()-s.getTime(),a=Math.abs(Math.floor(l/1e3)),o=Math.abs(Math.floor(a/60)),r=Math.abs(Math.floor(o/60)),c=Math.abs(Math.floor(r/24)),i=l>0;return c>0?`${i?"in":""} ${c} ${c===1?"day":"days"} ${i?"":"ago"}`:r>0?`${i?"in":""} ${r} ${r===1?"hour":"hours"} ${i?"":"ago"}`:o>0?`${i?"in":""} ${o} ${o===1?"minute":"minutes"} ${i?"":"ago"}`:i?"Soon":"Just now"},[]),y=()=>{const s=60-new Date().getMinutes();return String(s).padStart(2,"0")},d=()=>{const t=N(),n=v(),s=D(),l=F(),a=E(),o=y(),r=new Date,c=new Date(r.getTime()-2*60*60*1e3),i=new Date(r.getTime()+1*24*60*60*1e3);return e.createElement("div",{className:"flex flex-col gap-4 w-[500px]"},e.createElement(u,{className:"p-4 flex flex-col gap-2"},e.createElement("h2",{className:"text-lg font-bold"},"useFormatCurrency"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Formats numbers as currency."),e.createElement("div",{className:"flex gap-2"},e.createElement(m,{variant:"outline"},t(1234.56,{includeSymbol:!1})),e.createElement(m,{variant:"outline"},t(1234.56)),e.createElement(m,{variant:"outline"},t(1234.56,{currencyDisplay:"code"})))),e.createElement(u,{className:"p-4 flex flex-col gap-2"},e.createElement("h2",{className:"text-lg font-bold"},"useFormatPercent"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Formats a number as a percentage."),e.createElement("div",{className:"flex gap-2"},e.createElement(m,{variant:"outline"},n(.85)),e.createElement(m,{variant:"outline"},n(1.25)))),e.createElement(u,{className:"p-4 flex flex-col gap-2"},e.createElement("h2",{className:"text-lg font-bold"},"useFormatDate"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Formats a date in various styles."),e.createElement("div",{className:"flex gap-2"},e.createElement(m,{variant:"outline"},s(r)),e.createElement(m,{variant:"outline"},s(c,{format:"short"})),e.createElement(m,{variant:"outline"},s(c,{includeTime:!0})))),e.createElement(u,{className:"p-4 flex flex-col gap-2"},e.createElement("h2",{className:"text-lg font-bold"},"useFormatTime"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Formats dates into time."),e.createElement("div",{className:"flex gap-2"},e.createElement(m,{variant:"outline"},l(r,{format:"HH:MM"})),e.createElement(m,{variant:"outline"},l(r,{format:"HH:MM:SS"})))),e.createElement(u,{className:"p-4 flex flex-col gap-2"},e.createElement("h2",{className:"text-lg font-bold"},"useFormatRelativeTime"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Formats dates into relative time."),e.createElement("div",{className:"flex gap-2"},e.createElement(m,{variant:"outline"},a(c)),e.createElement(m,{variant:"outline"},a(i)))),e.createElement(u,{className:"p-4 flex flex-col gap-2"},e.createElement("h2",{className:"text-lg font-bold"},"useFormatMinutesUntilNextHour"),e.createElement("h3",{className:"text-sm text-muted-foreground"},"Shows minutes until the next hour."),e.createElement("div",null,e.createElement(m,{variant:"outline"},o," minutes"))))};d.storyName="useFormat";const B={title:"Hooks/useFormat"};d.__docgenInfo={description:"",methods:[],displayName:"Default"};var x,p,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const formatCurrency = useFormatCurrency();
  const formatPercent = useFormatPercent();
  const formatDate = useFormatDate();
  const formatTime = useFormatTime();
  const formatRelativeTime = useFormatRelativeTime();
  const minutesUntilNextHour = useFormatMinutesUntilNextHour();
  const now = new Date();
  const pastDate = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago
  const futureDate = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day in future

  return <div className="flex flex-col gap-4 w-[500px]">
      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatCurrency</h2>
        <h3 className="text-sm text-muted-foreground">Formats numbers as currency.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatCurrency(1234.56, {
            includeSymbol: false
          })}</Badge>
          <Badge variant="outline">{formatCurrency(1234.56)}</Badge>
          <Badge variant="outline">{formatCurrency(1234.56, {
            currencyDisplay: 'code'
          })}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatPercent</h2>
        <h3 className="text-sm text-muted-foreground">Formats a number as a percentage.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatPercent(0.85)}</Badge>
          <Badge variant="outline">{formatPercent(1.25)}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatDate</h2>
        <h3 className="text-sm text-muted-foreground">Formats a date in various styles.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatDate(now)}</Badge>
          <Badge variant="outline">{formatDate(pastDate, {
            format: 'short'
          })}</Badge>
          <Badge variant="outline">{formatDate(pastDate, {
            includeTime: true
          })}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatTime</h2>
        <h3 className="text-sm text-muted-foreground">Formats dates into time.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatTime(now, {
            format: 'HH:MM'
          })}</Badge>
          <Badge variant="outline">{formatTime(now, {
            format: 'HH:MM:SS'
          })}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatRelativeTime</h2>
        <h3 className="text-sm text-muted-foreground">Formats dates into relative time.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatRelativeTime(pastDate)}</Badge>
          <Badge variant="outline">{formatRelativeTime(futureDate)}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatMinutesUntilNextHour</h2>
        <h3 className="text-sm text-muted-foreground">Shows minutes until the next hour.</h3>
        <div>
          <Badge variant="outline">{minutesUntilNextHour} minutes</Badge>
        </div>
      </Card>
    </div>;
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,B as default};
