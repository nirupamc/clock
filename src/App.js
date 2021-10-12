import React ,{useState} from "react";

const App =()=>{

  const state=useState();

  var time = new Date().toLocaleTimeString();

  

  const [timeNow,setTime] = useState(time);

  const UpdateTime=()=>{
    var currentTime= new Date().toLocaleTimeString();
    setTime(currentTime);
  }


  return(
    <>
      <h1>{timeNow}</h1>
      <button onClick={UpdateTime} >Click Me</button>
    </>
  )
}
export default App;