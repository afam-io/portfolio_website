import React from 'react';
import Link from 'next/link';
interface Props {
  mailto: string;
  label: string;
}

const ButtonMailto = ({ mailto, label }: Props) => {
  return (
    <Link
      href='/'
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}>
      {label}
    </Link>
  );
};

export default ButtonMailto;

//             <Link href='/#projects'>Projects</Link>
