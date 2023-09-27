

import { assertEquals } from  'https://deno.land/std@0.202.0/asserts/asserts_equals.ts';
import { orde } from './Ejercicio3.ts';


Deno.test("Ejercicio3", () => {
  const ordenarr: string[] = ["hola", "adios", "quease"];
  const res = orde(ordenarr);
  assertEquals(res, "a d i o s");

});

