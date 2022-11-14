import { NextPage } from 'next';
import Image from 'next/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';
interface Props {}

const About: NextPage<Props> = () => {
  return (
    <div
      className='flex-col min-h-screen pb-40 bg-base-200 md:flex-row'
      id='about'>
      <div className='relative w-96 h-96'>
        <Image
          src={'/images/afam_headshot_books_cropped.jpg'}
          alt='picture of Afam website author'
          fill
          className='object-contain rounded-lg shadow-2xl '
        />
      </div>

      <h2 className='text-5xl font-bold'>More About Me!</h2>
      <p className='py-6'>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
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
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
*/
