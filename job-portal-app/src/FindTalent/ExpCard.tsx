import { Bookmark } from "lucide-react";

const ExpCard = () => {
  return (
    <>
      {/* <div className="flex items-center gap-2 mb-3">
        <img className="h-10" src={`/Icons/Google.png`} alt="" />
        <div className="text-sm">
          <div className="flex justify-around">
            <div className="">Designer</div>
            <div className="">Dec 2022 &#45;Apr-2024</div>
          </div>
          <div className="">Apple &#183;New York</div>
        </div>
      </div> */}
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] rounded-full">
            <img className="h-7 " src={`/Icons/Google.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">Designer</div>
            <div className="text-xs text-[#b0b0b0]">Apple &#183;New York</div>
          </div>
        </div>
        <div className="text-sm">Dec 2022 &#45;Apr-2024</div>
      </div>
      <div className="mb-7 text-sm text-justify">
        I have Designed Website For Apple Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Obcaecati enim quibusdam dolorem
        cupiditate inventore provident architecto. Fugiat, fuga. Commodi dolor
        ea dicta perferendis!
      </div>
    </>
  );
};

export default ExpCard;
