import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import register from "./register.json";
import { useState } from "react";
import { BASEURL, REGISTER } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  // handleForm
  async function submit(e) {
    e.preventDefault();
    if (!name) {
      toast.error("name is required");
    } else if (name.length < 3) {
      toast.error("name is must be 3 digits or greater");
    }
    if (!email) toast.error("email is required");
    if (!password) {
      toast.error("password is required");
    } else if (password.length < 8) {
      toast.error("password is must be  greater than 8 digits");
    }
    try {
      await axios.post(`${BASEURL}/${REGISTER}`, {
        username: name,
        email,
        password,
      });
      nav("/login");
    } catch (error) {
      if (error.response.data.errors[0].msg)
        toast.error(error.response.data.errors[0].msg);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full flex items-center flex-col md:w-[800px] sm:flex-row px-4 py-3 shadow shadow-[#6C63FF]">
        <div className="w-full md:w-1/2 flex flex-col gap-4 bg-slate-100 px-3 py-5 rounded">
          <h4 className="capitalize font-bold md:text-3xl text-center mb-2">
            register
          </h4>
          <form onSubmit={submit} className="w-full flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="rounded p-2"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="rounded p-2"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Password">Password</label>
              <input
                className="rounded p-2"
                type="password"
                id="Password"
                name="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-[#6C63FF] p-2 rounded text-white">
              register
            </button>
            <p className="text-sm capitalize">
              already have an account{"?"}
              <Link to="/login" className="text-[#6C63FF] font-semibold">
                log in
              </Link>
            </p>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <Lottie loop={true} animationData={register} />
        </div>
      </div>
    </div>
  );
};

export default Register;
