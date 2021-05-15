import lizard from '@images/icon-lizard.svg';
import paper from '@images/icon-paper.svg';
import rock from '@images/icon-rock.svg';
import scissors from '@images/icon-scissors.svg';
import spock from '@images/icon-spock.svg';
import { options } from '../../utils/gameUtils';

const items = [
  {
    id: 0,
    gradColor1: [39, 89, 49],
    gradColor2: [40, 84, 53],
    src: scissors,
    name: options.scissors,
  },
  {
    id: 1,
    gradColor1: [230, 89, 62],
    gradColor2: [230, 89, 65],
    src: paper,
    name: options.paper,
  },
  {
    id: 2,
    gradColor1: [349, 71, 52],
    gradColor2: [349, 70, 56],
    src: rock,
    name: options.rock,
  },
  {
    id: 3,
    gradColor1: [261, 72, 63],
    gradColor2: [261, 72, 63],
    src: lizard,
    name: options.lizard,
  },
  {
    id: 4,
    gradColor1: [189, 59, 53],
    gradColor2: [189, 58, 57],
    src: spock,
    name: options.spock,
  },
];

// --Cyan: linear-gradient(90deg,
// hsl(189, 59%, 53%), hsl(189, 58%, 57%));
// // --Neutral-
// --Dark-Text: hsl(229, 25%, 31%);
// --Score-Text: hsl(229, 64%, 46%);

export default items;
