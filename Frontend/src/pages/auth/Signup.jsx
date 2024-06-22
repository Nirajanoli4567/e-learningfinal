import { useState } from "react";
import axios from "axios";
import manImg from "../../assets/images/sign.jpg";
import { PostRequest } from "../../plugins/https";
import baseAxios from "../../plugins/axios";
import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
import { setAuthorizationHeader } from "../../utils/auth.helper";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/modules/auth/action";
import { Button, NumberInput, PasswordInput, TextInput } from "@mantine/core";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await PostRequest("auth/sign-up", {
        username: user.userName,
        password: user.password,
        email: user.email,
        phone: user.phoneNumber,
      });

      navigate("/auth/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="flex items-center h-screen gap-3xl mt-md p-md ">
      <div className="w-1/2">
        <img src={manImg} alt="" />
      </div>
      <div className=" w-1/2 pr-xl ">
        <form onSubmit={submitForm} className="flex flex-col gap-sm">
          <div className="text-center">Signup</div>
          <div className="">
            <label>Username</label>
            <TextInput
              name="userName"
              onChange={inputHandler}
              placeholder="Enter Title"
            />
          </div>{" "}
          <div className="">
            <label>Email</label>
            <TextInput
              name="email"
              onChange={inputHandler}
              placeholder="Enter Title"
            />
          </div>
          <div className="">
            <label>Phone Number</label>
            <TextInput
              name="phoneNumber"
              onChange={inputHandler}
              placeholder="Enter Title"
            />
          </div>
          <div className="">
            <label>Password</label>
            <PasswordInput
              name="password"
              onChange={inputHandler}
              placeholder="Enter password"
            />
          </div>
          <div className="">Forget Password</div>
          <div className="">
            <Button type="submit" className="" color="orange">
              Signup
            </Button>
          </div>
          <div className="">Don't have an account? Please sign up.</div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
