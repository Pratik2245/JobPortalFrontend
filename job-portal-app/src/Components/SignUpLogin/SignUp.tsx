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

const SignUp = () => {
  const [radioValue, setRadioValue] = useState("");

  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput
        withAsterisk
        leftSection={<AtSign style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput
        leftSection={
          <LockKeyhole style={{ width: rem(16), height: rem(16) }} />
        }
        label="Password"
        withAsterisk
        placeholder="Enter Password"
      />
      <PasswordInput
        leftSection={
          <LockKeyhole style={{ width: rem(16), height: rem(16) }} />
        }
        label="Confirm Password"
        placeholder="Enter Confirm Password"
      />
      <Radio.Group
        value={radioValue}
        onChange={setRadioValue}
        name="favoriteFramework"
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
      <Button variant="filled">Sign Up</Button>
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
