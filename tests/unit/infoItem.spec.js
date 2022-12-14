import infoItem from "@/components/infoItem.vue";
import {mount} from "@vue/test-utils";

describe("Checks if infoItem displays text from property",() => {
    test("props text to p-tag",()=>{
        const wrapper = mount(infoItem, {
            props:{
                infoText: "This is info text"                
            }
        })
        const infoTextEl = wrapper.find('[data-testid="testInfoText"]').text();
        expect(infoTextEl).toBe("This is info text");

    })
})