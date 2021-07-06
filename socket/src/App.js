import { useEffect } from "react";

function App({socket}) {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect ", socket.id);
    });
  }, [])
  
  return <></>
}

export default App;
