import { RouteProps } from 'react-router-dom';
// TODO: upgrade react-conway to version with typescript
// @ts-ignore
import Life from 'react-conway';
import Playground from './components/Playground';
import Waveform from './components/Waveform';
import Spectrum from './components/Spectrum';
import Motion from './components/Motion';
import Animation from './components/Animation';

export interface Route {
  title: string,
  url: string,
  component?: RouteProps['component'],
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
      title: 'playground',
      url: '/playground',
      component: Playground,
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
