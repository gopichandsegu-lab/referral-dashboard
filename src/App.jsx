import "./App.css"

import Header from "./components/Header"
import StatsCards from "./components/StatsCards"
import ReferralSummary from "./components/ReferralSummary"
import ReferralLinks from "./components/ReferralLinks"
import ReferralTable from "./components/ReferralTable"
import Footer from "./components/Footer"

function App(){
return(
<>
<Header/>

<div className="dashboard">

<StatsCards/>

<ReferralSummary/>

<ReferralLinks/>

<ReferralTable/>

</div>

<Footer/>

</>
)
}

export default App
