// libs
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
// components
import TopHeader from "./mains/TopHeader";
import SectionServicos from "./mains/SectionServicos";
import SectionSobre from "./mains/SectionSobre";
import SectionContact from "./mains/SectionContact";
import Footer from "./mains/Footer";
// contexts
import { persistor, store } from "./store";
import { LocalProvider } from "./contexts/LocaleContext";
// others
import "./App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="doctor-care-wrapper">
            <LocalProvider>
              <TopHeader />
            </LocalProvider>
            <SectionServicos />
            <SectionSobre />
            <SectionContact />
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
