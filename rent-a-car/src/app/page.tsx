import Header from "@/components/header";
import Hero from "@/components/hero";
import Rentcar from "@/components/rentcar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="py-6 px-10 ">
    <Hero/>
    <Rentcar/>
    </section>
    </>
  );
}
