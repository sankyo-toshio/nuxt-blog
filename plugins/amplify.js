import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'
import awsconfig from '@/src/aws-exports'

console.log("awsconfig")
console.log(awsconfig)
Amplify.configure(awsconfig)

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.component(components)