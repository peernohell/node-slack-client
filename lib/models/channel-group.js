/**
 *
 */

var inherits = require('inherits');

var BaseChannel = require('./base-channel');


var ChannelGroup = function ChannelGroup(name, opts) {
  BaseChannel.call(this, name, opts);
};

inherits(ChannelGroup, BaseChannel);


ChannelGroup.prototype._setProperties = function setProperties(opts) {
  // XXX fix: do not reset members if opts donot have members. // this.members = opts.members || [];
  this.members = this.members || [];

  ChannelGroup.super_.prototype._setProperties.call(this, opts);
};


module.exports = ChannelGroup;
