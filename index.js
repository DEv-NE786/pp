const axios = require("axios")
const Bugsnag = require("./mudules/bugsnag")
const urlsToFetch = require("./data/urls")

const fetchInterval = 600000

const fetchUrlRecursively = async (url) => {
  axios.get(url).catch((error) => {
    Bugsnag.handle(url, error)
})
setTimeout(() => {
  fetchUrlRecursively(url)
}, fetchInterval)

urlsToFetch.forEach((url) => fetchUrlRecursively(url))

console.log("started")