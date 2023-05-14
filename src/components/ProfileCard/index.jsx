import axios from "axios";
import ProblemCard from "../ProblemCard";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
function ProfileCard() {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const req = await axios.get("/api/user/profileDetails");
      return req.data;
    },
  });

  if (data?.redirectURL) {
    navigate(data.redirectURL);
  }

  if (isLoading) {
    return <div>bruh</div>;
  }
  return (
    <section className="bg-background h-screen w-screen flex justify-center py-2">
      <main className="text-headline py-40 space-y-4 text-center px-20 lg:px-44 border-paragraph border-l-[1px] border-r-[1px]">
        <div className="">
          <div className="flex justify-center mb-4">
            <img src="/test_pfp.jpg" class="rounded-full h-40 w-40" />
          </div>

          <h2>@{data.data.profileDetails.username}</h2>
          <p className="text-paragraph">{data.data.profileDetails.desc}</p>
        </div>
        <div>Current Streak: {data.data.profileDetails.streak}</div>
        <div className="space-y-2">
          {data.data.codeDetails.codePublish.map((problem, index) => (
            <ProblemCard key={index} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default ProfileCard;
