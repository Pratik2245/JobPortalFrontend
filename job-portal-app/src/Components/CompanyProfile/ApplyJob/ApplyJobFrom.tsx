import {
  Button,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { Paperclip } from "lucide-react";
import { useState } from "react";
import { getBase64 } from "../../../Services/Utilities";
import { applyJob } from "../../../Services/PostJobService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ApplyJobFrom = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const { id } = useParams();
  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume: null,
      coverLetter: "",
    },
    validate: {
      name: isNotEmpty("Name cannot be empty "),
      email: isNotEmpty("Email cannot be empty "),
      phone: isNotEmpty("Phone cannot be empty "),
      website: isNotEmpty("Website cannot be empty "),
      resume: isNotEmpty("Resume cannot be empty "),
    },
  });
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handlePreviewButton = () => {
    form.validate();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!form.isValid()) return;
    setPreview(!preview);
    // console.log(form.getValues());
  };
  const handleSubmit = async () => {
    setSubmit(true);
    let resume: any = await getBase64(form.getValues().resume);
    let applicant = {
      ...form.getValues(),
      applicantId: user.id,
      resume: resume.split(",")[1],
    };

    applyJob(applicant, id)
      .then((res) => {
        setSubmit(false);
        navigate("/job-history");
        toast.success("✅ Application submitted successfully!", {
          position: "top-right",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        setSubmit(false);
        toast.error(err.response.data.errorMessage, {
          position: "top-right",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    // console.log(res);
  };
  return (
    <div>
      <LoadingOverlay
        className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <div className="text-2xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("name")}
            className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            label="Full Name"
            placeholder="Enter Name"
          />{" "}
          <TextInput
            {...form.getInputProps("email")}
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
            {...form.getInputProps("phone")}
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
            {...form.getInputProps("website")}
            label="Personal Website"
            placeholder="Enter URL"
          />
        </div>
        <FileInput
          className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
          withAsterisk
          accept="application/pdf"
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          label="Attach your CV"
          {...form.getInputProps("resume")}
          placeholder="Your CV"
          leftSection={<Paperclip />}
          leftSectionPointerEvents="none"
        />
        <Textarea
          className={`${preview}?"text-[#b0b0b0] font-semibold":""`}
          readOnly={preview}
          {...form.getInputProps("coverLetter")}
          variant={preview ? "unstyled" : "default"}
          withAsterisk
          placeholder="Type Something about yourself...."
          label="Cover Letter"
          autosize
          minRows={3}
        />

        {!preview && (
          <Button onClick={handlePreviewButton} color="#ffbd20" variant="light">
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
  );
};

export default ApplyJobFrom;
