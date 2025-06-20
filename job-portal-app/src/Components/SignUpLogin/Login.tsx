import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
const Login = () => {
  const loginForm = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(loginForm);
  const handleOnChange = (event: any) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  //handle the submit of the button
  const handleButtonSubmit = async () => {
    try {
      const response = await loginUser(loginData);
      console.log(response); // or response.data depending on your backend
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Login </div>
      <TextInput
        withAsterisk
        value={loginData.email}
        leftSection={<AtSign style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        name="email"
        onChange={handleOnChange}
        placeholder="Your email"
      />
      <PasswordInput
        leftSection={
          <LockKeyhole style={{ width: rem(16), height: rem(16) }} />
        }
        value={loginData.password}
        onChange={handleOnChange}
        label="Password"
        name="password"
        withAsterisk
        placeholder="Enter Password"
      />

      <Button variant="filled" onClick={handleButtonSubmit}>
        Sign Up
      </Button>
      <div className="mx-auto">
        Don't have an account ?
        <Link to="/signup" className="text-[#ffbd20] hover:underline">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
