import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";



function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((r) => r.json())
    .then((questions) => setQuestions(questions));
  }, [])
  function handleDeleteQuestion(deletedQuestion){
    const updatedQuestions = questions.filter((question) =>  question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions);
    console.log(deletedQuestion);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question}
       onDeleteQuestion={handleDeleteQuestion}/>
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
