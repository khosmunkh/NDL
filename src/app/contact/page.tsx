import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | NDL Records',
  description: 'Get in touch with NDL Records for bookings, collaborations, press inquiries, or general questions.',
  openGraph: {
    title: 'Contact | NDL Records',
    description: 'Get in touch with NDL Records.',
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'info@ndlrecords.com',
      description: 'For general questions and information',
    },
    {
      title: 'Bookings',
      email: 'bookings@ndlrecords.com',
      description: 'Artist bookings and event requests',
    },
    {
      title: 'Press',
      email: 'press@ndlrecords.com',
      description: 'Media and press inquiries',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/nomadic_dream_life/', handle: '@ndlrecords' },
    { name: 'Spotify', href: 'https://open.spotify.com/artist/6T4u6bZDlwUfEU2bSCC86g', handle: 'NDL Records' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCxuCtjBIxLoKC08t9YqcVLQ', handle: 'NDL Records' },
  ];

  return (
    <main className="bg-background min-h-screen text-foreground pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs text-muted tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            Contact
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12 lg:border-l lg:border-border">
              {/* Email Contacts */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Email Us</h2>
                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title}>
                      <h3 className="text-sm font-medium text-muted mb-1">{info.title}</h3>
                      <a
                        href={`mailto:${info.email}`}
                        className="text-lg hover:text-muted transition-colors underline underline-offset-4"
                      >
                        {info.email}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Follow Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 border border-border hover:border-muted transition-colors"
                    >
                      <p className="text-sm text-muted mb-1">{social.name}</p>
                      <p className="font-medium group-hover:text-muted transition-colors">
                        {social.handle}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Visit Us</h2>
                <div className="text-muted leading-relaxed">
                  <p className="font-medium text-foreground mb-2">NDL Records Studio</p>
                  <p>Sukhbaatar District</p>
                  <p>Ulaanbaatar, Mongolia</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How can I submit my music to NDL Records?',
                a: 'Send your demo along with a brief bio to info@ndlrecords.com. We listen to every submission, but please allow 2-4 weeks for a response.',
              },
              {
                q: 'Do you accept international artists?',
                a: 'Absolutely. While we are based in Mongolia, we work with artists from around the world who share our vision and aesthetic.',
              },
              {
                q: 'How can I book an NDL artist for my event?',
                a: 'Contact our bookings team at bookings@ndlrecords.com with details about your event, including date, location, and budget.',
              },
              {
                q: 'Do you offer distribution services?',
                a: 'We handle distribution for our signed artists through our network of partners. For distribution inquiries, please contact us directly.',
              },
            ].map((faq) => (
              <div key={faq.q} className="p-6 border border-border">
                <h3 className="font-bold mb-3">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
