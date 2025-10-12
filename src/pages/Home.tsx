import { Link } from "react-router";
import AppButton from "../components/ui/AppButton";
import AppInput from "../components/ui/input/AppInput";
import AppTextarea from "../components/ui/input/AppTextarea";
import { useState } from "react";
function Home() {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");

  return (
    <>
      <div className="">Home!</div>
      <AppButton>button1</AppButton>
      <AppInput label="Label" value={input} setValue={setInput} />
      <AppTextarea label="Label" value={textarea} setValue={setTextarea} />
      <Link to={"/catalog"}>Go Catalog</Link>
    </>
  );
}

export default Home;
