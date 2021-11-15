import { useNavigate } from "react-router"

const Login = () => {
    const navigate = useNavigate()
    const handleLogin =()=>{
        navigate('dashboard')
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}

export default Login
