'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/Logo.png';
import { Instagram, Facebook, Phone, ArrowLeft } from 'lucide-react';
import Socialmedia from './sections/Socialmadia';
import FooterCol, { FooterLink } from './sections/FooterCol';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const FIRST_Col_LINKS: FooterLink[] = [
    { label: "معلومات عنا", link: '/#partners' },
    { label: "المميزات", link: '#services' },
    { label: "المدونات", link: '#feedback' },
    { label: "المراجعات", link: '#feedback' },
    { label: "الأسعار", link: '#feedback' }
  ];

  const SECOND_Col_LINKS: FooterLink[] = [
    { label: "وظائف", link: '/contact' },
    { label: "معلومات التواصل", link: '/about-us' },
    { label: "استعلامات", link: '/about-us' },
  ];

  const socialmediaIcons = [
    { name: 'Facebook', icon: <Facebook className="text-white" />, link: '#' },
    { name: 'Instagram', icon: <Instagram className="text-white" />, link: '#' },
    { name: 'WhatsApp', icon: <Phone className="text-white" />, link: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full py-12">
      {/* Footer Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right w-full md:w-1/3">
          <div className="w-40 md:w-60">
            <Image src={logo} alt="Logo" width={600} height={30} className="object-contain w-full" />
          </div>
          <p className="text-lg leading-relaxed">
            احم معلوماتك الشخصية ولا تشاركها مع أي أحد و
            <span className="text-gradient font-bold"> سايبر سيف </span>
            سيهتم بما هو باقي
          </p>
          <Link href="#" className="mt-4">
            <Button variant="destructive" className="w-full md:w-fit hover:opacity-55">
            تواصل معنا
            
            <ArrowLeft className='text-white w-4 !size-4' />
            </Button>
          </Link>
        </div>

        {/* Services & Organization Section */}
        <div className="flex list-none flex-col md:flex-row gap-8 text-center md:text-right w-full md:w-1/2">
          <FooterCol colLinks={FIRST_Col_LINKS} header={'خدماتنا'} />
          <FooterCol colLinks={SECOND_Col_LINKS} header={"مؤسستنا"} />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
          <p>© 2024 - جميع الحقوق محفوظة</p>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialmediaIcons.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                <Socialmedia icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
