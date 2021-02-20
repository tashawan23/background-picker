import { Picker } from "./components/Picker";
import './App.css';
import { SelectedCategoryProvider } from "./context/selectedCategory-context";
import { PictureMenu } from "./components/PictureMenu";

function App() {
  return (
    <div className="App">
      <SelectedCategoryProvider>
      <Picker />
      <PictureMenu />
      </SelectedCategoryProvider>
    </div>
  );
}

export default App;
