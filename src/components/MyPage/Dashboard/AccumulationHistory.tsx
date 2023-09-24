export default function AccumulationHistory(props: any) {
  const { history } = props;
  const { time, day, gen, pet, can, point } = history;

  return (
    <div>
      {/* <p className="text-[#67616a] pl-3">{day}</p> */}
      <div className="border-[1px] border-solid border-[#d9d9d9] rounded-xl px-4 py-3 mb-2">
        <div className="flex justify-between">
          <p>
            일반: {gen}, 플라스틱: {pet}, 캔: {can}
          </p>
          <p className="text-[#ff895a]">+{point}</p>
        </div>
        <p className="text-[#67616a]">
          {day} {time}
        </p>
      </div>
    </div>
  );
}
