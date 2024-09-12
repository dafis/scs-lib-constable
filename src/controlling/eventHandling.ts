/** @module eventHandling */

/**
 * Derive state classes from this base state.
 */
export abstract class ReactiveState {
  /**
   * Handles the event and returns a new {ReactiveState}.
   * @abstract
   * @param {Event} event The event that triggers for a state.
   * @return {ReactiveState} The new state is computed from the old state and the event.
   * There may also be side effects!
   */
  abstract handleEvent(event: Event): ReactiveState;
}
