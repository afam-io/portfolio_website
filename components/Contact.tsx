import { NextPage } from 'next';
import MailToButton from './mail_to_button';

interface Props {}

const Contact: NextPage<Props> = () => {
  return (
    <div
      className='box-border flex items-center justify-center w-screen h-screen border-4 border-solid bg-base-200 border-cyan-400'
      id='contact'>
      <div className='flex flex-col'>
        <h1 className='box-border border-4 border-solid mb-52 border-cyan-400'>
          Contact Section
        </h1>

        <MailToButton
          label='Write me an E-Mail'
          mailto='mailto:afamsdev@gmail.com'
        />
      </div>
    </div>
  );
};

export default Contact;
