import { useState } from "react";
import styles from "../Styles/Home.module.css"
function AddTodo({ handleAddTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    
    
    <div>
      <input  className={styles.input_tag} value={text} type="text" onChange={handleChange} />
       <button className={styles.btn} onClick={onClick}>ADD</button>
    </div>
    
  );
}

export default AddTodo;
