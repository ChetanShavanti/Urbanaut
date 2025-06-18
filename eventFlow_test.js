const Login = require('./steps/Login');
const CreateEvent = require('./steps/CreateEvent');
const AddSessions = require('./steps/AddSessions');
const AddPhotos = require('./steps/AddPhotos');
const DescriptionDetails = require('./steps/DescriptionDetails');
const TicketDetails = require('./steps/TicketDetails');
const PublishEvent = require('./steps/PublishEvent');

Feature('Event Flow');

Scenario('User can create and publish event', async ({ I }) => {
  await Login.run(I);
  await CreateEvent.run(I);
  await AddSessions.run(I);
  await AddPhotos.run(I);
  await DescriptionDetails.run(I);
  await TicketDetails.run(I);
  await PublishEvent.run(I);
});