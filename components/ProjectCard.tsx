import React, { ReactComponentElement } from 'react';
import Image from 'next/image';
interface Props {
  projects: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    projectDescription: string;
    projectLink: string;
  };
}

// const Projects: NextPage<Props> = () => {

const ProjectCard = ({ projects }: Props) => {
  return (
    <div className='shadow-xl card lg:card-side bg-base-100'>
      <figure>
        <Image
          src='/../public/images/afam_headshot_books_cropped.jpg'
          alt="image of a project I've worked on"
          className='w-full'
          height={300}
          width={300}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className='justify-end card-actions'>
          <button className='btn btn-primary'>Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
