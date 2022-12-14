import React from 'react';
import Link from 'next/link';
interface Props {
  mailto: string;
  label: string;
}

const ButtonMailto = ({ mailto, label }: Props) => {
  return (
    <button className='ml-4 btn btn-primary w-36 md:ml-7'>
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

// former button styling: self-center md:min-w-fit md:h-fit btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg lg:w-1/2
