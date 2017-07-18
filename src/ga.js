import ua from 'universal-analytics'

export const visitor = ua('UA-82054592-4', window.gaUid, { strictCidFormat: false, https: true })