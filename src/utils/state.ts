import { atom } from 'recoil';

const currentSectionState = atom({
  key: 'currentSection',
  default: -1,
});

export default currentSectionState;
