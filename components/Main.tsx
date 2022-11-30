import { NextPage } from 'next';

interface Props {}

const Main: NextPage<Props> = () => {
  return (
    <div id='home' className='min-h-screen hero bg-base-200'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            Hello there I&#39;m Afam
            <br /> A full-stack developer
          </h1>
          <p className='py-6'>
            I&apos;m a full-stack software engineer looking for my first
            developer role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
/* 

    <div
      id='home'
      className='flex items-center justify-center w-screen h-screen mt-5'>
      <h1>Afam Okoh</h1>
    </div>
*/
