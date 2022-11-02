import { NextPage } from 'next';

interface Props {}

const About: NextPage<Props> = () => {
  return (
    <div className='w-screen h-screen' id='about'>
      About Section
    </div>
  );
};

export default About;
