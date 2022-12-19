import { Component, For } from 'solid-js';
import {
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinnerProps,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from 'solid-spinner';
import styles from './Spinners.module.css';
import { AudioSpinner, BallTriangle, Bars, Circles } from 'solid-spinner';

const SpinnerMap = new Map<Component<SpinnerProps>, string>([
  [AudioSpinner, 'Audio'],
  [BallTriangle, 'Ball Triangle'],
  [Bars, 'Bars'],
  [Circles, 'Circles'],
  [Grid, 'Grid'],
  [Hearts, 'Hearts'],
  [Oval, 'Oval'],
  [Puff, 'Puff'],
  [Rings, 'Rings'],
  [TailSpin, 'Tail Spin'],
  [ThreeDots, 'Three Dots'],
  [SpinningCircles, 'Spinning Circles'],
]);

const Spinners: Component = () => {
  return (
    <div class={`${styles.container}`}>
      <For each={Array.from(SpinnerMap.entries())}>
        {([Comp, title]) => {
          return (
            <div class={`${styles.item}`}>
              <h2>{title}</h2>
              <Comp style={{ 'margin-top': '12px' }} />
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default Spinners;
