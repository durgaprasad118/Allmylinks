import ProfileCard from "./ProfileCard";
import { data } from "../utils/data";
const Home = () => {
  return (
    <div className="h-[100vh] w-full bg-gray-900 px-2 md:px-0 gap-y-4  flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-white ">All Links </h1>
      {data.map((e) => {
        return <ProfileCard key={e.id} {...e} />;
      })}
    </div>
  );
};

export default Home;
