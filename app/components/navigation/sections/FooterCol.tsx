import Link from 'next/link';
import React from 'react';

export interface FooterLink {
  label:  string;
  link: string;
}

interface FooterColProps {
  colLinks: FooterLink[];
  header: string;
}

const FooterCol: React.FC<FooterColProps> = ({ colLinks, header }) => {
  if (!colLinks) {
    return <div>No links available</div>;
  }

  return (
    <>
      <div className="relative flex w-full flex-col justify-between pb-2">
        <div>
          <h1 className="text-2xl pb-2 text-white  font-bold">{header}</h1>
        </div>
        <button className="block text-2xl text-white md:hidden">
          {/* {isMenuOpen ? <EllipsisVertical /> : <Ellipsis />} */}
        </button>
        <div className='justify-start h-full space-y-1.5 text-[10px]'>
        {colLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.link}
              className="cursor-pointer hover:opacity-50"
              aria-current="page"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </div>
      </div>
    </>
  );
};

export default FooterCol;