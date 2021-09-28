import { RenderRoutes } from "./components/RenderRoutes";
import routes from "./routes";

export default function App() {
  return <RenderRoutes routes={routes} />;
}
