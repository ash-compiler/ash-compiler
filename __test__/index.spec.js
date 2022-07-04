import { expect, describe, test } from "@jest/globals";

import { sum } from "../index.js";

describe("sum", () => {
  test("sum from native", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
