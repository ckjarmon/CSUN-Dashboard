import React from "react"
import Header from "../components/Header"
import Box from '@mui/system/Box'

const TextInput = props => {
    return(
        <div>
            <input
            type = "text"
            value ={props.value}
            onChange={event =>console.log("value changed!")}
            />
            </div>
    )
}

const underlineStyle = {textDecorationLine: 'underline' }


function SignInPage() {
    return (
        <div style={{ backgroundColor: "#1C1C1C", height: '100vh' }}>
            <Header></Header>
            <div style={{ float: "center", marginTop: "20%" }}>
                <Box color="white" bgcolor="red" p={20}>
                    Let's get you signed in 
                    <Box>
                    <div style = {{float: "right"}}>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                     <div style = {underlineStyle}>Forgot your password?</div>
                    </div>
                    </Box>
                </Box>
            </div>
        </div>

    )
}



export default SignInPage