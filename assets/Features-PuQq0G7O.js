import{u as f,j as t,r as g,a as x,m as p,g as h}from"./index-DkiJnqL7.js";const y="/assets/delivery-B5_bLlFm.gif",b="/assets/teamwork-B-oJ_hiR.gif",w=({icon:l,title:n,description:i,index:s})=>{const c=g.useRef(null),m=x(c,{once:!0,amount:.3}),d=(a,r)=>r===0?a.split(/(business gift)/i).map((e,o)=>e.toLowerCase()==="business gift"?t.jsx("span",{style:{color:"#0E0E55"},children:e},o):e):r===1?a.split(/(send gifts in bulk)/i).map((e,o)=>e.toLowerCase()==="send gifts in bulk"?t.jsx("span",{style:{color:"#0E0E55"},children:e},o):e):r===2?a.split(/(automatically)/i).map((e,o)=>e.toLowerCase()==="automatically"?t.jsx("span",{style:{color:"#0E0E55"},children:e},o):e):a;return t.jsxs(p.div,{ref:c,initial:{opacity:0,x:s%2===0?-50:50},animate:m?{opacity:1,x:0}:{opacity:0,x:s%2===0?-50:50},transition:{duration:.8,delay:s*.2,ease:"easeOut"},className:"flex flex-col items-start text-left p-6 bg-white rounded-lg shadow-lg w-full max-w-xs hover:shadow-xl transition-shadow duration-300",style:{borderRadius:"15px"},children:[t.jsx("img",{src:l,alt:`${n} icon`,className:"w-16 h-16 mb-4 object-contain"}),t.jsx("h3",{className:"font-bold mb-2",style:{fontSize:"18px",color:"#302c2c"},children:n}),t.jsx("p",{className:"text-gray-600",style:{fontSize:"16px",color:"#302c2c"},children:d(i,s)})]})},E=()=>{const l=f(),n=[{icon:h,title:"Thousands of Gifts",description:"One vendor of record. Shop our business gift marketplace. We handle all sourcing, vetting, and compliance for you."},{icon:y,title:"Send to Hundreds at Once",description:"State-of-the-art, multi-recipient checkout that makes it easy to send gifts in bulk."},{icon:b,title:"Automate Employee Gifting",description:"Set up gift workflows, milestones, and triggers once, then gifts go out automatically."}];return t.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50",children:[t.jsxs("h1",{className:"font-bold mb-4 text-center text-4xl md:text-5xl lg:text-6xl",style:{color:"#302c2c"},children:["Designed for ",t.jsx("span",{style:{color:"#0E0E55"},children:"Frequent Gifters"})]}),t.jsx("p",{className:"text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl",style:{color:"#302c2c"},children:"Our gifting platform features make recurrent gifting as simple as clicking a button. We take care of the planning, sourcing, customizing, budgeting, storing, and logistics so you can focus on appreciation."}),t.jsx("div",{className:"grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl",children:n.map((i,s)=>t.jsx(w,{icon:i.icon,title:i.title,description:i.description,index:s},s))}),t.jsx("div",{className:"mt-12 flex flex-col sm:flex-row gap-4 justify-center",children:t.jsx("button",{onClick:()=>l("/contact"),className:"px-8 py-3 rounded-full border bg-white text-[#0E0E55] border-[#0E0E55] transition-all duration-300 hover:bg-[#0E0E55] hover:text-white",children:"Contact Us"})})]})};export{E as default};
