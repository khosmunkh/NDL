import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/#artists", label: "Artists" },
      { href: "/albums", label: "Albums" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    social: [
      { href: "https://instagram.com", label: "Instagram" },
      { href: "https://twitter.com", label: "Twitter" },
      { href: "https://spotify.com", label: "Spotify" },
      { href: "https://youtube.com", label: "YouTube" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl md:text-5xl font-black tracking-[-0.1em]">NDL</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-8">
              A visual identity, uniting music fans from all over the world by allowing them to share moments together through music.
            </p>
            <div className="text-xs text-muted-foreground">
              <p>Ulaanbaatar, Mongolia</p>
              <p className="mt-1">info@ndlrecords.com</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
              Socials
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
              Subscribe
            </h4>
            <p className="text-sm text-muted mb-4">
              Get updates straight to your inbox.
            </p>
            <Link
              href="/contact"
              className="text-sm underline underline-offset-4 hover:text-muted transition-colors"
            >
              Sign up for newsletter
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} NDL Records. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-muted transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-muted transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Large Footer Text */}
      <div className="border-t border-border overflow-hidden">
        <div className="py-8 px-6">
          <p className="text-[8vw] md:text-[6vw] font-black tracking-[-0.05em] text-center text-muted-foreground/20 whitespace-nowrap">
            NDL RECORDS
          </p>
        </div>
      </div>
    </footer>
  );
}
