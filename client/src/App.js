import { Outlet } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import { AppBar, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" sx={{ px: 0 }} color="transparent">
        <TopHeader></TopHeader>
        <BottomHeader></BottomHeader>
      </AppBar>
      <Box sx={{ mt: "100px", flex: 1 }}>
        <Outlet></Outlet>
      </Box>
    </div>
  );
}

export default App;
