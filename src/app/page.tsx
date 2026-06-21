import { Hero } from '@/components/sections/Hero';
import { SacredMarquee } from '@/components/sections/SacredMarquee';
import { Vision } from '@/components/sections/Vision';
import { HowToPlay } from '@/components/sections/HowToPlay';
import { SacredJourney } from '@/components/sections/SacredJourney';
import { GameCover } from '@/components/sections/GameCover';
import { Milestones } from '@/components/sections/Milestones';
import { Benefits } from '@/components/sections/Benefits';
import { ForElders } from '@/components/sections/ForElders';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SacredMarquee />
      <Vision />
      <HowToPlay />
      <SacredJourney />
      <GameCover />
      <Milestones />
      <Benefits />
      <ForElders />
      <FAQ />
      <FinalCTA />
    </>
  );
}
