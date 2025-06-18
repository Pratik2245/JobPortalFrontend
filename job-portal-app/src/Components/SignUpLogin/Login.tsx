import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Login </div>
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
        label="Input label"
        withAsterisk
        placeholder="Input placeholder"
      />

      <Button variant="filled">Sign Up</Button>
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
