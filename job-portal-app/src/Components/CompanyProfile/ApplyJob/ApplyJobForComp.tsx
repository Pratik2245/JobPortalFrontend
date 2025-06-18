import {
  Divider,
  NumberInput,
  FileInput,
  TextInput,
  Textarea,
  Button,
  Notification,
  LoadingOverlay,
} from "@mantine/core";
import { Check, Paperclip } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobForComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const handlePreviewButton = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubmit = () => {
    setSubmit(true);
    let x = 3;
    setInterval(() => {
      x--;
      setCount(x);
      if (x == 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <div className="flex justify-between mb-2">
          <div className="flex gap-2 items-center ">
            <div className="bg-[#454545] p-2 rounded-xl">
              <img className="h-14" src={`/Icons/Google.png`} alt="" />
            </div>
            <div className="">
              <div className="font-semibold text-2xl">Software Engineer</div>
              <div className="text-lg text-[#b0b0b0]">
                Google &bull;3 Days Ago &bull;48 Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <div className="text-2xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="Full Name"
              placeholder="Enter Name"
            />{" "}
            <TextInput
              className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="Email"
              placeholder="Enter Email"
            />{" "}
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="Phone No"
              placeholder="Enter Phone Number"
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
            />
            <TextInput
              className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              withAsterisk
              label="Personal Website"
              placeholder="Enter URL"
            />
          </div>
          <FileInput
            className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            label="Attach your CV"
            placeholder="Your CV"
            leftSection={<Paperclip />}
            leftSectionPointerEvents="none"
          />
          <Textarea
            className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            placeholder="Type Something about yourself...."
            label="Cover Letter"
            autosize
            minRows={3}
          />

          {!preview && (
            <Button
              onClick={handlePreviewButton}
              color="#ffbd20"
              variant="light"
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-2">
              <Button
                fullWidth
                onClick={handlePreviewButton}
                color="#ffbd20"
                variant="light"
              >
                Edit
              </Button>
              <Button
                fullWidth
                onClick={handleSubmit}
                color="#ffbd20"
                variant="outline"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        className={`z-[1001] !border-[#ffbd20] transition duration-300 ease-in-out !fixed top-0 left-[35%]  ${
          submit ? "translate-y-0" : "-translate-y-25"
        }`}
        withBorder
        icon={<Check />}
        color="teal"
        title="Application Submitted"
        mt="md"
      >
        Redirecting to you dashboard in {count} seconds........
      </Notification>
    </>
  );
};

export default ApplyJobForComp;
