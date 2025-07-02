import { Button, Modal, PinInput, TextInput } from "@mantine/core";
import { AtSign } from "lucide-react";
import { useState } from "react";
import { rem } from "@mantine/core";
import { sentOtp } from "../../Services/UserService";


const ResetPassword = (props:any) => {
  const [email,setEmail]=useState("");
  const[otp,setOtp]=useState(false);
  const[otpLoading,setOtpLoading]=useState(false);
  const [otpInput,setOtpInput]=useState();

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
    
  }
  const resendOtp=()=>{

  }
  const changeEmail=()=>{
    setOtp(false)
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
                {otp && <div className="flex gap-2">
                  <Button autoContrast fullWidth color="#ffbd20"  onClick={resendOtp} variant="filled">
                  Resend
                </Button>
                <Button  variant="outline" color="#ffbd20" fullWidth autoContrast onClick={changeEmail} >
                Change Email
                </Button></div>}
        </div>
      </Modal>
  )
}

export default ResetPassword;