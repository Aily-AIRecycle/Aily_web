export default function Title(props: { text: string }) {
  return (
    <p className="w-full mobile:invisible mobile:h-12 text-[28px] web:mb-12">
      {props.text}
    </p>
  );
}
