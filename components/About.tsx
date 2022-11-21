import { NextPage } from 'next';
import Image from 'next/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';
interface Props {}

// about page styling

const About: NextPage<Props> = () => {
  return (
    <div
      className='flex flex-col min-h-screen pb-40 border-4 border-red-500 md:flex-row bg-base-200 '
      id='about'>
      <div>
        <Image
          src={'/images/afam_headshot_books_cropped.jpg'}
          alt='picture of Afam website author'
          height={1000}
          width={500}
          className='object-fill border-4 border-green-400 rounded-lg shadow-2xl md:h-full'
        />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-5xl font-bold'>More About Me!</h2>
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
