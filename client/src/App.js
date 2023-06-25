import { Outlet } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import TopFooter from "./components/TopFooter";
import ContentFooter from "./components/ContentFooter";
import BottomFooter from "./components/BottomFooter";
import FormSignIn from "./components/FormSignIn";
import { AppBar, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* Header start */}
      <AppBar position="fixed" sx={{ px: 0, backgroundColor: "#fff" }}>
        <TopHeader></TopHeader>
        <BottomHeader></BottomHeader>
      </AppBar>
      {/* Header end */}

      {/* Body start */}
      <Box sx={{ mt: { xs: "76px", md: "158px" } }}>
        <Outlet></Outlet>
      </Box>
      {/* Body start */}

      {/* Footer start */}
      <Box component="footer">
        <TopFooter></TopFooter>
        <ContentFooter></ContentFooter>
        <BottomFooter></BottomFooter>
      </Box>
      {/* Footer end */}

      <FormSignIn></FormSignIn>
    </div>
  );
}

export default App;
