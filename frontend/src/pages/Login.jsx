import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/nav/Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (email === "muklasar@admin.com" && password === "123456") {
        localStorage.setItem('email', email)
      navigate("/dashboard/welcome");
    } else {
      toast.error("Email/Password dose not match");
    }
  };

  const loginForm = (
    <>
      {/* <p>Login form</p> */}
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <br />
        <Button
          type="primary"
          block
          shape="round"
          //   icon={<LoginOutlined />}
          size="large"
          onClick={loginHandler}
        >
          Login with Email/Password
        </Button>
      </form>
    </>
  );

  return (
    <div className="">
      <Nav />
      <div className="container mt-5 text-center d-flex align-items-center justify-content-center">
        <div class="card" style={{"width": "30rem"}}>
          <div class="card-body">
            <h2 class="card-title">Login</h2>
            {loginForm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
