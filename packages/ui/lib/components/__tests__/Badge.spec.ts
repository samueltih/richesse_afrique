import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Badge from "../Badge.vue";

describe("Given", () => {
    it("", () => {
        const wrapper = mount(Badge, { props: { expanded: true, content: '5'} });
        expect(wrapper.text()).toContain("5")
    });
})