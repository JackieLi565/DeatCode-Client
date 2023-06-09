import axios from "axios";
import ProblemCard from "../ProblemCard";
import { useQuery } from "react-query";
import Loading from "../Status/Loading";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
function ProfileCard() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const req = await axios.get("/api/user/profileDetails");
      return req.data;
    },
  });

  if (isError) {
    useNavigate("/401");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-background h-screen w-screen flex justify-center">
      <main className="text-headline bg-background py-40 space-y-4 text-center px-20 lg:px-44 border-paragraph border-x-[1px]">
        <div className="">
          <div className="flex justify-center mb-4">
            <img src="/test_pfp.jpg" class="rounded-full h-40 w-40" />
          </div>

          <h2>@{data.profileDetails.username}</h2>
          <p className="text-paragraph">{data.profileDetails.desc}</p>
        </div>
        <Modal userData={data.profileDetails} />
        <div>Current Streak: {data.profileDetails.streak}</div>
        <div className="space-y-2">
          {data.codeDetails.codePublish.map((problem, index) => (
            <ProblemCard key={index} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default ProfileCard;
