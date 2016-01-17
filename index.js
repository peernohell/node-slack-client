module.exports = {
  WebClient: require('./lib/clients/web/client'),
  RtmClient: require('./lib/clients/rtm/client'),
  EVENTS: require('./lib/clients/events'),
  LegacyRTMClient: require('./lib/clients/default/legacy-rtm'),
  SlackMemoryDataStore: require('./lib/data-store/memory-data-store'),
};
