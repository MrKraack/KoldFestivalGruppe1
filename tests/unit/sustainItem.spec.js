import sustainItem from "@/components/sustainItem.vue"
import { mount } from "@vue/test-utils"


describe("Testing if this works", () => {
    test("check if p tag gets text",() => {
        const wrapper = mount(sustainItem, {
            props: {
                sustainText: "This is sustainText"
            }
        })
        const sustainTextEL = wrapper.find('[data-testid="testSustainText"]').text();
        expect(sustainTextEL).toBe("This is sustainText");
    })
})
