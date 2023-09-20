export default function SubmitButton(props: any) {
  return (
    <>
      <input
        type="submit"
        value={props.value}
        className="rounded-[10px] w-full h-[54px] bg-[#f8b195] text-white text-[18px] font-semibold hover:bg-[#f58e65] cursor-pointer md:text-[20px]"
        onClick={props.onClick}
      />
    </>
  );
}
