import { ChangeEventHandler } from "react";

export default function MyPageInput(props: {
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  readOnly?: boolean;
}) {
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
