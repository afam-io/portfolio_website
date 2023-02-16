import { SocialIcon } from 'react-social-icons';

/**
 *
 * @todo try making the height of the sidebar the page then adding absolute postion to a div of the asides within.
 * Then look up examples
 */

const Sidebar = () => {
  return (
    <aside className='sticky top-0 hidden h-screen bg-transparent outline-2 outline-dashed outline-red-400 '>
      <div className='lg:pt-[37rem] md:pt-[40rem]'>
        <SocialIcon
          url='https://github.com/afam-io'
          fgColor='gray'
          bgColor='transparent'
          className='z-50'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/afam-okoh/'
          fgColor='gray'
          bgColor='transparent'
          className='z-50'
        />
        <SocialIcon
          url='https://twitter.com/afamokoh'
          fgColor='gray'
          bgColor='transparent'
          className='z-50'
        />
      </div>
      {/* <div className='border-r-gray-600 min-h-fit min-w-fit' /> */}
      {/*
        <SocialIcon
          className='hidden cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        /> */}
    </aside>
  );
};

export default Sidebar;
