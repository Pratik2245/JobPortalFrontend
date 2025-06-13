import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] rounded-full">
            <img className="h-7 " src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.title}</div>
            <div className="text-xs text-[#b0b0b0]">
              Apple &#183;{props.location}
            </div>
          </div>
        </div>
        <div className="text-sm">
          {props.startDate} &#45;{props.endDate}
        </div>
      </div>
      <div className="mb-7 text-sm text-justify">{props.description}</div>
      {props.edit && (
        <div className="flex gap-2 mb-2">
          <Button
            onClick={() => setEdit(true)}
            color="#ffbd20"
            variant="outline"
          >
            Edit
          </Button>
          <Button color="red.5" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput setEdit={setEdit} />
  );
};

export default ExpCard;
