import Card from "@/components/cardSlider/card";
import Slider from "@/components/cardSlider/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <p className="text-center font-bold text-4xl leading-tight">
        Best Seller Gaming PC
      </p>
      <p className="text-center font-bold text-xl leading-tight pb-12">
        Prebuilt & Custom
      </p>
      <Slider />
    </main>
  );
}
