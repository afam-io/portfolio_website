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
      <div className='xl:w-50% lg:w-full '>
        <Image
          src={PersonalImage}
          alt='picture of Afam website author'
          className='object-cover w-full lg: lg:h-[95%] xl:w-auto xl:h-[95%]'
        />
      </div>
      <div className='flex flex-col py-2 pl-2'>
        <h2 className='text-5xl font-bold '>More About Me!</h2>
        <p className='py-8 '>
          I&apos;m a full-stack software engineer looking for my first developer
          role.
        </p>
        <p>
          🌱 I&apos;m currently learning:
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

        <p>
          Hobbies
          <ul>
            <li>
              Reading: I've been an avid reader my entire life. My most loved
              genres include fantasy economic history, philosophy and personal
              improvement.{' '}
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
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
