type TeamInfoProps = {
  teamName: string;
  members: string[];
};

export function TeamInfo({ teamName, members }: TeamInfoProps) {
  return (
    <ul className="flex flex-col items-center">
      <li className="text-white text-xl font-semibold mb-2">{teamName}</li>
      {members.map((member, index) => (
        <li key={index} className="text-white text-[15px] font-light mb-2">
          {member}
        </li>
      ))}
    </ul>
  );
}
