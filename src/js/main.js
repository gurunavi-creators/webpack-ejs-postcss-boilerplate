'use strict';

import sample from './modules/sample';

const SAMPLEMAIN = {
  init() {
    sample();
  },
};

SAMPLEMAIN.init();

window.SAMPLEMAIN = SAMPLEMAIN;
