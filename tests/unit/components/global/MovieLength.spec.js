import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import MovieLength from "@/components/global/MovieLength.vue";

describe("MovieLength.vue", () => {
  it("displays movie length as a string with number of hours and minutes", () => {
    const wrapper = shallowMount(MovieLength, {
      props: {
        length: 125,
      },
    });
    expect(wrapper.find('[data-spec = "length"]')).toBeDefined("2h 05 min");
  });
});
