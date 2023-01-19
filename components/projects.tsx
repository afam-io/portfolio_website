import { NextPage } from 'next';
import ProjectRedeemImage from '../public/images/redeem_screenshot.png';
import ProjectSorcery from '../public/images/project_sorcery_screenshot.png';
import ProjectCard from './project_card';
import type { Props as ProjectProps } from './project_card';

const projectArr: ProjectProps[] = [
  {
    imgSrc: ProjectRedeemImage,
    imgAlt: "image of a project I've worked on",
    title: 'Project Redeem',
    projectDescription:
      'Including a four week full stack project that allowed people to share tutorials for building home grown technology.',
    repoLink:
      'https://github.com/afam-io/final-project-front-end-boolean-pirates',
    deploymentLink:
      'https://final-project-front-end-boolean-pirates.vercel.app/',
  },
  {
    imgSrc: ProjectSorcery,
    imgAlt: "image of a project I've worked on",
    title: 'Project Sourcery',
    projectDescription:
      'Sourcery is a centralized platform for posting and viewing resources that could be of use to School of Code bootcampers.',
    repoLink: 'https://github.com/afam-io/w9_frontend-project-team-sourcery',
  },
];

/**
 *
 * @todo I will start with 2 cards that go in a grid that responsively changes to large cards when resized
 * @todo Correct figcaption styling or get rid of figcaptions on cards
 * @todo Explain why this project was important, what I learnt sell myself in this area.
 * @todo Show mobile version of site in the
 */
const Projects: NextPage = () => {
  return (
    <div className='w-screen max-h-fit bg-base-200' id='projects'>
      <h1 className='py-10 pl-2'>Projects</h1>
      {projectArr.map((x) => (
        <ProjectCard
          imgSrc={x.imgSrc}
          imgAlt={x.imgAlt}
          title={x.title}
          projectDescription={x.projectDescription}
          repoLink={x.repoLink}
          deploymentLink={x.deploymentLink}
          key={x.title}
        />
      ))}
    </div>
  );
};

export default Projects;
