import { Feedback } from "@/components/Feedback";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";

export default function Home(): JSX.Element {
  return (
    <main>
      <Header />
      <Products />
      <Feedback />
    </main>
  );
}
