import { Add, Substract, Multiply } from "./calc.mjs";

test("addition de 5+2", () => expect(Add(5, 2)).toEqual(7));

test("soustraction de 5-2", () => expect(Substract(5, 2)).toEqual(3));

test("addition de 5*2", () => expect(Multiply(5, 2)).toEqual(10));
