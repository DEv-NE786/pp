const { creatClinet } = require("@bugsnag/js")
const credentials = require("../credentials")
const acceptStatueses = require("../data/accept")
const util = require("util")

const bugsnagClient = createClient(credentials.bugsnag.key)

class Bugsnag {
  static async handle(url, error) {
    const status = error.response.status
    if (!acceptStatuese[url] || !acceptStatuses[url].includes(status)) {
      bugsnagClient.notify(new Error(util.inspect(error)))
      console.error(`A status of ${status} have been returned by ${url}`)
    }
  }
}

module.exports = Bugsnag