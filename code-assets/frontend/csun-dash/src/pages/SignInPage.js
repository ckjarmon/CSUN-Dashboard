import Header from "../components/Header"
import Footer from '../components/Footer'
import Box from '@mui/system/Box'
import matador from "../matador.png"



const TextInput = props => {
    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={event => console.log("value changed!")}
            />
        </div>
    )
}


function SignInPage() {
    return (
        <div style={{ backgroundColor: "#1C1C1C" }}>
            <Header></Header>
            <span className="font-link">
                <div style={{ marginLeft: "37%" }}>
                    <img src={matador} alt="matador" />
                </div>
                <div>
                    <Box style={{ background: "red", width: "22%", textAlign: 'center', marginLeft: "39%", height: "300px" }}>
                        <br></br>
                        <b>Let's get you signed in</b> <br></br> <br></br>
                        Username: <TextInput></TextInput><br></br>
                        Password: <TextInput></TextInput> <br></br>
                        <div>Forgot Password?</div>
                    </Box>
                </div>
            </span>
        </div>
        
    )
}



export default SignInPage