import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className=" mt-20 mx-20 py-3 flex justify-around  items-center bg-[#3d3d3d] rounded-xl">
      <div className="text-4xl w-2/5 font-semibold text-[#e7e7e7] text-center">
        Never Wants to Miss Any{" "}
        <span className="text-[#ffbd20]">Job News </span>
      </div>
      <div className="flex items-center gap-4 bg-[#4f4f4f] px-3 py-3 rounded-xl">
        <TextInput
          className="[&_input]:!text-[#e7e7e7] font-semibold"
          variant="unstyled"
          placeholder="name@gmail.com"
          size="xl"
        />
        <Button
          className="rounded-2xl"
          color="#ffbd20"
          size="lg"
          variant="filled"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
