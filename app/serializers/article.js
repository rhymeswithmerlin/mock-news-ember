import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  // TODO: Find better primaryKey or edit API response to have ID
  primaryKey: 'publishedAt'
});
