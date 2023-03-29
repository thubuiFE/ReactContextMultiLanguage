// components
import TopHeader from "./mains/TopHeader";
// contexts
import { LocalProvider } from "./contexts/LocaleContext";
// others
import "./App.scss";

function App() {
    return (
        <LocalProvider>
            <div className="doctor-care-wrapper">
                <TopHeader />
            </div>
        </LocalProvider>
    );
}

export default App;
