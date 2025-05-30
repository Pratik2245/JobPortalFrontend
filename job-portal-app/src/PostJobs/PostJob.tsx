import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = fields;
  return (
    <div className="w-4/5 m-auto">
      <div className="text-2xl font-semibold mb-5">Post Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput
          withAsterisk
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
          clearable
          label="Skills"
          placeholder="Enter Skill"
        />
        <div className="[&_button[data-active='true']]:!text-[#ffbd20] [&_button[data-active='true']]:!bg-[#ffbd20]/20">
          <div className="text-xl font-semibold mb-3">Job Description</div>
          <TextEditor />
        </div>
        <div className="flex   gap-4">
          <Button color="#ffbd20" variant="light">
            Publish a Job
          </Button>
          <Button color="#ffbd20" variant="outline">
            Save As Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
