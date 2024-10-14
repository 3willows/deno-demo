import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test(function addTest() {
  // trigger test
  assertEquals(add(2, 3), 6);
});
