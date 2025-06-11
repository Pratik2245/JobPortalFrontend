import { ActionIcon, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CalendarDays, Clock, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { DateInput, PickerControl, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";

const TalentCard = (props: any) => {
  const ref = useRef<HTMLInputElement>(null);
  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <Clock size={16} />
    </ActionIcon>
  );
  const [value, setValue] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col gap-2 just rounded-2xl bg-[#3d3d3d] p-4 w-78 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#ffd149">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="">
            <img
              className="h-10 rounded-full"
              src={`/${props.image}.png`}
              alt=""
            />
          </div>
          <div className="">
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs text-[#b0b0b0]">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <Heart className="cursor-pointer" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 [&>span]:py-1 [&>span]:bg-[#454545] [&>span]:text-[#ffbd20] [&>span]:rounded-lg text-xs [&>span]:px-2 mb-1">
        {props.topSkills?.map((skill: string, index: number) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

      <Text
        className="!text-xs !text-[#b0b0b0] !mb-3 text-justify "
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider size="xs" color="#4f4f4f" />

      {props.invited ? (
        <div className="flex  gap-1 items-center  text-[#d1d1d1] text-sm ">
          <CalendarDays className="w-5 h-5" /> Interview : August 27,2024 ,10:00
          AM
        </div>
      ) : (
        <div className="flex justify-between mb-2 mt-2">
          <div className="text-[#d1d1d1] text-sm font-semibold">
            {props.expectedCtc}
          </div>
          <div className="flex text-xs gap-0.5 items-center text-[#888888]">
            <MapPin size={15} /> {props.location}
          </div>
        </div>
      )}
      <Divider size="xs" color="#4f4f4f" className="mb-1" />
      <div className=" flex [&>*]:w-1/2 [&>*]:p-1 gap-2">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <Button color="#ffbd20" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div className="">
              {props.schedule ? (
                <Button
                  rightSection={<CalendarDays className="w-5 h-5" />}
                  color="#ffbd20"
                  variant="light"
                  fullWidth
                  onClick={open}
                >
                  Schedule
                </Button>
              ) : (
                <Button color="#ffbd20" variant="light" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
        {props.invited && (
          <>
            <div className="">
              <Button color="#ffbd20" variant="outline" fullWidth>
                Accept
              </Button>
            </div>
            <div className="">
              <Button color="#ffbd20" variant="light" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Scheduled Interview"
        centered
      >
        <div className="flex flex-col gap-3">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            minDate={new Date()}
            placeholder="Enter Date for Interview"
          />
          <TimeInput label="Time" ref={ref} leftSection={pickerControl} />
          <Button color="#ffbd20" variant="light" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
