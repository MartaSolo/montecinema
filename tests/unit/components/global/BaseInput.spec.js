import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseInput from "@/components/global/BaseInput.vue";

describe("BaseInput.vue", () => {
  it("sets the entered by a user value as an input value", async () => {
    const wrapper = mount(BaseInput);
    const input = wrapper.find("input");

    await input.setValue("mail@monterail.com");

    expect(input.element.value).toBeDefined("mail@monterail.com");
  });
  it("emits an event on input event", () => {
    const wrapper = mount(BaseInput);
    const input = wrapper.find("input");

    input.trigger("input");

    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  });
  it("emits an event with event.target.value on input event", () => {
    const wrapper = mount(BaseInput);
    const input = wrapper.find("input");

    input.trigger("input");

    const emittedEvent = wrapper.emitted("update:modelValue");

    expect(emittedEvent).toHaveLength(1);
  });
});
