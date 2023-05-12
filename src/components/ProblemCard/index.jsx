function ProblemCard() {
  return (
    <div className="px-10 py-3 bg-backgroundS rounded flex gap-24 items-center">
      <div>icon</div>
      <div className="text-left">
        <h2>Name of Problem</h2>
        <p>Date Created: date</p>
        <p>Difficulty: 4/5</p>
      </div>
    </div>
  );
}

export default ProblemCard;
