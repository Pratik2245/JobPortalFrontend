const CertificationCard = () => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className=" ">
            <img className="h-7 " src={`/Icons/Netflix.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">Designer</div>
            <div className="text-xs text-[#b0b0b0]">Netflix</div>
          </div>
        </div>
        <div className="">
          <div className="text-sm">Issued July-2024</div>
          <div className="text-sm">ID:HHJJTTYY</div>
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
