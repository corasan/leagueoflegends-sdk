require('dotenv').config();

const assert = require('assert');
const api_key = process.env.LOL_API_KEY;

const LeagueofLegends = require('../../index');
const lol = new LeagueofLegends(api_key, 'na');

describe('Stats', function() {
  describe('#statsRanked', function() {
    it('should get the stats of the summoner', function() {
      return lol.statsRanked('48641392').then((result) => {
        assert.equal(result.summonerId, '48641392');
      });
    });
  });

  describe('#statsRanked', function() {
    it('should get a summary of the summoner stats', function() {
      return lol.statsSummary('48641392').then((result) => {
        assert(result['playerStatSummaries'].length, !0);
      })
    });
  });
});
