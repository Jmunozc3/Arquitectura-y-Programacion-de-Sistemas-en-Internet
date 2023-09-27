
import { assertEquals } from  'https://deno.land/std@0.202.0/asserts/asserts_equals.ts';
import { mult } from './Ejercicio2.ts';



Deno.test("Ejercicio2", () => {
  const res = mult(27);

  assertEquals(res, [0, 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25] );

});