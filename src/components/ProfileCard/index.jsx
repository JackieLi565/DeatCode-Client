import axios from "axios";
import ProblemCard from "../ProblemCard";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Error from "../../pages/Error";
import Loading from "../../pages/Loading";
function ProfileCard() {
  const navigate = useNavigate();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const req = await axios.get("/api/user/profileDetails");
      console.log(req.data);
      return req.data;
    },
  });

  if (isError) {
    return <Error msg={error.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-background h-screen w-screen flex justify-center py-2">
      <main className="text-headline py-40 space-y-4 text-center px-20 lg:px-44 border-paragraph border-l-[1px] border-r-[1px]">
        <div className="">
          <div className="flex justify-center mb-4">
            <img src="/test_pfp.jpg" class="rounded-full h-40 w-40" />
          </div>

          <h2>@{data.profileDetails.username}</h2>
          <p className="text-paragraph">{data.profileDetails.desc}</p>
        </div>
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
