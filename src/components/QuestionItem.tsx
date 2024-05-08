import { Question } from "@/types/Question";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};
export const QuestionItem = ({question, count, onAnswer}: Props) => {
    const checkQuestion = (key:number) =>{
        
    }

  return (
    <div>
        <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
        <div>
            {question.options.map((item, key)=>(
                <div key={key} className="border px-3 py-2 rounded-md border-blue-300 text-lg mb-4 cursor-pointer bg-blue-100 hover:opacity-60">
                    {item}</div>
            ))}
        </div>
    </div>
    );
};
