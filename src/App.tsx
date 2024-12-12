import * as React from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import GlassNavbar from "./components/glass-navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      toast.success("Login successful!", {
        onClose: () => (window.location.href = "/dashboard"),
      });
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav>
        <GlassNavbar />
      </nav>
      <Card
        className="w-[350px] mb-4 items-center"
        style={{ boxShadow: "0 0 60px #0f172a" }} // slate color
      >
        <CardHeader>
          <CardTitle>Login </CardTitle>
          <CardDescription>
            To access your all in one dashboard!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form autoComplete="off">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Name or email"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input
                  id="framework"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******"
                  autoComplete="off"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleLogin}>Log in</Button>
        </CardFooter>
      </Card>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
