import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginValidation } from "../../Services/FormValidation";
import { toast } from "react-toastify";
import { loginUser } from "../../Services/UserService";
const Login = () => {
  const loginForm = {
    email: "",
    password: "",
  };
  //for navigation
  const navigate = useNavigate();
  // states for managing the from data
  const [loginData, setLoginData] = useState<{ [key: string]: string }>(
    loginForm
  );
  const [loginError, setLoginError] = useState<{ [key: string]: string }>(
    loginForm
  );

  const handleOnChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginError({ ...loginError, [name]: loginValidation(name, value) });
    setLoginData({ ...loginData, [name]: value });
  };
  const handleButtonSubmit = () => {
    // const valid = true;
    const newError: { [key: string]: string } = {
      email: loginValidation("email", loginData.email),
      password: loginValidation("password", loginData.password),
    };
    setLoginError(newError);
    const valid = !Object.values(newError).some((msg) => msg !== "");
    console.log(valid);
    if (!valid) {
      toast.error(
        <div>
          <div className="font-semibold text-black text-base">
            Enter Valid Details
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        }
      );
      return;
    }
    const response = loginUser(loginData)
      .then((res) => {
        setLoginData(loginForm);
        setLoginError(loginForm);
        toast.success(
          <div>
            <div className="font-semibold text-black text-base">
              login Successfully
            </div>
            <div className="text-sm text-gray-800">
              Redirecting to Home Page...
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "light",
          }
        );
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error) => {
        toast.error(
          <div>
            <div className="font-semibold text-black text-base">
              login Failed
            </div>
            <div className="text-sm text-white">
              {error.response.data.errorMessage}
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          }
        );
      });
  };
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Login </div>
      <TextInput
        withAsterisk
        value={loginData.email}
        leftSection={<AtSign style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        error={loginError.email}
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
        error={loginError.password}
        withAsterisk
        placeholder="Enter Password"
      />

      <Button variant="filled" onClick={handleButtonSubmit}>
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account ?
        <Link
          to="/signup"
          onClick={() => {
            setLoginData(loginForm);
            setLoginError(loginForm);
          }}
          className="text-[#ffbd20] hover:underline"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
