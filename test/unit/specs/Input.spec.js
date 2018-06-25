import Vue from 'vue'
import Input from '@/components/Input'

describe('Input.vue', () => {
  it('has a onClickSave method', () => {
    expect(typeof Input.methods.onClickSave).to.equal('function')
  })

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Input)
    Input.data.input1 = 'hello'
    Input.data.input2 = 'world'
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h3').textContent)
      .to.equal('Enter inputs and click on Confirm button')
  })
})
