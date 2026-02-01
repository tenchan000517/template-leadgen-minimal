import Link from 'next/link';
import { getSiteData } from '@/lib/site';

export default function MinimalFooter() {
  const siteData = getSiteData();
  const { company, navigation } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-container px-[5%] lg:px-[10%] py-[60px] lg:py-[80px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <p className="font-bold text-[18px]">{company.name}</p>
            <div className="space-y-2 text-[14px] text-white/80">
              <p>〒{company.postalCode}</p>
              <p>{company.address}</p>
              <p>TEL: {company.phone}</p>
              <p>Email: {company.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {navigation.footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/20">
          <p className="text-[13px] text-white/60 text-center">
            &copy; {currentYear} {company.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
