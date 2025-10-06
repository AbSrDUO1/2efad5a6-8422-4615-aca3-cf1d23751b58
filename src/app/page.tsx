"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Get Early Access"
          onButtonClick={() => console.log('Button clicked')}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Xeven"
          subtitle="Your guide to navigating the future of digital assets."
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="Xeven is designed for both beginners and experienced users in the digital asset space. We simplify the journey with clear options and detailed guides."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Transparent Tokenomics"
          description="Learn more about the financial structure guiding Xeven."
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "25%", description: "Liquidity" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          logoText="Xeven"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => console.log('Privacy policy clicked') }] },
            { items: [{ label: "Terms of Service", onClick: () => console.log('Terms clicked') }] },
            { items: [{ label: "Contact", onClick: () => console.log('Contact clicked') }] },
          ]}
          copyrightText="© 2023 Xeven. All rights reserved."
          onPrivacyClick={() => console.log('Privacy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
