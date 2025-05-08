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
      <div className="flex w-full">
        <div className="w-[50%]">
          <img src="Working/Girl.png" alt="" />
        </div>
        {/* right side  */}
        <div className="w-[50%] flex flex-col items-center justify-center">
          <div>
            <img src="" alt="" />
            <div>Build Your Resume</div>
            <div>Create a standout resume with your skills.</div>
          </div>
          <div>
            <img src="" alt="" />
            <div>Apply for Job</div>
            <div>Find and apply for jobs that match your skills.</div>
          </div>
          <div>
            <img src="" alt="" />
            <div>Get Hired</div>
            <div>Connect with employers and start your new job.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
