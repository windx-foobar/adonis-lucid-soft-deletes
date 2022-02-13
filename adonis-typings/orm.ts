/*
 * adonis-lucid-soft-deletes
 *
 * (c) Lookin Anton <lookin@lookinlab.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Adonis/Lucid/Orm' {
  import { HooksDecorator } from '@ioc:Adonis/Lucid/Orm'

  /**
   * Patch Lucid Model
   */
  type SafeDeleteEventsList = EventsList | 'restore'
  type SafeDeleteHooksHandler<Data, Event extends SafeDeleteEventsList> =
    ((data: Data, event: Event) => Promise<void> | void)
    | string

  interface LucidModel {
    before<Model extends LucidModel, Event extends SafeDeleteEventsList>(
      this: Model,
      event: Event,
      handler: SafeDeleteHooksHandler<InstanceType<Model>, Event>
    ): void;

    after<Model extends LucidModel, Event extends SafeDeleteEventsList>(
      this: Model,
      event: Event,
      handler: SafeDeleteHooksHandler<InstanceType<Model>, Event>
    ): void;
  }

  export const beforeRestore: HooksDecorator
  export const afterRestore: HooksDecorator
}
