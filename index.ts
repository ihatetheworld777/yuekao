function f9(a: number, b: number): string
function f9(a: string, b: number): number

function f9(a: number | string, b: number): number | string {
  if (typeof a === 'string') {
    return Math.pow(a.length, b)
  } else {
    return a.toString() + b
  }
}
f9(1, 2)
