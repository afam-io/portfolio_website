import { NextPage } from 'next';
import Image from 'next/image';
interface Props {}

const About: NextPage<Props> = () => {
  return (
    <div className='min-h-screen hero bg-base-200'>
      <div className='flex-col hero-content lg:flex-row'>
        <Image
          src='/../public/images/afam_headshot_books_cropped.jpg'
          alt='picture of Afam website author'
          className='max-w-sm rounded-lg shadow-2xl'
          width={500}
          height={500}
        />
        <div>
          <h2 className='text-5xl font-bold'>More About Me!</h2>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

/*   <div className='w-screen h-screen' id='about'>
      About Section
    </div>
   );*/
