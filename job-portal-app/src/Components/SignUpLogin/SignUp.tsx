import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { toast } from "react-toastify";
import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signUpValidation } from "../../Services/FormValidation";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "EMPLOYER",
  };
  const [formData, setFormData] = useState<{ [key: string]: string }>(form);
  const [error, setError] = useState<{ [key: string]: string }>(form);
  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setFormData({ ...formData, accountType: event });
      return;
    }
    let name = event.target.name;
    let value = event.target.value;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: signUpValidation(name, value) });
    if (name === "password" && formData.confirmPassword !== "") {
      let err = "";
      if (formData.confirmPassword !== value) err = "Password do not match";
      setError({
        ...error,
        [name]: signUpValidation(name, value),
        confirmPassword: err,
      });
    }
    if (name == "confirmPassword") {
      if (formData.password !== value) {
        setError({ ...error, [name]: "Passwords do not match" });
      } else {
        setError({ ...error, ["confirmPassword"]: "" });
      }
    }
  };

  //navigate to login
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};
    for (let key in formData) {
      if (key == "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signUpValidation(key, formData[key]);
      else if (formData[key] !== formData["password"])
        newFormError[key] = "Password do not match";
      if (newFormError[key]) valid = false;
    }
    if (valid == true) {
      setLoading(true);
      const response = registerUser(formData)
        .then((res) => {
          //setting to blank after successfully registration
          setFormData(form);
          setError(form);

          console.log(res);
          toast.success(
            <div>
              <div className="font-semibold text-black text-base">
                Registered Successfully
              </div>
              <div className="text-sm text-gray-800">
                Redirecting to Login Page...
              </div>
            </div>,
            {
              position: "top-center",
              autoClose: 5000,
              theme: "light",
            }
          );
          setTimeout(() => {
            setLoading(false);
            navigate("/login");
          }, 5000);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(
            <div>
              <div className="font-semibold text-black text-base">
                Registration Failed
              </div>
              <div className="text-sm text-gray-800">
                {err.response.data.errorMessage}
              </div>
            </div>,
            {
              position: "top-center",
              autoClose: 5000,
              theme: "colored",
            }
          );
          console.log(err);
        });
      console.log(response);
    } else {
      const firstError = Object.values(newFormError).find((msg) => msg);
      toast.error(firstError || "Please fix the form errors", {
        position: "top-center",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        className="translate-x-1/2"
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "pink", type: "bars" }}
      />
      <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput
          withAsterisk
          label="Full Name"
          name="name"
          error={error.name}
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.name}
        />
        <TextInput
          value={formData.email}
          withAsterisk
          error={error.email}
          name="email"
          leftSection={<AtSign style={{ width: rem(16), height: rem(16) }} />}
          label="Your email"
          onChange={handleChange}
          placeholder="Your email"
        />
        <PasswordInput
          name="password"
          error={error.password}
          leftSection={
            <LockKeyhole style={{ width: rem(16), height: rem(16) }} />
          }
          value={formData.password}
          label="Password"
          withAsterisk
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <PasswordInput
          name="confirmPassword"
          leftSection={
            <LockKeyhole style={{ width: rem(16), height: rem(16) }} />
          }
          value={formData.confirmPassword}
          onChange={handleChange}
          error={error.confirmPassword}
          label="Confirm Password"
          placeholder="Enter Confirm Password"
        />
        <Radio.Group
          value={formData.accountType}
          onChange={handleChange}
          label="You Are?"
          withAsterisk
        >
          <Group mt="xs" className="flex">
            <Radio
              value="APPLICANT"
              label="Applicant"
              autoContrast
              className="border border-[#454545] p-4  rounded-lg  has-[:checked]:bg-[#ffbd20]/5"
            />
            <Radio
              value="EMPLOYER"
              label="Employer"
              autoContrast
              className="border border-[#454545] p-4  rounded-lg  has-[:checked]:bg-[#ffbd20]/5"
            />
          </Group>
        </Radio.Group>
        <Checkbox
          autoContrast
          label={
            <>
              accept <Anchor>terms and conditions</Anchor>
            </>
          }
        />
        <Button variant="filled" loading={loading} onClick={handleButtonSubmit}>
          Sign Up
        </Button>
        <div className="mx-auto">
          Have and account ?
          <Link
            to="/login"
            onClick={() => {
              setFormData(form);
              setError(form);
            }}
            className="text-[#ffbd20] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
