import Link from "next/link";
import InputSentenceComponent from "../components/InputSentenceComponent";


export default function sentencePage() {
    return(
        <div className="input-sentence-component">
        <h2>Create custom sentences! </h2>
        <InputSentenceComponent />
      </div>
    )
};