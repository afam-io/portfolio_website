import { NextPage } from 'next';
import Image from 'next/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';
interface Props {}

// about page styling
/**
 * @todo v2 add accesible tags throughout code
 *
 */
const About: NextPage<Props> = () => {
  return (
    <div
      className='flex flex-col min-h-screen lg:pt-16 lg:flex-row bg-base-200'
      id='about'>
      <div className='xl:w-50% md:w-50% '>
        <Image
          src={PersonalImage}
          alt='picture of Afam website author'
          className='object-cover w-full lg: lg:h-[95%] xl:w-auto xl:h-[95%]'
        />
      </div>
      <section className='flex flex-col pl-3 md:pl-8 md:w-[44%]'>
        <h2
          className='w-screen md:w-full leading-tight md:tracking-none
        md:pb-8 md:leading-none font-bold    text-center mt-4 pb-2  ml-[-1rem]'>
          A Bit More About Me
        </h2>

        <h3>⚒️ Currently Working on</h3>
        <p>
          <ul>
            <li>How to build a CI/CD pipeline and use docker.</li>
            <li>
              How to use storybook to improve my frontend development
              experience.{' '}
            </li>
            <li>
              How to build decentralised applications with a solidity backend
              and a react front-end.
            </li>
          </ul>
        </p>
        <h3> 🎯 Hobbies</h3>
        <p>
          <ul>
            <li>
              <strong>📖 Reading</strong>
              <br /> Favourite genres: fantasy, history and philosophy.{' '}
            </li>
            <li>
              {' '}
              <strong> 🏞️ Park / Thameside strolls</strong>
              <br />
              Preferred London spots: Regents Park and Kew Gardens.
            </li>
            <li>
              {' '}
              <strong>🎾 Tennis</strong>
              <br />
              Its hard not to love the feeling of flying across the court.
            </li>
          </ul>
        </p>
      </section>
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
