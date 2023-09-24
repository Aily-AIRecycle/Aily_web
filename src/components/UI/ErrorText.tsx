import classes from "@/components/UI/styles/ErrorText.module.scss";
function ErrorText(props: { text: string }) {
  return <p className="w-full text-[#ee5446]">{props.text}</p>;
}

export default ErrorText;
