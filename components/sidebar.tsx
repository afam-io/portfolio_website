import { SocialIcon } from 'react-social-icons';

const Sidebar = () => {
  return (
    <aside className='fixed bottom-0 left-0 z-50 flex flex-col items-start'>
      <SocialIcon
        url='https://github.com/afam-io'
        fgColor='gray'
        bgColor='transparent'
      />
      <SocialIcon
        url='https://www.linkedin.com/in/afam-okoh/'
        fgColor='gray'
        bgColor='transparent'
      />
      <SocialIcon
        url='https://twitter.com/afamokoh'
        fgColor='gray'
        bgColor='transparent'
      />
      <SocialIcon
        className='hidden cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
      />
    </aside>
  );
};

export default Sidebar;
