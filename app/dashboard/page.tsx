"use client";
import { useEffect, useState } from "react";
export default function Dashboard(){
  const [bal, setBal] = useState("Loading real balance...");
  useEffect(()=>{
    const token = document.cookie.split("; ").find(c=>c.includes("deriv_token="))?.split("=")[1];
    if(!token){ window.location.href="/"; return; }
    const ws = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=1089`);
    ws.onopen = ()=> ws.send(JSON.stringify({authorize: token}));
    ws.onmessage = (e)=>{
      const d = JSON.parse(e.data);
      if(d.msg_type==="authorize") ws.send(JSON.stringify({balance:1}));
      if(d.msg_type==="balance") setBal(d.balance.balance+" "+d.balance.currency);
    };
  },[]);
  return (
    <div style={{background:"black", color:"white", minHeight:"100vh", padding:"20px"}}>
      <h1>Dashboard - REAL DATA</h1>
      <h2 style={{fontSize:"35px", color:"#4ade80"}}>{bal}</h2>
    </div>
  );
}