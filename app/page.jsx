import Background from "./components/main/Background";
import Reserve from "./components/main/Reserve";
import Market from "./components/main/Market";
export default function Page() {
  return (
    <main>
      <Background src="main/background.webp" type="img">
        <Reserve />
      </Background>
      <Market />
    </main>
  );
}
