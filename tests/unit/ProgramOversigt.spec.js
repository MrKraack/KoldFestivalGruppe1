import ProgramOversigt from "@/views/ProgramOversigt.vue"
import { mount } from "@vue/test-utils"

describe("Testing if click events works",()=>{
    test("When clicked, class should be changed from is-closed to is-active on div", async () => {
        //Mount the website
        const wrapper = mount(ProgramOversigt); 
        //Get the element from dom - wait for the data to refund
        const clickDivEL = await wrapper.find('[data-testid="testDivClick"]');
        //Checks that the div has the class "is-closed"
        expect(clickDivEL.classes()).toContain("is-closed");
        //Simulate a click and wait for it to finish
        await clickDivEL.trigger("click");
        //Checks if the class has changed
        expect(clickDivEL.classes()).toContain("is-active");
        
    })
})