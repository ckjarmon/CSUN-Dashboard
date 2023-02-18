import { useEffect, useState } from "react"



function CostAnalysis({totalUnits}){
    const [cost, setCost] = useState(0)
    const [units, setUnits] = useState(0)

    useEffect(() => {
        setUnits(totalUnits)
        if(totalUnits > 6.1){
            setCost(2871)
        }else{
            setCost(1665)
        }
    }, [cost, totalUnits])

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={container}>
                <h2 style={{textAlign: "center", borderBottom: "1px solid white", backgroundColor: "red", color: "white"}}>Semester Cost</h2>
                <div style={{display:"flex", justifyContent:"center", gap: "16px", marginTop: "16px"}}>
                    <h3>Units: {units}</h3>
                    <h3>Cost: ${units != 0 ? cost : "0"}</h3>
                </div>
            </div>
        </div>
    )
}

export default CostAnalysis


const container = {
    width: "18vw",
    height: "12vh",
    backgroundColor: "white",
    margin: "12px"
}