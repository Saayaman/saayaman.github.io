(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5148:function(e,t,s){Promise.resolve().then(s.bind(s,6640))},6640:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(3827),n=s(4090),i=s(2968),r=s(703),c=s(1920),o=s.n(c),l=s(2156),d=e=>{let{chats:t,handleMessageSend:s,options:i}=e,[c,d]=(0,n.useState)(!0),[u,h]=(0,n.useState)();return(0,a.jsxs)("div",{className:o().assistantContainer,children:[c&&(0,a.jsxs)("div",{className:o().cardContainer,children:[(0,a.jsx)("div",{className:o().chatHeader,children:"Hive Climbing Assistant"}),(0,a.jsxs)("div",{className:o().messages,children:[t.length>0&&t.map((e,t)=>"assistant"===e.role?(0,a.jsx)("div",{className:"".concat(o().chat," ").concat(o().roleAssistant),children:(0,a.jsx)(l.U,{children:e.content})},e.id?e.id:"".concat(t,"-").concat(e.role)):"user"===e.role?(0,a.jsx)("div",{className:"".concat(o().chat," ").concat(o().roleUser),children:(0,a.jsx)(l.U,{children:e.content})},e.id?e.id:"".concat(t,"-").concat(e.role)):void 0),(0,a.jsx)("div",{className:o().chatOptionsContainer,children:i&&i.length>0&&i.map(e=>(0,a.jsx)("div",{onClick:()=>s(e),className:"".concat(o().chat," ").concat(o().chatOptions),children:(0,a.jsx)(l.U,{children:e})},e))})]}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s(u),h("")},className:o().messageForm,children:[(0,a.jsx)("input",{type:"text",className:o().inputMessage,placeholder:"Message...",onChange:e=>h(e.target.value),value:u}),(0,a.jsx)("button",{type:"submit",className:o().submitButton,children:(0,a.jsx)("img",{alt:"chat icon",width:"100%",height:24,src:"/send3.svg"})})]})]}),(0,a.jsx)("button",{className:o().assistantButton,onClick:()=>d(!c),children:(0,a.jsx)(r.default,{alt:"chat icon",width:20,height:20,src:"/chat.svg"})})]})};let u={IN_PROGRESS:"in_progress",QUEUED:"queued",COMPLETED:"completed"};function h(){let[e,t]=(0,n.useState)([]),[s,r]=(0,n.useState)(),[c,o]=(0,n.useState)([]),[l,h]=(0,n.useState)(),_=(0,n.useRef)(),m=["What do I need to know before my first time climbing?","Is Hive North Shore open now?","Can new people go to the hive?","What should I wear to the climbing gym?","What age limits are there for kids? (or) what’s the youngest a child can climb at the hive?"];(0,n.useEffect)(()=>{let a=async()=>{let{content:a,id:n,role:i}=(await _.current.beta.threads.messages.list(s.id)).body.data[0];t([...e,{content:a[0].text.value,id:n,role:i}])};l===u.COMPLETED&&a()},[l]);let g=async()=>{_.current=await new i.ZP({apiKey:"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",dangerouslyAllowBrowser:!0});let e=await _.current.beta.threads.create();r(e);let t=await _.current.beta.threads.runs.create(e.id,{assistant_id:"asst_mYBZbFxnKyUbxdRTyaNITaIX"});await p(t,e.id),o(m)},p=async(e,t)=>{let s;let a=!0;for(;a;)a=(s=(await _.current.beta.threads.runs.retrieve(t,e.id)).status)===u.IN_PROGRESS||s===u.QUEUED,s===u.IN_PROGRESS||s===u.QUEUED?await new Promise(e=>setTimeout(e,1e3)):h(s)};(0,n.useEffect)(()=>{g()},[]);let y=async a=>{o([]);let n=await _.current.beta.threads.messages.create(s.id,{role:"user",content:a}),i=await _.current.beta.threads.runs.create(s.id,{assistant_id:"asst_mYBZbFxnKyUbxdRTyaNITaIX"});t([...e,{content:a,role:"user",id:n.id}]),p(i,s.id)};return(0,a.jsx)(d,{chats:e,handleMessageSend:y,options:c})}},1920:function(e){e.exports={chatHeader:"style_chatHeader__qdiKP",assistantContainer:"style_assistantContainer__ooBg0",messages:"style_messages__db3J1",cardContainer:"style_cardContainer__kG54D",assistantButton:"style_assistantButton__R59zZ",messageForm:"style_messageForm__wfusE",inputMessage:"style_inputMessage__f0ptF",chat:"style_chat__ywUd1",roleAssistant:"style_roleAssistant__Wd7ab",roleUser:"style_roleUser__GvKHb",chatOptionsContainer:"style_chatOptionsContainer__X0mf5",chatOptions:"style_chatOptions__YmIJC",submitButton:"style_submitButton__rCuBN"}}},function(e){e.O(0,[31,971,69,744],function(){return e(e.s=5148)}),_N_E=e.O()}]);