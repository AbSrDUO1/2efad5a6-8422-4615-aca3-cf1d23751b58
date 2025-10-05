use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const navItems = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" },
];

const navbarProps = {
  logoSrc: '/images/logo.svg',
  logoAlt: 'Xeven Logo',
  navItems,
  buttonText: 'Get Early Access',
  onButtonClick: () => {},
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom {...navbarProps} />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to Xeven"
          subtitle="Your gateway to easy SaaS solutions"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="Xeven is designed for those who seek an engaging SaaS experience. Our platform focuses on user-friendly navigation and clear value propositions to meet your needs."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
          steps={[
            { title: 'Step 1', description: 'Create an account', position: 'left', isCenter: true },
            { title: 'Step 2', description: 'Select your plan', position: 'center', isCenter: false },
            { title: 'Step 3', description: 'Complete your purchase', position: 'right', isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics"
          description="Understand the metrics that drive Xeven's performance"
          kpiItems={[
            { value: '100K', description: 'Active Users', icon: '' },
            { value: '30%', description: 'Market Growth', icon: '' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          logoText="Xeven"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => {} }] },
            { items: [{ label: 'FAQs', onClick: () => {} }] },
            { items: [{ label: 'Contact Us', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Xeven. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}