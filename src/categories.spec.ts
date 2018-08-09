import assert from 'assert'

import { isControl } from './categories'

assert.equal(isControl(10), true)
