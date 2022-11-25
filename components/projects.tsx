import { NextPage } from 'next';
import Image from 'next/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';
import ProjectRedeemImage from '../public/images/redeem_screenshot.png';
import ProjectSorcery from '../public/images/project_sorcery_screenshot.png';

interface Props {}

const Projects: NextPage<Props> = () => {
  return (
    <div className='w-screen h-screen bg-base-200' id='projects'>
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
            <div className='card-body'>
              <h2 className='card-title'>New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>Listen</button>
              </div>
            </div>
          </div>{' '}
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='relative w-full carousel-item'>
          <div className='shadow-xl card lg:card-side bg-base-100'>
            <figure>
              <Image
                src={PersonalImage}
                alt="image of a project I've worked on"
                className='w-full'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>Listen</button>
              </div>
            </div>
          </div>{' '}
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='relative w-full carousel-item'>
          <div className='shadow-xl card lg:card-side bg-base-100'>
            <figure>
              <Image
                src={PersonalImage}
                alt="image of a project I've worked on"
                className='w-full'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>Listen</button>
              </div>
            </div>
          </div>{' '}
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
