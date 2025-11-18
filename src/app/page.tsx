import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ValueGrid } from "@/components/sections/value-grid";
import { VideoSpotlight } from "@/components/sections/video-spotlight";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ValueGrid />
      <VideoSpotlight />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}
