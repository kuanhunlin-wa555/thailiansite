import { HeroSection } from '@/components/sections/HeroSection';
import { EquipmentFinder } from '@/components/sections/EquipmentFinder';
import { BranchMap } from '@/components/sections/BranchMap';
import { LegacyTimeline } from '@/components/sections/LegacyTimeline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <EquipmentFinder />
      <BranchMap />
      <LegacyTimeline />
    </main>
  );
}
