import React, { useEffect, useState } from 'react'


export default function App(){
const [msg, setMsg] = useState('loading...')
useEffect(() => {
fetch("https://devops-test-steel.vercel.app/")
.then(r => r.json())
.then(d => setMsg(d.message + "--" + d.time))
.catch(e => setMsg('error: ' + e.message))
}, [])


return (
<div style={{fontFamily:'Inter, system-ui', padding:20}}>
<h1>Frontend (Vite + React)</h1>
<p>{msg}</p>
</div>
)
}