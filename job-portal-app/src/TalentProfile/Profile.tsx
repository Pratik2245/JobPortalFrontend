const Profile = () => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="rounded-full w-48 h-48 absolute -bottom-1/3 left-3 border-[#2d2d2d]"
          src="/avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
