/**
 * Soho Toast Popup.
 * This file contains the Typescript mappings for the public
 * interface of the Soho jQuery toast control.
 */

/**
 * The possible options available to control the position of the popup.
 */
type SohoToastPosition = 'top right' | 'top left' | 'bottom left' | 'bottom right';

/**
 * Toast options.
 */
interface SohoToastOptions {
  /** The title string at the top of the toast. */
  title: string;

  /** The message string displayed in the toast.  */
  message: string;

  /** Controls the location of ALL toasts currently displayed. */
  position?: SohoToastPosition;

  /** Prevents the display of the toast, but allows for an audible queue.  */
  audibleOnly?: boolean;

  /** Display the progress bar counting down to dismissal. */
  progressBar?: boolean;

  /** How long to display the toast popup for, in milliseconds.  */
  timeout?: number;

  /** Allow anchor tags in message */
  allowLink?: boolean;

  /** if true, allows user to drag/drop the toast container. */
  draggable?: boolean;

  /** Save position to local storage. */
  savePosition?: boolean;

  /** Add extra attributes like id's to the component **/
  attributes?: Array<Object> | Object;
}

/**
 * This interface represents the pub Api exposed by the
 * Soho control.
 */
interface SohoToastStatic {
  show(): void;
}

/**
 * JQuery Integration
 */
interface JQueryStatic {
  toast: SohoToastStatic;
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
  toast(options?: SohoToastOptions): JQuery;
}
