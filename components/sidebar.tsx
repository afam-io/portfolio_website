import { SocialIcon } from 'react-social-icons';

/**
 * @todo v3 make icons larger
 */

const Sidebar = () => {
  return (
    <>
      <aside className='sticky top-0 hidden w-auto h-screen m-1 bg-primary dark:bg-base-200 lg:block '>
        <div className='flex flex-col space-y-4 pt-[70vh]'>
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
    </>
  );
};
/* outline-2 outline-dashed outline-red-400 */

export default Sidebar;
