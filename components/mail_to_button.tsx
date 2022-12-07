import React from 'react';
import Link from 'next/link';
interface Props {
  mailto: string;
  label: string;
}

const ButtonMailto = ({ mailto, label }: Props) => {
  return (
    <button className='self-center md:min-w-fit md:h-fit btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg lg:w-1/2'>
      <Link
        href='/'
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}>
        {label}
      </Link>
    </button>
  );
};

export default ButtonMailto;

//             <Link href='/#projects'>Projects</Link>
