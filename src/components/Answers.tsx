import { Question } from "../types";

type Props = {
  question: Question; 
  onSubmit: (correct: boolean) => void
}

function Answers(props: Props) {
  return <div>
    {props.question.choices.map((choice, idx) => (
      <Answer />
    ))}
  </div>
}

export default Answers