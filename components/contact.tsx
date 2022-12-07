import { NextPage } from 'next';
import MailToButton from './mail_to_button';

interface Props {}

const Contact: NextPage<Props> = () => {
  return (
    <div
      className='flex items-center justify-center w-screen h-screen border-4 border-red-600 bg-base-200 md:h-[50vh]'
      id='contact'>
      <div className='flex flex-col'>
        <h1 className='border-solid mb-52 md:mb-11 '>Say Hi</h1>

        <MailToButton
          label='Write me an E-Mail'
          mailto='mailto:afamsdev@gmail.com'
        />
      </div>
    </div>
  );
};

export default Contact;
