import PrintPage from "./Components/PrintPage";
import SideBar from "./Components/Sidebar";


function App() {
  return (
    <div className="App">
     <SideBar>
      <PrintPage/>
     </SideBar>
    </div>
  );
}

export default App;
