import { expect, describe, test } from "vitest";

import { sum } from "../index.js";

describe("sum", () => {
  test("sum from native", (t) => {
    expect(sum(1, 2)).toBe(3);
  });
});
