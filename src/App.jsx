import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import routes from "./routes";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
