import MobileNavigation from "@/components/Navigation/MobileNavigation"
import { mount } from '@vue/test-utils'


// describe('MobileNavigation', () => {
//     test('Testing test', () => {
//         expect(true).toBe(true)
//     })
// })

describe('MobileNavigation', () => {
    test('Testing test', () => {
        const wrapper = mount(MobileNavigation)
        expect(wrapper.find('nav').isVisible()).toBe(true)
    })

    test('Check if navigation has a class, after passing active props as true', async () => {
        const wrapper = mount(MobileNavigation, {
            props: {
                active: true
            }
        })
        expect(wrapper.find('.mobile-navigation--visible').isVisible()).toBe(true)
    })
})