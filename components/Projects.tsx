import { NextPage } from 'next';
import Image from 'next/image';
import PersonalImage from '../public/images/afam_headshot_books_cropped.jpg';

interface Props {}

const Projects: NextPage<Props> = () => {
  return (
    <div className='w-screen h-screen bg-base-200' id='projects'>
      <div className='w-full carousel'>
        <div id='slide1' className='relative w-full carousel-item'>
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
              <p>Click the button to listen on Spotify app.</p>
              <div className='justify-end card-actions'>
                <button className='btn btn-primary'>Listen</button>
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
