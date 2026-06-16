import { useEffect,useMemo,useState } from "react"
import "./ReferralTable.css"

const API_URL="https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json"

const names=[
"Pranjal","Paritosh","Palav","Moumita","Mitesh",
"Srinivas","Hritik","ABC","XYZ","BCD",
"Rahul","Priya","Anjali","Rakesh","Neha",
"Arjun","Divya","Karan","Swati","Vivek"
]

function ReferralTable(){

const [data,setData]=useState([])
const [search,setSearch]=useState("")
const [page,setPage]=useState(1)

useEffect(()=>{
fetch(API_URL)
.then(r=>r.json())
.then(d=>{
const updated=d.map((item,index)=>({
id:index+1,
name:names[index%names.length],
service:item.service_name,
date:item.date,
profit:item.profit
}))
setData(updated)
})
},[])

const filtered=useMemo(()=>{
return data.filter(item=>
item.name.toLowerCase().includes(search.toLowerCase())
)
},[data,search])

const perPage=10
const pages=Math.ceil(filtered.length/perPage)

const current=filtered.slice(
(page-1)*perPage,
page*perPage
)

return(
<div>

<div className="table-top">

<div>
Show 10 Entries
</div>

<input
className="table-search"
placeholder="Search"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<div className="table-wrapper">

<table>

<thead>
<tr>
<th>Name</th>
<th>Service Name</th>
<th>Date</th>
<th>Profit</th>
</tr>
</thead>

<tbody>

{current.length===0 ? (
<tr>
<td colSpan="4" className="no-data">
No matching data
</td>
</tr>
):(
current.map(row=>(
<tr key={row.id}>
<td>{row.name}</td>
<td>{row.service}</td>
<td>{row.date}</td>
<td>${row.profit}</td>
</tr>
))
)}

</tbody>

</table>

</div>

<div className="pagination">

<button
disabled={page===1}
onClick={()=>setPage(page-1)}
>
Previous
</button>

{Array.from({length:pages},(_,i)=>(
<button
key={i}
className={page===i+1 ? "active":""}
onClick={()=>setPage(i+1)}
>
{i+1}
</button>
))}

<button
disabled={page===pages}
onClick={()=>setPage(page+1)}
>
Next
</button>

</div>

</div>
)
}

export default ReferralTable
