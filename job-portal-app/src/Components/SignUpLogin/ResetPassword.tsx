import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { rem } from "@mantine/core";
import { changePassword, sentOtp, verifyOtp } from "../../Services/UserService";
import { signUpValidation } from "../../Services/FormValidation";
import { toast } from "react-toastify";
import { useInterval } from "@mantine/hooks";


const ResetPassword = (props:any) => {
  const [email,setEmail]=useState("");
  const[otp,setOtp]=useState(false);
  const[otpLoading,setOtpLoading]=useState(false);
  const[verified,setVerified]=useState(false);
  const [password,setPassword]=useState("");
  const [passwordErr,setPasswordErr]=useState("");
  const[resentLoader,setRecentLoader]=useState(false);
   const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() =>{ 
    if(seconds==0){
      setRecentLoader(false);
      setSeconds(60);
      interval.stop()
    }else{
    setSeconds((s) => s - 1)
    }
  }, 1000);
  const handleOtpSubmit=()=>{
    setOtpLoading(true);
    sentOtp(email).then((res)=>{
      setOtpLoading(false);
      setRecentLoader(true);
      interval.start()
      toast.success(
          <div>
            <div className="font-semibold text-black text-base">
              OTP Sent Successfully
            </div>
            <div className="text-sm text-gray-800">
              Enter OTP to reset
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "light",
          }
        );
      console.log(res.data);
      setOtp(true)}).catch((err)=>{
        console.log(err);
        
        toast.error(
          <div>
            <div className="font-semibold text-black text-base">
              OTP Sending Failed
            </div>
            <div className="text-sm text-white">
              {err.response.data.errorMessage}
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          }
        );
        setOtpLoading(false);
    })
  }
  const handleVerifyOtp=(otp:string)=>{
    console.log(otp);
    //after the otp is entered then we will call the verifyOtp method to verify the otp
    verifyOtp(email,otp).then((res)=>{
      console.log(res.data);
      setVerified(true);
      toast.success('OTP Verified', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }).catch((err)=>{
      console.log(err);
      toast.error(
          <div>
            <div className="font-semibold text-black text-base">
              OTP Verification Failed
            </div>
            <div className="text-sm text-white">
              {err.response.data.errorMessage}
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          }
        );
    })
    
  }
  const resendOtp=()=>{
     if(resentLoader) return;
     handleOtpSubmit();
  }
  const changeEmail=()=>{
    setOtp(false)
    setRecentLoader(false)
    setSeconds(60);
    setVerified(false)
    interval.stop();
  }
  const handleResetPassword=()=>{
    if(passwordErr==""){
    changePassword(email,password).then((res)=>{
      toast.success(
          <div>
            <div className="font-semibold text-black text-base">
              Password Changed
            </div>
            <div className="text-sm text-gray-800">
              Login with new password
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "light",
          }
        );
        setVerified(false);
        setOtp(false)
        setEmail("")
        props.close();
    }).catch((err)=>{
      toast.error(
          <div>
            <div className="font-semibold text-black text-base">
              Invalid Credentials
            </div>
            <div className="text-sm text-white">
              {err.response.data.errorMessage}
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          }
        );
    })
  }else{
    toast.error("Please fix password errors before submitting.", {
    position: "top-center",
    autoClose: 4000,
    theme: "colored",
    });
   }
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
                <Button loading={otpLoading && !otp} variant="filled" onClick={handleOtpSubmit} disabled={email==="" || otp}>
                Submit
                </Button>
                {otp&& <PinInput length={6} size="md" onComplete={handleVerifyOtp} gap="lg" className="mx-auto" type="number" />}
                {otp && !verified && <div className="flex gap-2">
                  <Button autoContrast loading={otpLoading} fullWidth color="#ffbd20"  onClick={resendOtp} variant="filled">
                  {resentLoader?seconds: "Resend"}
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