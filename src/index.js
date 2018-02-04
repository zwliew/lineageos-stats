const fetch = require('cross-fetch')
const cheerio = require('cheerio')

const BASE_URL = 'https://stats.lineageos.org/'

async function fetchWebsite() {
  const res = await fetch(BASE_URL)
  const data = await res.text()
  return data
}

async function getModels() {
  const data = await fetchWebsite()
  const $ = cheerio.load(data)
  const models = $('#top-devices .leaderboard-row').map((i, el) => ({
    name: el.children[1].children[1].children[0].data,
    ranking: parseInt(el.children[1].children[0].data.slice(0, -2)),
    installs: parseInt(el.children[3].children[0].data)
  })).get()
  return models
}

async function getCountries() {
  const data = await fetchWebsite()
  const $ = cheerio.load(data)
  const countries = $('#top-countries .leaderboard-row').map((i, el) => ({
    code: el.children[1].children[1].children[0].data,
    ranking: parseInt(el.children[1].children[0].data.slice(0, -2)),
    installs: parseInt(el.children[3].children[0].data)
  })).get()
  return countries
}

async function getTotalInstalls() {
  const data = await fetchWebsite()
  const $ = cheerio.load(data)
  return parseInt($('#total-download .aside-value')[0].children[0].data)
}

async function getLastUpdated() {
  const data = await fetchWebsite()
  const $ = cheerio.load(data)
  const dateStr = $('#total-download .aside-date')[0].children[0].data
  const date = Date.parse(dateStr.substr(11, 16))
  return date
}

module.exports = {
  getModels,
  getCountries,
  getTotalInstalls,
  getLastUpdated
}
