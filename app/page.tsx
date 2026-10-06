"use client";
export default function Home() {
  const aff = process.env.NEXT_PUBLIC_AFFILIATE_LINK || "https://deriv.com";
  const appId = process.env.NEXT_PUBLIC_DERIV_APP_ID || "34Bl1hJTr4ta2X3zUN7MN";
  const login = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}`;
  return (
    <div style={{background:"black", color:"white", minHeight:"100vh", padding:"20px", textAlign:"center"}}>
      <h1 style={{color:"red", fontWeight:"bold", fontSize:"30px"}}>APOLLO COPY</h1>
      <h2 style={{fontSize:"38px", marginTop:"60px", fontWeight:"900"}}>Copy Real Traders<br/>Money stays in Deriv</h2>
      <p style={{color:"gray", marginTop:"15px"}}>We use official Deriv API. We never hold your money.</p>
      <div style={{marginTop:"35px"}}>
        <a href={login} style={{background:"red", padding:"16px 26px", borderRadius:"30px", color:"white", textDecoration:"none", marginRight:"12px", fontWeight:"bold"}}>Login with Deriv</a>
        <a href={aff} target="_blank" style={{border:"1px solid white", padding:"16px 26px", borderRadius:"30px", color:"white", textDecoration:"none"}}>Create Account</a>
      </div>
    </div>
  );
}
