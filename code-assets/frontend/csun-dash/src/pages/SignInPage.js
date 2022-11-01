import Header from "../components/Header"
import Box from '@mui/system/Box'
import React from 'react';


function SignInPage() {
    return (
        <div style={{ backgroundColor: "#1C1C1C", height: '100vh' }}>
            <Header></Header>
            <div style={{ float: "center", marginTop: "200px" }}>
                <Box color="white" bgcolor="red" p={20}>

                    Lets get you signed in

                </Box>
            </div>

        </div>

    )
}


export default SignInPage