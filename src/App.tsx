import { useState } from "react";
import { add } from "./features/todoSlice";
import { useAppDispatch } from "./store";


function App() {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add("title"));
    setTitle('');
  }

  return (
    <div className="App">
      <input type="text" name="title" value={title}  onChange={(e) => setTitle(e.currentTarget.value)}/>
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default App;
