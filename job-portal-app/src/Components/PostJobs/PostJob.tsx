import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { toast } from "react-toastify";
import { postJob } from "../../Services/PostJobService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostJob = () => {
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      jobTitle: "",
      company: "",
      experience: "",
      jobType: "",
      location: "",
      packageOffered: "",
      skillsRequired: [],
      about: "",
      description: content,
    },
    validate: {
      jobTitle: isNotEmpty("this field is required"),
      company: isNotEmpty("this field is required"),
      experience: isNotEmpty("this field is required"),
      jobType: isNotEmpty("this field is required"),
      location: isNotEmpty("this field is required"),
      packageOffered: isNotEmpty("this field is required"),
      skillsRequired: isNotEmpty("this field is required"),
      description: isNotEmpty("this field is required"),
      about: isNotEmpty("this field is required"),
    },
  });
  // console.log(form);
  const handlePostJobs = async () => {
    if (!form.isValid()) {
      return;
    }
    console.log(form.getValues());
    const res = await postJob({
      ...form.getValues(),
      postedBy: user.id,
      jobStatus: "ACTIVE",
    });
    if (res.status === 200 || res.status === 201) {
      toast.success(
        <div>
          <div className="font-semibold text-black text-base">Success</div>
          <div className="text-sm text-gray-800">Job Posted Successfully</div>
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
        }
      );
      setTimeout(() => {
        navigate(`/posted-jobs/${res.data.id}`);
      }, 3000);
    }
  };
  const handleDraftJobs = async () => {
    await postJob({
      ...form.getValues(),
      postedBy: user.id,
      jobStatus: "DRAFT",
    })
      .then((res) => {
        toast.success(
          <div>
            <div className="font-semibold text-black text-base">Success</div>
            <div className="text-sm text-gray-800">
              Job Drafted Successfully
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
          }
        );
        setTimeout(() => {
          navigate(`/posted-jobs/${res.data.id}`);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  const select = fields;
  return (
    <div className="w-4/5 m-auto">
      <div className="text-2xl font-semibold mb-5">Post Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="jobTitle" {...select[0]} />
          <SelectInput form={form} name="company" {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="experience" {...select[2]} />
          <SelectInput form={form} name="jobType" {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="location" {...select[4]} />
          <NumberInput
            {...form.getInputProps("packageOffered")}
            min={1}
            max={300}
            clampBehavior="strict"
            name="Enter Salary"
            {...select[5]}
          />
        </div>
        <TagsInput
          {...form.getInputProps("skillsRequired")}
          withAsterisk
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
          clearable
          label="Skills"
          placeholder="Enter Skill"
        />
        <Textarea
          {...form.getInputProps("about")}
          withAsterisk
          className="font-semibold"
          label="About"
          placeholder="Enter About Job"
          minRows={3}
          autosize
        />
        <div className="[&_button[data-active='true']]:!text-[#ffbd20] [&_button[data-active='true']]:!bg-[#ffbd20]/20">
          <div className="text-xl font-semibold mb-3">
            Job Description <span className="text-red-500">*</span>
          </div>
          <TextEditor form={form} />
        </div>
        <div className="flex   gap-4">
          <Button onClick={handlePostJobs} color="#ffbd20" variant="light">
            Publish a Job
          </Button>
          <Button onClick={handleDraftJobs} color="#ffbd20" variant="outline">
            Save As Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
