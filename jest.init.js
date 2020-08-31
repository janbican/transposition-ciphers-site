import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import '@testing-library/jest-dom'

global.localVue = createLocalVue()

global.localVue.use(BootstrapVue)
