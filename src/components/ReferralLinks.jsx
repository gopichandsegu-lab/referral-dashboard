import "./ReferralLinks.css"

function ReferralLinks(){
return(
<div>

<h2 className="ref-heading">
Refer Friends And Earn More !!
</h2>

<div className="links-grid">

<div>
<label>Your Referral Link</label>

<div className="copy-box">
<input
readOnly
value="https://gobusiness.com/ref/ABC123"
/>
<button>Copy</button>
</div>

</div>

<div>
<label>Your Referral Code</label>

<div className="copy-box">
<input
readOnly
value="ABC123"
/>
<button>Copy</button>
</div>

</div>

</div>

</div>
)
}

export default ReferralLinks
