import { NextPage } from 'next';
import MailToButton from './mail_to_button';

interface Props {}

const Contact: NextPage<Props> = () => {
  return (
    <div
      className='flex items-center justify-center w-screen h-screen  bg-base-200'
      id='contact'>
      <div className='flex flex-col'>
        <h1 className='border-solid mb-52 '>Contact Section</h1>

        <MailToButton
          label='Write me an E-Mail'
          mailto='mailto:afamsdev@gmail.com'
        />
      </div>
    </div>
  );
};

export default Contact;
