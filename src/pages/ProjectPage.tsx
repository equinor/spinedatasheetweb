import { useModuleCurrentContext } from '@equinor/fusion-framework-react-module-context';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const { currentContext } = useModuleCurrentContext();
  console.log(currentContext)

  return (
    <>
      <p>Spine data sheets</p>
      <p>Current context: {currentContext?.title}</p>
      <Link to={'contractor'}>Contractor 1</Link>
    </>
  );
};

export default ProjectPage