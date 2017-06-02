/**
 * Soho List View.
 *
 * This file contains the Typescript mappings for the public
 * interface of the Soho jQuery listview control.
 */

type SohoListViewSelectable = false | 'single' | 'multiple';

/** How individual items are referenced in the list view. */
type SohoListViewItemReference = number | JQuery;

interface SohoListViewOptions {
  /** Data to display. */
  dataset?: Object[];

  /** Html template string */
  template?: string;

  /** Audible label (or uses parent title). */
  description?: string;

  /** Activates paging. */
  paging?: boolean;

  /** Sets the number of listview items available per page. */
  pagesize?: number;

  /** If true, associates itself with a Searchfield/Autocomplete and allows itself to be filtered */
  searchable?: boolean;

  /** Selection setting. */
  selectable?: SohoListViewSelectable;

  /** Select on focus? */
  selectOnFocus?: boolean;

  /** URL or source function. */
  source?: SohoListViewSourceFunction | string;
}

type SohoListViewSourceFunction = (
  pagerInfo: SohoPagerPagingInfo,
  SohoListViewResponseFunction
) => void;

type SohoListViewResponseFunction = (
  data: Object[],
  pagerInfo: SohoPagerPagingInfo
) => void;

/**
 * This interface represents the public API exposed by the
 * listview.
 */
interface SohoListViewStatic {
  /** Access to the control's options block. */
  settings: SohoListViewOptions;

  /** Selected items - as jQuery elements  */
  selectedItems: JQuery[];

  /** Toggles all the selected elements. */
  toggleAll(): void;

  /** ClearToggles all the selected elements. */
  clearSelection(): void;

  /** Clear the list. */
  clear(): void;

  removeAllSelected(): void;

  clearAllSelected(): void;

  /** Updates the busy indicator with any new seettings. */
  updated(): void;

  /** Destroys the control on completion. */
  destroy(): void;

  /**
   * Removes the given item from the list view, if rendered.
   */
  remove(item: SohoListViewItemReference): void;

  /**
   * Unselects the given item from the list viewm, if rendered.
   */
  unselect(item: SohoListViewItemReference): void;

  /**
   * Selects the given item from the list view, if rendered.
   */
  select(item: SohoListViewItemReference): void;
}

/**
 * JQuery Integration
 */
interface JQueryStatic {
  listview: SohoListViewStatic;
}

interface JQuery {
  listview(options?: SohoListViewOptions): JQuery;
}
