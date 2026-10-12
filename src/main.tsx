import { createRoot } from "react-dom/client";
import "./index.css";
import { ManePage } from "./ManePage";

const rootEl = document.getElementById("root");
const reactRoot = createRoot(rootEl!);
reactRoot.render(<ManePage />);

