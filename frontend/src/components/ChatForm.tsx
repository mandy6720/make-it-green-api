import React, {useState} from "react";

const ChatForm = () => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  type= "text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
    </form>
  )
}

export default ChatForm;
