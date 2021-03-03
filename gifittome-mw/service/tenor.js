/**
 * Adatper to tenor api
 * https://tenor.com/
 */

const axios = require('axios');

const API_ROUTE = 'https://api.tenor.com';
const API_VERSION = 'v1';

const MAX_LIMIT = 50;

//@todo handle limit and pos somehow

function Tenor(apiKey, locale, contentFilter) {
  this.apiKey = apiKey;
  this.locale = locale;
  this.contentFilter = contentFilter;
}

Tenor.prototype.search = function (searchString, params) {
  let verb = 'search';
  params = params || {};
  params.q = searchString;
  return execRequest(verb, this, params).then(getGifs);
};

Tenor.prototype.trending = function (count) {
  let result = [];
  return requestPart(this, count, result, null);
};

function requestPart(tenor, count, result, next) {
  let verb = 'trending';
  let limit = count;
  if (count > MAX_LIMIT) {
    limit = MAX_LIMIT;
  }
  if (limit > 0) {
    return execRequest(verb, tenor, {
      limit: limit,
      next: next
    }).then(function (response) {
      result = result.concat(response.results);
      return requestPart(tenor, count - limit, result, response.next);
    });
  } else {
    return Promise.resolve(result);
  }
}

Tenor.prototype.gifs = function (ids) {
  let verb = 'gifs';
  if (ids.length <= 50) {
    return execRequest(verb, this, {
      ids: ids.join(',')
    }).then(getGifs);
  } else {
    return new Promise.reject('Max. number (50) of ids exceeded (' + ids.length + ')');
  }
};

function execRequest(verb, tenor, verbParams) {
  return new Promise(function (resolve, reject) {
    let url = buildUrl(verb);
    let params = buildParams(verbParams, tenor);
    console.log(url, params);
    axios.get(url, {
      params: params
    }).then(function (response) {
      resolve(response.data);
    }, reject);
  });
}

function buildUrl(verb) {
  return API_ROUTE + '/' + API_VERSION + '/' + verb;
}

//@todo missing params media_filter, ar_range
function buildParams(verbParams, tenor) {
  var defaultParms = {
    key: tenor.apiKey,
    locale: tenor.locale,
    contentfilter: tenor.contentFilter
  };

  return Object.assign(defaultParms, verbParams);
}

function getGifs(response) {
  return response.results;
}

module.exports = function (apiKey, locale, contentFilter) {
  return new Tenor(apiKey, locale, contentFilter);
};