import PropTypes from 'prop-types';

import useCountdown from '../utils/useCountdown';
import useCountdownIsOver from '../utils/useCountdownIsOver';
import useSetCountdownStatus from '../utils/useSetCountdownStatus';

const Status = props => {
  const { id, lastUpdate, recurrence } = props;

  useSetCountdownStatus(id, useCountdownIsOver(useCountdown(lastUpdate, recurrence)));

  return null;
};

Status.propTypes = {
  id: PropTypes.number.isRequired,
  lastUpdate: PropTypes.object.isRequired,
  recurrence: PropTypes.number.isRequired,
};

export default Status;
