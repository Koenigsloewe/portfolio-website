import Image from "next/image";
import { Button } from "@/components/ui/button"
import Navbar from "./navbar/page";
import Body from "./body/page";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Body />
    </main>
  );
}
