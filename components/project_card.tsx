import React, { ReactComponentElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
interface Props {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  projectDescription: string;
  repoLink: string;
  deploymentLink?: string;
}

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  projectDescription,
  repoLink,
  deploymentLink,
}: Props) => {
  return (
    <section className='shadow-xl card bg-base-100'>
      <figure>
        <Image src={imgSrc} alt={imgAlt} className='w-full ' />
        {/* <figcaption>
            Image of project Redeems homepage showing eco-friendly tutorials
          </figcaption> */}
      </figure>
      <div className=' h-fit p-[0.6rem] md:py-[1.25rem] md:pl-[1rem] card-body'>
        <h3 className=''>{title}</h3>
        <p>{projectDescription}</p>
        <Link href={repoLink} target='_blank'>
          <button className='btn btn-primary w-36'>GitHub Repository</button>
        </Link>
        {deploymentLink ? (
          <Link href={deploymentLink} target='_blank'>
            <button className='btn btn-primary w-36'>Site Deployment</button>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectCard;

/* 

 <section className='shadow-xl card bg-base-100'>
        <figure>
          <Image
            src={ProjectRedeemImage}
            alt="image of a project I've worked on"
            className='w-full '
          />
          /* <figcaption>
            Image of project Redeems homepage showing eco-friendly tutorials
          </figcaption> */
/*   </figure>
          <div className=' h-fit p-[0.6rem] md:py-[1.25rem] md:pl-[1rem] card-body'>
            <h3 className=''>Project Redeem!</h3>
            <p>
              Including a four week full stack project that allowed people to
              share tutorials for building home grown technology.
            </p>
  
            <Link
              href={
                'https://github.com/afam-io/final-project-front-end-boolean-pirates'
              }
              target='_blank'>
              <button className='btn btn-primary w-36'>GitHub Repository</button>
            </Link>
  
            <Link
            href={'https://final-project-front-end-boolean-pirates.vercel.app/'}
            target='_blank'>
            <button className='btn btn-primary w-36'>Site Deployment</button>
            </Link>
            </div>
            </section>{' '}
            
            */
