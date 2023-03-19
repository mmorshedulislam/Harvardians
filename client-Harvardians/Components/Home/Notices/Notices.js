import NoticeCard from "./NoticeCard";

const Notices = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-center text-5xl font-bold my-5">Notices</h2>
      <div className="grid md: grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((notice) => (
          <NoticeCard />
        ))}
      </div>
    </div>
  );
};

export default Notices;
