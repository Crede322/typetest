import logo from "./logo.svg";
import "./reset.css";
import "./common.css";
import classes from "./components/Mainstyles.module.css";
import Menu from "./components/Menu";
import { TabContextProvider } from "./context/TabContext.tsx";

function App() {
  return (
    <div className="App">
      {/* элемент если экран меньше чем 1366px */}
      <div className={classes.empty_block} />
      <TabContextProvider>
        <div className={classes.main}>
          <Menu />
        </div>
      </TabContextProvider>
    </div>
  );
}

export default App;
