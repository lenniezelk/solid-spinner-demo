import { FaBrandsGithub, FaSolidBookOpen } from 'solid-icons/fa';
import { Component } from 'solid-js';
import styles from './Home.module.css';
import Spinners from './Spinners';

const Home: Component = () => {
  return (
    <>
      <div class={`${styles.titleContainer}`}>
        <h1 style={{ 'margin-right': '16px' }}>Solid Spinner</h1>
        <a target="__blank" href="https://github.com/lenniezelk/solid-spinner">
          <FaBrandsGithub size="2rem" />
        </a>
      </div>
      <div class={`${styles.docsLink}`}>
        <a
          target="__blank"
          href="https://github.com/lenniezelk/solid-spinner#wip-solid-spinner"
        >
          Docs <FaSolidBookOpen style={{ 'margin-left': '8px' }} size="24" />
        </a>
      </div>
      <Spinners />
    </>
  );
};

export default Home;
