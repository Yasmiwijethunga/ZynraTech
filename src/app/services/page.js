import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Services from "@/components/services";

export const metadata = {
  title: "Services | ZynraTech Solutions",
  description: "Next-generation interfaces and scalable architectures.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </>
  );
}
