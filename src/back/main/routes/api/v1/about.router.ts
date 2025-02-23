import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { FastifyInstance } from 'fastify'

const aboutRouter = async (fastify: FastifyInstance) => {
  const { config } = fastify
  const { baseDir } = config
  const { version } = JSON.parse(
    await readFile(join(baseDir, 'package.json'), 'utf8'),
  )
  fastify.get('/', () => ({ version }))
  return Promise.resolve()
}

export { aboutRouter }
