import faqItem from "@/components/Info/FaqItem.vue";
import {mount} from "@vue/test-utils";

describe("Testing if title gets text",  () => {
    test("Should display title from props", async () => {
        
        let wrapper = mount(faqItem, {
            props: {
                title: "Random Title",    
            }
        });
        const faqTitelEL = wrapper.find('[data-testid="faqItemTitle"]').text();
        expect(faqTitelEL).toBe("Random Title");
    })
})
describe("Testing if beskrivelse gets text",  () => {
    test("Should display beskrivelse from props", () => {
        
        let wrapper = mount(faqItem, {
            props: {
                beskrivelse: "Dette er en beskrivelse"
    
            }
        });
        const faqBeskrivelseEL = wrapper.find('[data-testid="faqItemBeskrivelse"]').text();
        expect(faqBeskrivelseEL).toBe("Dette er en beskrivelse");
    })
})