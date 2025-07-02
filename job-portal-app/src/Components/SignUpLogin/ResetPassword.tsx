import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { rem } from "@mantine/core";
import { sentOtp, verifyOtp } from "../../Services/UserService";
import { signUpValidation } from "../../Services/FormValidation";


const ResetPassword = (props:any) => {
  const [email,setEmail]=useState("");
  const[otp,setOtp]=useState(false);
  const[otpLoading,setOtpLoading]=useState(false);
  const[verified,setVerified]=useState(false);
  const [password,setPassword]=useState("");
  const [passwordErr,setPasswordErr]=useState("");
  const handleOtpSubmit=()=>{
    setOtpLoading(true);
    sentOtp(email).then((res)=>{
      setOtpLoading(false);
      console.log(res.data);
      setOtp(true)}).catch((err)=>{
        console.log(err);
        setOtpLoading(false);
        throw err;
    })
  }
  const handleVerifyOtp=(otp:string)=>{
    console.log(otp);
    //after the otp is entered then we will call the verifyOtp method to verify the otp
    verifyOtp(email,otp).then((res)=>{
      console.log(res.data);
      setVerified(true);
    }).catch((err)=>{
      console.log(err);
      throw err;
    })
    
  }
  const resendOtp=()=>{

  }
  const changeEmail=()=>{
    setOtp(false)
  }
  const handleResetPassword=()=>{

  }
  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password" centered>
        <div className="flex flex-col gap-3">
          <TextInput
                  withAsterisk
                  value={email}
                  leftSection={<AtSign style={{ width: rem(16), height: rem(16) }} />}
                  label="Email"
                  name="email"
                  onChange={(event)=>setEmail(event.target.value)}
                  placeholder="Your email"
                />
                <Button loading={otpLoading} variant="filled" onClick={handleOtpSubmit} disabled={email==="" || otp}>
                Submit
                </Button>
                {otp&& <PinInput length={6} size="md" onComplete={handleVerifyOtp} gap="lg" className="mx-auto" type="number" />}
                {otp && !verified && <div className="flex gap-2">
                  <Button autoContrast fullWidth color="#ffbd20"  onClick={resendOtp} variant="filled">
                  Resend
                </Button>
                <Button  variant="outline" color="#ffbd20" fullWidth autoContrast onClick={changeEmail} >
                Change Email
                </Button></div>}
                {verified && <PasswordInput
        leftSection={
          <LockKeyhole style={{ width: rem(16), height: rem(16) }} />
        }
        value={password}
        onChange={(e)=>{setPassword(e.target.value); setPasswordErr(signUpValidation("password",e.target.value))}}
        label="Enter New Password"
        name="password"
        error={passwordErr}
        withAsterisk
        placeholder="Enter Password"
      />}
      {verified && <Button onClick={handleResetPassword} autoContrast >Change Password</Button> }
        </div>
      </Modal>
  )
}

export default ResetPassword;