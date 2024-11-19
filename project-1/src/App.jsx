import Header from "./components/header";
import CoreConcepts from "./components/core-concepts";
import Examples from "./components/examples";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
