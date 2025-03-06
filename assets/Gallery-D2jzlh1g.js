import{r as l,u as v,s as u,j as e}from"./index-BgdXTMqo.js";const k=()=>{const[m,f]=l.useState([]),[j,h]=l.useState([]),[n,i]=l.useState(null),g=v();l.useEffect(()=>{x()},[]);const x=async()=>{const{data:t,error:a}=await u.from("products").select("subcategory").order("subcategory",{ascending:!0}).not("subcategory","is",null);if(a){console.error("Error fetching subcategories:",a);return}const s=Array.from(new Set(t.map(r=>r.subcategory).filter(r=>r!==null)));h(s);const o=s.sort(()=>.5-Math.random()).slice(0,2);p(o)},p=async t=>{const a=t.map(async o=>{const{data:r,error:d}=await u.from("products").select("*").eq("subcategory",o);return d?(console.error(`Error fetching products for ${o}:`,d),[]):[...r||[],...r||[]]}),s=await Promise.all(a);f(s)},y=t=>{g(`/products?subcategory=${t}`)},b=t=>{i(t)},c=()=>{i(null)};return e.jsxs("div",{className:"py-10 mx-auto",style:{padding:"1.5% 10%"},children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-center mb-4",style:{color:"#302c2c"},children:["Showcase Your ",e.jsx("span",{style:{color:"#0E0E55"},children:"Brand"})," with Style"]}),e.jsx("p",{className:"text-center text-lg text-gray-600 mb-8",style:{color:"#302c2c"},children:"Explore our handpicked collections of corporate gifts, tech innovations, and printing solutions crafted to elevate your business and leave a lasting impression."}),m.map((t,a)=>e.jsx("div",{className:"slider-container overflow-hidden relative w-full mb-8",children:e.jsx("div",{className:"flex animate-loop-scroll",style:{animation:a===0?"loop-scroll-left 40s linear infinite":"loop-scroll-right 40s linear infinite"},children:t.map((s,o)=>e.jsx("div",{className:"hover-card relative flex-shrink-0 w-64 mx-4 cursor-pointer",onClick:()=>y(s.subcategory),children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:s.image_url,alt:s.name,className:"w-full h-[300px] object-cover transition-transform duration-800 ease-in-out hover:scale-110",style:{borderRadius:"7px"},onClick:r=>{r.stopPropagation(),b(s.image_url)},loading:"lazy"}),e.jsx("div",{className:"absolute bottom-2 right-2 p-1",style:{width:"fit-content",backgroundColor:"#0E0E55",opacity:"0.9",borderRadius:"5px"},children:e.jsxs("h3",{style:{color:"white",textAlign:"right",fontWeight:"400",fontSize:"15px"},children:["#",s.name]})})]})},`${s.id}-${o}`))})},a)),n&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",onClick:c,children:e.jsxs("div",{className:"relative max-w-3xl max-h-[90vh] overflow-auto",onClick:t=>t.stopPropagation(),children:[e.jsx("img",{src:n,alt:"Selected product",className:"w-full h-auto object-contain"}),e.jsx("button",{className:"absolute top-2 right-2 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300",style:{backgroundColor:"#0E0E55",opacity:"0.9"},onClick:c,children:"×"})]})}),e.jsx("style",{jsx:!0,global:!0,children:`
        @keyframes loop-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes loop-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .slider-container {
          position: relative;
          overflow: hidden;
        }
        .animate-loop-scroll {
          display: flex;
        }
        .slider-container:hover .animate-loop-scroll {
          animation-play-state: paused !important;
        }
      `})]})};export{k as default};
