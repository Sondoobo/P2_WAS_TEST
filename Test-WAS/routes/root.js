'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: "오늘 하루는 너무 심심해" }
  })
}
