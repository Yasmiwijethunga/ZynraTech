import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[68px]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
