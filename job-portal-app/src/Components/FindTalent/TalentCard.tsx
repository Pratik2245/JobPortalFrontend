import { ActionIcon, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CalendarDays, Clock, Heart, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { DateInput, TimeInput } from "@mantine/dates";
import { useEffect, useRef, useState } from "react";
import { getUserData } from "../../Services/ProfileServices";
import { changeAppStatus } from "../../Services/PostJobService";
import { toast } from "react-toastify";

const TalentCard = (props: any) => {
  const { id } = useParams();
  const [applicantData, setApplicantData] = useState<any>({});

  useEffect(() => {
    if (props.applicantId) {
      getUserData(props.applicantId)
        .then((res) => {
          setApplicantData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [props.applicantId]);

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
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<any>("");
  const [opened, { open, close }] = useDisclosure(false);
  const handleOffer = (status: any) => {
    if (!date || !time) return;

    // Convert date string from DateInput to JS Date
    const selectedDate = new Date(date);

    // Extract hours and minutes from your time input (expects "HH:MM")
    const [hours, minutes] = time.split(":").map(Number);

    // Set hours and minutes on the selectedDate
    selectedDate.setHours(hours);
    selectedDate.setMinutes(minutes);
    selectedDate.setSeconds(0);

    // Format as LocalDateTime string (no timezone shift)
    const interViewTime = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(
      2,
      "0"
    )}T${String(selectedDate.getHours()).padStart(2, "0")}:${String(
      selectedDate.getMinutes()
    ).padStart(2, "0")}:00`;
    console.log(interViewTime);
    const payload = {
      id,
      applicantId: props.applicantId,
      interViewTime, // e.g., "2025-08-20T13:04:00"
      applicationStatus: status,
    };
    changeAppStatus(payload)
      .then((res) => {
        toast.success(`✅ Interview scheduled for ${interViewTime}`, {
          position: "top-right",
          autoClose: 5000, // 5s
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        window.location.reload();
      })
      .catch((err) => {
        toast.error(
          `❌ ${err.message || "Something went wrong while scheduling!"}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      });
  };
  const formatBackendDate = (dateString: string): string => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long", // "short" → Aug, "long" → August
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // 12-hour format with AM/PM
    });
  };

  return (
    <div className="flex flex-col gap-2 just rounded-2xl bg-[#3d3d3d] p-4 w-78 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#ffd149">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="">
            <img className="h-10 rounded-full" src={`/avatar.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs text-[#b0b0b0]">
              {applicantData.jobTitle} &#x2022; {applicantData.company}
            </div>
          </div>
        </div>
        <Heart className="cursor-pointer" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 [&>span]:py-1 [&>span]:bg-[#454545] [&>span]:text-[#ffbd20] [&>span]:rounded-lg text-xs [&>span]:px-2 mb-1">
        {applicantData.skills?.map(
          (skill: string, index: number) =>
            index < 4 && <span key={index}>{skill}</span>
        )}
      </div>

      <Text
        className="!text-xs !text-[#b0b0b0] !mb-3 text-justify "
        lineClamp={3}
      >
        {applicantData.about}
      </Text>
      <Divider size="xs" color="#4f4f4f" />

      {props.interviewTime ? (
        <div className="flex  gap-1 items-center  text-[#d1d1d1] text-sm ">
          <CalendarDays className="w-5 h-5" /> Interview :{" "}
          {formatBackendDate(props.interviewTime)}
        </div>
      ) : (
        <div className="flex justify-between mb-2 mt-2">
          <div className="text-[#d1d1d1] text-sm font-semibold">22 LPA</div>
          <div className="flex text-xs gap-0.5 items-center text-[#888888]">
            <MapPin size={15} /> {applicantData.location}
          </div>
        </div>
      )}
      <Divider size="xs" color="#4f4f4f" className="mb-1" />
      <div className=" flex [&>*]:w-1/2 [&>*]:p-1 gap-2">
        {!applicantData.invited && (
          <>
            <Link to="/talent-profile">
              <Button color="#ffbd20" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div className="">
              {!props.interviewTime ? (
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
            value={date}
            onChange={setDate}
            label="Date"
            minDate={new Date()}
            placeholder="Enter Date for Interview"
          />
          <TimeInput
            label="Time"
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
            ref={ref}
            leftSection={pickerControl}
          />
          <Button
            onClick={() => handleOffer("INTERVIEWING")}
            color="#ffbd20"
            variant="light"
            fullWidth
          >
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
