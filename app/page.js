import Navbar    from "@/src/components/Navbar";
import Hero      from "@/src/components/Hero";
import Champions from "@/src/components/Champions";
import Weapons   from "@/src/components/Weapons";
import Battles   from "@/src/components/Battles";
import Store     from "@/src/components/Store";
import Contact      from "@/src/components/Contact";
import Footer       from "@/src/components/Footer";
import UIOnlyToast  from "@/src/components/UIOnlyToast";

export default function HomePage() {
  return (
    <>
      {/* Fixed overlay navbar — z-100, above all sections */}
      <Navbar />

      <main>
        {/* Hero — full viewport, character switcher */}
        <Hero />

        {/* Champions — full-height character roster with scroll reveal */}
        <Champions />

        {/* Weapons — arsenal showcase with character backgrounds */}
        <Weapons />

        {/* Battles — stats counter + battle mode cards */}
        <Battles />

        {/* Store — season pass pricing tiers */}
        <Store />

        {/* Contact — form + socials */}
        <Contact />
      </main>

      <Footer />
      <UIOnlyToast />
    </>
  );
}
