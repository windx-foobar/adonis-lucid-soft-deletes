/// <reference path="../../adonis-typings/index.ts" />

import 'reflect-metadata'
import { HooksDecorator } from '@ioc:Adonis/Lucid/Orm'

/**
 * Before/After restore hook
 */
export const beforeRestore: HooksDecorator = () => {
  return function decorateAsHook (target, property) {
    target.boot()
    target.before('restore', target[property].bind(target))
  }
}

export const afterRestore: HooksDecorator = () => {
  return function decorateAsHook (target, property) {
    target.boot()
    target.after('restore', target[property].bind(target))
  }
}
