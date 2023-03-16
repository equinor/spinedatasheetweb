import { FC } from 'react';
import { Link } from 'react-router-dom';

const ContractorPage = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <p>Spine data sheets</p>
      <Link to={'datasheet'}>Data sheet 1</Link>
    </>
  );
};

export default ContractorPage