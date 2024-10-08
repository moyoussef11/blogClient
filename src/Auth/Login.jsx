import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import login from "./login.json";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BASEURL, LOGIN } from "../api/api";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const cookies = new Cookies();

  // handleForm
  async function submit(e) {
    e.preventDefault();
    if (!email) toast.error("email is required");
    if (!password) {
      toast.error("password is required");
    }
    try {
      let res = await axios.post(`${BASEURL}/${LOGIN}`, {
        email,
        password,
      });
      const { token, user } = res.data;
      cookies.set("token", token);
      cookies.set("user", user);
      nav("/");
    } catch (error) {
      if (error.response?.data.msg) toast.error(error.response.data.msg);
    }
  }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex items-center flex-col sm:flex-row px-4 shadow shadow-[#6C63FF]">
        <div className="w-full md:w-1/2 flex flex-col gap-4 bg-slate-100 px-3 py-5 rounded">
          <h4 className="capitalize font-bold md:text-3xl text-center mb-2">
            login
          </h4>
          <form onSubmit={submit} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="rounded p-2"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Password">Password</label>
              <input
                className="rounded p-2"
                type="password"
                id="Password"
                placeholder="Enter Your Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-[#6C63FF] p-2 rounded text-white">
              Login
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 ">
          <Lottie loop={true} animationData={login} />
        </div>
      </div>
    </div>
  );
};

export default Login;
