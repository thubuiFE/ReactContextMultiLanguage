// components
import TopHeader from "./mains/TopHeader";
// contexts
import { LocalProvider } from "./contexts/LocaleContext";
// others
import "./App.scss";

function App() {
    return (
        <div className="doctor-care-wrapper">
            <LocalProvider>
                <TopHeader />
            </LocalProvider>
        </div>
    );
}

export default App;
