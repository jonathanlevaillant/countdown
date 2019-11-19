import moment from 'moment';

export const getDuration = (lastUpdate, recurrence, unit = 'seconds') => {
  return moment.duration(recurrence - moment().diff(lastUpdate, unit), unit);
};
