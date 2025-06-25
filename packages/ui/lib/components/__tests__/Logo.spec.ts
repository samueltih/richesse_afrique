import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Logo from "../Logo.vue";

describe("Given", () => {
    it("", () => {
        const wrapper = mount(Logo, { props: { expanded: true, content: '5'} });
        expect(wrapper.text()).toContain("5")
    });
})