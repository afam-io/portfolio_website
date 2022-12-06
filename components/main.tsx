import { NextPage } from 'next';

interface Props {}
/**
 *
 * @todo add animation / image below text shifting title card up
 */
const Main: NextPage<Props> = () => {
  return (
    <div id='home' className='min-h-[95vh] hero bg-base-200'>
      <div className='text-center hero-content'>
        <div className='max-w-xl md:max-w-3xl'>
          <h1 className='text-5xl tracking-wide md:tracking-wide md:text-6xl'>
            Hi 👋🏿 I&#39;m Afam A full-stack developer
          </h1>
          <p className='py-6 text-lg tracking-tight'>
            I&apos;ve worked in operational roles across several startups and am
            now looking to bring that experience to my first developer role!
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
