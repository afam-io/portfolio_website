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
      <section className='flex flex-col pl-3 md:pl-8 '>
        <h2
          className='w-screen md:w-full leading-tight md:tracking-none
        md:pb-8 md:leading-none font-bold    text-center mt-4 pb-2  ml-[-1rem]'>
          A Bit More About Me
        </h2>

        <h3>⚒️ Currently Working On</h3>
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

/* 

 <div className='w-full carousel'>
        <div id='slide1' className='relative w-full carousel-item'>
          <div className='shadow-xl card lg:card-side bg-base-100'>
            <figure>
              <Image
                src={ProjectRedeemImage}
                alt="image of a project I've worked on"
                className='w-full'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Project Redeem!</h2>
              <p>
                Including a four week full stack project that allowed people to
                share tutorials for building home grown technology.
              </p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>See it in Action</button>
              </div>
            </div>
          </div>{' '}
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='relative w-full carousel-item'>
          <div className='shadow-xl card lg:card-side bg-base-100'>
            <figure>
              <Image
                src={ProjectSorcery}
                alt="image of a project I've worked on"
                className='w-full'
              />
            </figure>
            <div className='w-1/3 card-body'>
              <h2 className='card-title'>Project Sourcery</h2>
              <p className=''>
                Sourcery is a centralized platform for posting and viewing
                resources that could be of use to School of Code bootcampers.
                Users can post links to resources they deem useful by entering
                their name, the URL of the resource and a brief description of
                how the resource may be helpful into the dedicated input fields
                at the top of the page. Users can also view resources previously
                posted by themself or other users, and are even able to add a
                like to the post to show their appreciation. There are also
                links across the navigation bar which lead to well known
                commonly used resources.
              </p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>Frontend Repo</button>
                <button className='btn btn-primary'>Backend Repo</button>
              </div>
            </div>
          </div>{' '}
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
*/
