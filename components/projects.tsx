import { NextPage } from 'next';
import ProjectRedeemImage from '../public/images/redeem_screenshot.png';
import ProjectSorcery from '../public/images/project_sorcery_screenshot.png';
import ProjectCard from './project_card';
import type { Props as ProjectProps } from './project_card';

/**
 *
 * @todo I will start with 2 cards that go in a grid that responsively changes to large cards when resized
 * @todo Correct figcaption styling or get rid of figcaptions on cards
 * @todo Explain why this project was important, what I learnt sell myself in this area.
 * @todo Show mobile version of site in the
 */

const projectArr: ProjectProps[] = [
  {
    imgSrc: ProjectRedeemImage,
    imgAlt: "image of a project I've worked on",
    title: 'Project Redeem',
    projectDescription:
      'Including a four week full stack project that allowed people to share tutorials for building home grown technology. We used NextJS originally to host only the frontend but with Heroku removing their free tier I also updated the app to host the backend as well. I learnt a lot from this project especially about working in agile teams with rotating roles and took part in my first code reviews while having my code reviewed was informative as well for how to improve clarity while working in teams on seperate features.',
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
      'Sourcery is a centralized platform for posting and viewing resources that could be of use to School of Code bootcampers, it was built as a team project in one week. In this project I built the backend and experienced my first CORS errors which while frustrating was also a great learning experience. I also built out E2E tests with cypress for the frontend and added api requests to the frontend. It was incredibel to see what the team could do together after only 7 weeks on a bootcamp and also showed the power of agile working methodologies in time pressured situations.',
    repoLink: 'https://github.com/afam-io/w9_frontend-project-team-sourcery',
  },
];

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
