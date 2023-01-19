import { NextPage } from 'next';
import MailToButton from './mail_to_button';

const Contact: NextPage = () => {
  return (
    <div
      className='flex items-center justify-center w-screen h-[25vh]  bg-base-200 md:h-[25vh] lg:h-[50vh]'
      id='contact'>
      <div className='flex flex-col'>
        <h1 className='pb-14 md:pb-11'>Say Hi 👇🏿</h1>

        <MailToButton
          label='Write me an E-Mail'
          mailto='mailto:afamsdev@gmail.com'
        />
      </div>
    </div>
  );
};

export default Contact;
