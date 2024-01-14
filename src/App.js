import logo from './logo.svg';
import "./reset.css"
import "./common.css"
import classes from "./components/Mainstyles.module.css"
import Menu from './components/Menu';
import { TabContextProvider } from './context/TabContext.tsx';

function App() {
  return (
    <div className="App">
      <TabContextProvider>
        <div className={classes.main}>
          <Menu />
        </div>
      </TabContextProvider>
    </div>
  );
}

export default App;
