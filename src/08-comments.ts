// TSDoc comments can be used to annotate TypeScript methods.
// It's an effective form of implicit documentation.

/**
 * Adds numbers
 * @param number1 The 1st number
 * @param number2 The 2nd number
 * @returns The sum
 */
function add(number1: number, number2: number): number {
  return number1 + number2;
}

/**
 * Props for the very special component we are building
 */
interface ComponentProps {
  /** Whether to hide for screenreaders */
  ariaHide: boolean;
  /** The opacity of the element */
  opacity?: number;
  /** Margin specified as a number of pixels or CSS unit */
  margin?: string | number;
}

function getMargin(props: ComponentProps) {
  // See type annotation on margin for the description
  return props.margin;
}
