import { NextPage } from 'next';
import Image from 'next/legacy/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';
interface Props {}

// about page styling

const About: NextPage<Props> = () => {
  return (
    <div
      className='flex flex-col h-screen border-4 border-red-500 md:flex-row bg-base-200 '
      id='about'>
      <div className='border-4 border-purple-500 md:h-full md:w-auto'>
        <Image
          src={'/images/afam_headshot_books_cropped.jpg'}
          alt='picture of Afam website author'
          height={850}
          width={600}
          priority
          sizes='100vh'
          className='object-fill'
        />
      </div>
      <div className='flex flex-col border-4 border-green-500'>
        <h2 className='text-5xl font-bold border-4 border-blue-500'>
          More About Me!
        </h2>
        <p className='py-6'>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
    </div>
  );
};

export default About;

/*  

<div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-5xl font-bold">Box Office News!</h1>
    <button className="btn btn-primary">Get Started</button>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
*/
