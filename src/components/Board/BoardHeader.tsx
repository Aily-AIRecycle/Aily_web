export default function BoardHeader(props: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="flex justify-center items-center w-full lg:h-[400px] h-[200px]">
      <ul className="lg:w-4/5 w-[90%]">
        <li className="lg:text-[50px] text-[30px]">{props.title}</li>
        <li className="lg:text-[20px] text-[15px]">{props.subTitle}</li>
      </ul>
    </div>
  );
}
