import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomePage from "@/components/home";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}