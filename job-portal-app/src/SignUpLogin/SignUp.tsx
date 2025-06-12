import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
