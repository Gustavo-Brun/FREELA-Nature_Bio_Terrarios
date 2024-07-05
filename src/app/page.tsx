import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Feedback } from "@/components/Feedback";
import { BudgetRequest } from "@/components/BudgetRequest";
import { Contact } from "@/components/Contact";

export default function Home(): JSX.Element {
  return (
    <main className="bg-gradient-to-br from-primary-color">
      <Header />
      <Products />
      <Feedback />
      <BudgetRequest />
      <Contact />
    </main>
  );
}
