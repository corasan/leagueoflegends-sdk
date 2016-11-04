'use strict';
const request = require('request-promise');
const LeagueofLegends = require('../LeagueofLegends');
const url = 'api.pvp.net/api/lol';
const classRef = LeagueofLegends.prototype;

classRef.game = function(summonerId) {
  let region = this.region;
  return request({
    uri: `https://${region}.${url}/${region}/v1.3/game/by-summoner/${summonerId}/recent?api_key=${this.api_key}`,
    json: true
  });
}
