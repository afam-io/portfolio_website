import { NextPage } from 'next';
import Image from 'next/image';
interface Props {}

const Projects: NextPage<Props> = () => {
  return (
    <div className='w-screen h-screen bg-base-200' id='projects'>
      <div className='w-full carousel'>
        <div id='item1' className='w-full carousel-item'>
          <Image
            src='/../public/images/afam_headshot_books_cropped.jpg'
            alt="image of a project I've worked on"
            className='w-full'
            height={300}
            width={300}
          />
        </div>
        <div id='item2' className='w-full carousel-item'>
          <Image
            src='/../public/images/afam_headshot_books_cropped.jpg'
            alt="image of a project I've worked on"
            className='w-full'
            height={300}
            width={300}
          />
        </div>
        <div id='item3' className='w-full carousel-item'>
          <Image
            src='/../public/images/afam_headshot_books_cropped.jpg'
            alt="image of a project I've worked on"
            className='w-full'
            height={300}
            width={300}
          />
        </div>
        <div id='item4' className='w-full carousel-item'>
          <Image
            src='/../public/images/afam_headshot_books_cropped.jpg'
            alt="image of a project I've worked on"
            className='w-full'
            height={300}
            width={300}
          />
        </div>
      </div>
      <div className='flex justify-center w-full gap-2 py-2'>
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
      </div>{' '}
    </div>
  );
};

export default Projects;
