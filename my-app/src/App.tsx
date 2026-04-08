import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useMutation } from "convex/react";

function App() {
  const tasks = useQuery(api.getuser.get);
  const adduser = useMutation(api.adduser.addUser);
  return (
    <div className="App">
      {tasks?.map(({ _id, username }) => <div key={_id}>{username}</div>)}
    </div>
  );
}

export default App;
