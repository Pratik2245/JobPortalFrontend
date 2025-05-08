const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-3 text-[#e7e7e7] text-center">
        How It <span className="text-[#ffbd20]">Works </span>
      </div>
      <div className="test-lg text-[#b0b0b0] mb-10 mx-auto text-center w-1/2">
        Create your profile, explore jobs, and apply in one click. Employers
        post jobs, review candidates, and hire — all in one place.
      </div>
      {/* left side  */}
      <div className="flex w-full items-center justify-center">
        <div className="w-[60%] relative flex justify-center">
          <img src="Working/Girl.png" className="h-[29rem]" alt="" />
          <div className="absolute p-2  mt-3 text-center left-[60%] bottom-[50%]  h-auto w-40 border flex-col items-center justify-center flex border-[#ffbd20] rounded-xl backdrop-blur-md">
            <div>
              <img src="image2.png" className="h-14 w-14 rounded-full" alt="" />
            </div>
            <div className="text-[#e7e7e7]">Complete Your Profile</div>
            <div className="text-[#b0b0b0]">70% completed</div>
          </div>
        </div>

        {/* right side  */}
        <div className="w-[40%] flex flex-col gap-7 justify-start">
          <div className="flex gap-4 items-center ">
            <div className="object-cover border bg-[#ffbd20] border-white rounded-full ">
              <img
                src="Working/Build your resume.png"
                className="h-16 w-16 p-2"
                alt=""
              />
            </div>
            <div className="">
              <div className="text-xl text-[#d1d1d1] font-semibold">
                Build Your Resume
              </div>
              <div className="text-[#b0b0b0]">
                Create a standout resume with your skills.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border bg-[#ffbd20] border-white rounded-full ">
              <img
                className="h-16 w-16 p-2"
                src="Working/Apply for job.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-xl text-[#d1d1d1] font-semibold">
                Apply for Job
              </div>
              <div className="text-[#b0b0b0]">
                Find and apply for jobs that match your skills.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border bg-[#ffbd20] border-white rounded-full">
              <img
                className="h-16 w-16 p-2"
                src="Working/Get hired.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-xl text-[#d1d1d1] font-semibold">
                Get Hired
              </div>
              <div className="text-[#b0b0b0]">
                Connect with employers and start your new job.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
