import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faClock, faCheckCircle, faCoins, faBackward, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckCircle, faClock, faCoins, faBackward, faMinusCircle);

const statusIcons = {
  check: 'check-circle',
  waiting: 'clock',
  paid: 'coins',
  back: 'backward',
  freeze: 'minus-circle',
};

const setStatusIcon = (data) => {
  if (data === 'check') {
    return statusIcons.check
  }
  if (data === 'waiting') {
    return statusIcons.waiting
  }
  if (data === 'paid') {
    return statusIcons.paid
  }
  if (data === 'back') {
    return statusIcons.back
  }
  if (data === 'freeze') {
    return statusIcons.freeze
  }
};

export default setStatusIcon;