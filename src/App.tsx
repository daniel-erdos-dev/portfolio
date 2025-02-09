import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/menus/Navbar";
import { MobileMenu } from "./components/menus/MobileMenu";
import { About } from "./components/sections/About/About";
import { Home } from "./components/sections/Home/Home";
import { Projects } from "./components/sections/Projects/Projects";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Provider store={store}>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />
        <MobileMenu />
        <Home />
        <About />
        <Projects />
      </div>
    </Provider>
  );
};
