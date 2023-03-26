import { RouteProps } from 'react-router-dom';
import Circles from './components/Circles';
import Waveform from './components/Waveform';
import Spectrum from './components/Spectrum';
import Animation from './components/Animation';

export interface Route {
  title: string,
  url: string,
  component?: RouteProps['Component'],
}

export interface Routes {
  [groupName: string]: Route[]
}

export default {
  games: [
    // {
    //   title: 'life',
    //   url: '/life',
    //   component: Life,
    // },
    {
      title: 'circles',
      url: '/circles',
      component: Circles,
    },
    {
      title: 'waveform',
      url: '/waveform',
      component: Waveform,
    },
    {
      title: 'spectrum',
      url: '/spectrum',
      component: Spectrum,
    },
    // {
    //   title: 'motion',
    //   url: '/motion',
    //   component: Motion,
    // },
    {
      title: 'animation',
      url: '/animation',
      component: Animation,
    },
  ],
  links: [
    { title: 'github', url: 'https://github.com/mayavera' },
    { title: 'linkedin', url: 'https://linkedin.com/in/mayavera' },
    { title: 'codewars', url: 'https://www.codewars.com/users/mayavera' },
    { title: 'stackoverflow', url: 'https://stackexchange.com/users/13452692/maya-vera' },
  ],
} as Routes;
