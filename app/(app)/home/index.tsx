// Context
import { HomeProvider } from "@/context/HomeContext";

// UI Components
import HomeScreen from "@/screens/HomeScreen";

const HomePage = () => {
  return (
    <HomeProvider>
      <HomeScreen />
    </HomeProvider>
  );
};

export default HomePage;
