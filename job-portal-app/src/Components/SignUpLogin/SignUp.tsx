import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

const SignUp = () => {
  const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "EMPLOYER",
  };
  const [formData, setFormData] = useState(form);
  const [radioValue, setRadioValue] = useState("");

  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setFormData({ ...formData, accountType: event });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleButtonSubmit = () => {
    const response = registerUser(formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(response);
  };
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        withAsterisk
        label="Full Name"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={formData.name}
      />
      <TextInput
        value={formData.email}
        withAsterisk
        name="email"
        leftSection={<AtSign style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        onChange={handleChange}
        placeholder="Your email"
      />
      <PasswordInput
        name="password"
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
      <Button variant="filled" onClick={handleButtonSubmit}>
        Sign Up
      </Button>
      <div className="mx-auto">
        Have and account ?
        <Link to="/login" className="text-[#ffbd20] hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
