import logo from "../../assets/images/logo.svg";
import loginVector from "../../assets/images/login-vector.svg";
import "./Login.styles.scss";

const Login = () => {
    return (
        <main className="login-container">
            <div className="login-container__left">
            <header>
                <img src={logo} alt="brand-logo"/>
            </header>
                <div>
                    <img src={loginVector} alt="vector"/>
                </div>
            </div>
        <div className="login-container__right">
            <h2>Welcome!</h2>
            <h6>Enter details to login.</h6>
        </div>
        </main>
    )
}

export default Login;