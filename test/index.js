const test = require('ava')
const api = require('../src')

test('getModels yields valid results', async t => {
  try {
    const res = await api.getModels()
    t.true(res.length > 0)
    t.true(res[0].name.length > 0)
    t.true(res[0].installs > 0)
    t.true(res[0].ranking > 0)
  } catch (e) {
    console.log(e)
    t.fail()
  }
})

test('getCountries yields valid results', async t => {
  try {
    const res = await api.getCountries()
    t.true(res.length > 0)
    t.true(res[0].code.length > 0)
    t.true(res[0].installs > 0)
    t.true(res[0].ranking > 0)
  } catch (e) {
    console.log(e)
    t.fail()
  }
})

test('getTotalInstalls yields valid results', async t => {
  try {
    const res = await api.getTotalInstalls()
    t.true(res > 0)
  } catch (e) {
    console.log(e)
    t.fail()
  }
})

test('getLastUpdated yields valid results', async t => {
  try {
    const res = await api.getLastUpdated()
    t.true(Date.now() > res)
  } catch (e) {
    console.log(e)
    t.fail()
  }
})
