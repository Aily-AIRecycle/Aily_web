export default function MyPageInput(props: any) {
  return (
    <>
      <label htmlFor={props.name} className="text-[20px]">
        {props.label}
      </label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="border-[1px] border-solid border-[#a0a0a0] rounded-lg px-3 py-0 w-full h-10"
        autoFocus={props.autoFocus}
        readOnly={props.readOnly}
      ></input>
    </>
  );
}
