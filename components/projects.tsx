import { NextPage } from 'next';
import Image from 'next/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';
import ProjectRedeemImage from '../public/images/redeem_screenshot.png';
import ProjectSorcery from '../public/images/project_sorcery_screenshot.png';

interface Props {}
/**
 *
 * @todo  implement a simple responsive projects page using cards and grid.
 * @todo I will start with 2 cards that go in a grid that responsively changes to large cards when resized
 * @todo Set p tag in both projects to have max widths when larger to avoid images being squashed.
 */
const Projects: NextPage<Props> = () => {
  return (
    <div
      className='w-screen border-4 border-indigo-600 max-h-fit bg-base-200'
      id='projects'>
      <h1 className='py-10 pl-2'>Projects</h1>
      <div className='shadow-xl card bg-base-100'>
        <figure>
          <Image
            src={ProjectRedeemImage}
            alt="image of a project I've worked on"
            className='w-full '
          />
        </figure>
        <div className=' h-fit card-body'>
          <h3 className=''>Project Redeem!</h3>
          <p>
            Including a four week full stack project that allowed people to
            share tutorials for building home grown technology.
          </p>

          <button className='btn btn-primary w-36'>See it in Action</button>
        </div>
      </div>{' '}
      <div className='my-1 shadow-xl card bg-base-100'>
        <figure>
          <Image
            src={ProjectSorcery}
            alt="image of a project I've worked on"
            className='w-full '
          />
        </figure>
        <div className=' h-fit card-body'>
          <h3 className=''>Project Sourcery!</h3>
          <p>
            Sourcery is a centralized platform for posting and viewing resources
            that could be of use to School of Code bootcampers.
          </p>

          <button className='btn btn-primary w-36'>See it in Action</button>
        </div>
      </div>{' '}
    </div>
  );
};

export default Projects;

/* 
Previous Sourcery Code

      <div className='w-[95vw] mx-2 h-[50vh] md:max-h-fit md:w-full carousel'>
        <div id='item1' className='w-full carousel-item'>
          <div className='shadow-xl card lg:card-side bg-base-100'>
            <figure>
              <Image
                src={ProjectRedeemImage}
                alt="image of a project I've worked on"
                className='w-full'
              />
            </figure>
            <div className=' h-fit card-body'>
              <h2 className=''>Project Redeem!</h2>
              <p>
                Including a four week full stack project that allowed people to
                share tutorials for building home grown technology.
              </p>

              <button className='btn btn-primary'>See it in Action</button>
            </div>
          </div>{' '}
        </div>
        <div id='item2' className='w-full carousel-item md:px-5'>
          <div className='shadow-xl card lg:card-side bg-base-100'>
            <figure>
              <Image
                src={ProjectSorcery}
                alt="image of a project I've worked on"
                className='w-full leading-tight md:object-cover md:w-auto'
              />
            </figure>
            <div className='overflow-scroll min-h-fit card-body mt-[-1rem]'>
              <h2 className=''>Project Sourcery</h2>
              <p>
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
              <button className='btn btn-primary'>Frontend Repo</button>
              <button className='btn btn-primary'>Backend Repo</button>
            </div>
          </div>{' '}
        </div>
      </div>
      <div className='flex justify-center w-full gap-2 mb-[10rem] md:py-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>

*/

/* <div className="w-full carousel">
  <div id="item1" className="w-full carousel-item">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item2" className="w-full carousel-item">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item3" className="w-full carousel-item">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item4" className="w-full carousel-item">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div>
  </div> 
  <div className="flex justify-center w-full gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  </div> */
