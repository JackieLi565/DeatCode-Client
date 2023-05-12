import ProblemCard from "../ProblemCard";
function ProfileCard() {
  const problems = [1, 2, 3, 4];
  return (
    <section className="bg-background h-screen w-screen flex justify-center py-24">
      <main className="text-headline space-y-4 text-center">
        <div className="">
          <img src="" alt="" />
          image
          <h2>@name</h2>
          <p>bio</p>
        </div>
        <div>code days</div>
        <div className="space-y-2">
          {problems.map((problem, index) => (
            <ProblemCard key={index} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default ProfileCard;
