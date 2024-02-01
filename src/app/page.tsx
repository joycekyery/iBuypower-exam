"use client";
import Card from "@/components/cardSlider/card";
import Slider from "@/components/cardSlider/slider";
import testData from "@/asset/testData.json";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
function calculateAffirm(discountPrice: number) {
  let discount;

  switch (true) {
    case discountPrice > 1599:
      discount = discountPrice / 24;
      break;
    case discountPrice > 1099:
      discount = discountPrice / 18;
      break;
    default:
      discount = discountPrice / 12;
      break;
  }

  return discount;
}
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      /Android|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    // Add a listener for changes to the screen size'
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center md:py-4 lg:py-10 xl:py-12 ${
        isMobile && "py-4"
      }`}
    >
      <p className="text-center font-bold text-4xl leading-tight">
        Best Seller Gaming PC
      </p>
      <p className="text-center font-bold text-xl leading-tight pb-12">
        Prebuilt & Custom
      </p>
      <Slider
        hasButton={testData.length > 4}
        isMobile={isMobile}
        cards={testData.map((val, k) => {
          return (
            <SwiperSlide key={k}>
              <Card
                isMobile={isMobile}
                pcImage={val.image}
                pcType={val.pcType}
                productName={val.productName}
                delivery={val.delivery}
                buyButtonText={
                  val.pcType == "Prebuilt"
                    ? "Buy Now"
                    : val.pcType == "Custom"
                    ? "Customize"
                    : "Buy Now"
                }
                spec={Object.values(val.spec)}
                originalPrice={val.price.originalPrice}
                discountPrice={val.price.discountPrice}
                affirmPrice={calculateAffirm(val.price.discountPrice)}
              />
            </SwiperSlide>
          );
        })}
      />
    </main>
  );
}
