<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <DisclosureButton type="button" @click="myValues.openlogin = true"
      class="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
      <span>Sign up-in</span>
    </DisclosureButton>
    <TransitionRoot as="template" :show="myValues.openlogin">
      <Dialog as="div" class="relative z-10" @close="myValues.openlogin = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <!-- <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> -->
                  <DialogTitle as="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    {{ myValues.modalheader }}
                  </DialogTitle>
                  <div class="mt-3 sm:mt-5">
                    <DisclosureButton
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      @click="myValues.openlogin = false">
                      <span class="sr-only">Close menu</span>
                      <XMarkIcon class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>

                    <div class="mt-2">
                      <form class="space-y-6" action="#" @submit.prevent="passcallback">
                        <div v-if="myValues.contriescodesshow">

                          <Listbox as="div" v-model="selectedCountry">
                            <ListboxLabel class="block text-sm font-medium text-gray-700">Counrty code</ListboxLabel>
                            <div class="relative mt-1 ulwrapper">
                              <ListboxButton
                                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                <span class="flex items-center">
                                  <img loading="lazy" :src="`/countries-gif-flags/${selectedCountry.iso}.gif`" alt=""
                                    class="h-6 w-6 flex-shrink-0 rounded-full" />
                                  <!-- <nuxt-icon class="h-6 w-6 flex-shrink-0 rounded-full" :name="`countries-svg-flags/${selectedCountry.iso.toLowerCase()}`" filled /> -->
                                  <span
                                    class="ml-3 block truncate">{{ selectedCountry.country +" +"+selectedCountry.code }}</span>
                                </span>
                                <span
                                  class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                              </ListboxButton>

                              <transition leave-active-class="transition ease-in duration-100"
                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                <ListboxOptions
                                  class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  <ListboxOption as="template" v-for="country , index in countries.countryListAlpha2"
                                    :key="index" :value="country" v-slot="{ active, selectedCountry }">
                                    <li
                                      :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']"
                                      @click="countrycodecookie =  country.iso">
                                      <div class="flex items-center">
                                        <img loading="lazy" :src="`/countries-gif-flags/${country.iso}.gif`" alt=""
                                          class="h-6 w-6 flex-shrink-0 rounded-full" />
                                        <!-- <nuxt-icon class="h-3 w-3 flex-shrink-0 rounded-full" :name="`countries-svg-flags/${country.iso.toLowerCase()}`" filled /> -->
                                        <!-- <img :src="require(`~/assets/countries-gif-flags/${index}.gif`)" :alt="`${index}.gif`" class="h-6 w-6 flex-shrink-0 rounded-full" /> -->
                                        <span
                                          :class="[selectedCountry ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ country.country + " +"+country.code }}</span>
                                      </div>

                                      <span v-if="selectedCountry"
                                        :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    </li>
                                  </ListboxOption>
                                </ListboxOptions>
                              </transition>
                            </div>
                          </Listbox>
                        </div>
                        <div v-show="myValues.phoneshow">
                          <label for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            phone</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <DevicePhoneMobileIcon class="block h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <input type="phone" name="phone" id="phone"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="04xx xx xx xx" maxlength="12" minlength="6" v-model="phone">
                          </div>

                        </div>
                        <div v-if="myValues.emailshow">
                          <label for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            email</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <EnvelopeIcon class="block h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input type="email" name="email" id="email"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="test@test.com" v-model="email">
                          </div>

                        </div>
                        <div v-if="myValues.passwordshow">
                          <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            password</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <KeyIcon class="block h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <input :type="myValues.showPassword ? 'text' : 'password'" name="password" id="password"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="••••••••" maxlength="50" minlength="6" v-model="password" required>
                            <button type="button" @click="myValues.showPassword = !myValues.showPassword"
                              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-r-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                              <EyeIcon v-if="myValues.showPassword" class="block h-5 w-5 text-gray-400"
                                aria-hidden="true" />
                              <EyeSlashIcon v-if="!myValues.showPassword" class="block h-5 w-5 text-gray-400"
                                aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div v-if="myValues.repeatpasswordshow">
                          <label for="repeatpassword"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repeat
                            password</label>
                          <div class="relative mb-6">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <KeyIcon class="block h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <input :type="myValues.showrepeatpassword ? 'text' : 'password'" name="repeatpassword"
                              id="repeatpassword"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="••••••••" maxlength="50" minlength="6" v-model="repeatpassword" required>
                            <button type="button" @click="myValues.showrepeatpassword = !myValues.showrepeatpassword"
                              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-r-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                              <EyeIcon v-if="myValues.showrepeatpassword" class="block h-5 w-5 text-gray-400"
                                aria-hidden="true" />
                              <EyeSlashIcon v-if="!myValues.showrepeatpassword" class="block h-5 w-5 text-gray-400"
                                aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div v-if="myValues.remlostshow" class="flex justify-between py-2">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remme" type="checkbox"
                                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required checked>
                            </div>
                            <label for="remme"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <button type="button" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                            Password?</button>
                        </div>
                        <div v-if="myValues.agreelostsignupshow" class="flex justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="agreeterm" type="checkbox"
                                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required checked>
                            </div>
                            <label for="agreeterm"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agree
                              with terms</label>
                          </div>
                          <div>
                            <button type="button" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                              Password?</button>
                            <!-- <button type="button" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Sign
                              up?</button> -->
                          </div>
                        </div>
                        <div v-if="myValues.sentcodeshow">
                          <label for="senttemppass"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sent
                            code</label>
                          <input type="text" name="senttemppass" id="senttemppass" placeholder="------"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white text-center  tracking-widest font-semibold"
                            maxlength="6" v-model="sentcode" @input="checksentcode">
                        </div>
                        <div v-if="myValues.sendverificationagain">
                          <button type="button"
                            class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300 disabled:hover:bg-blue-300"
                            :disabled="myValues.counting">
                            <vue-countdown v-if="myValues.counting" :time="12000" @end="myValues.counting = false"
                              v-slot="{ totalSeconds }">resend
                              agian
                              {{ totalSeconds }} seconds later</vue-countdown>
                            <span v-else @click="resendcode"> resend code </span>
                          </button>
                        </div>
                        <div v-if="myValues.showdragable" class="grid justify-items-center items-center">
                          <LazyHeaderDragVerifyImgChip class="border-2 rounded-lg border-gray-300 shadow-md"
                            :imgsrc="imgsrc.filename" v-model:isPassing="isPassing" :showRefresh="true"
                            text="$t('pull it')" successText="درحال احراز هویت" failTip="تصویر را کامل کنید"
                            successTip="Please be patiant" @refresh="refresh" @passcallback="passcallback"
                            @passfail="handleFail" />
                        </div>
                        <div v-if="myValues.loginshow">
                          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            All registered?
                            <button type="button" class="text-blue-700 hover:underline dark:text-blue-500"
                              @click="gotologin()">Log in</button>
                          </div>
                        </div>
                        <div v-if="myValues.signupshow">
                          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?

                            <button type="button" class="text-blue-700 hover:underline dark:text-blue-500"
                              @click="createaccount()">Create account</button>
                          </div>
                        </div>
                        <div v-if="myValues.showsubmit">
                          <button type="submit"
                            class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300 disabled:hover:bg-blue-300"
                            :disabled="myValues.dissubmit">
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <!-- <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button type="button"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    @click="myValues.openlogin = false">Deactivate</button>
                  <button type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    @click="myValues.openlogin = false" ref="cancelButtonRef">Cancel</button>
                </div> -->
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
  import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions
  } from '@headlessui/vue'
  import {
    XMarkIcon,
    DevicePhoneMobileIcon,
    KeyIcon,
    EyeIcon,
    EyeSlashIcon,
    CheckIcon,
    ChevronUpDownIcon,
    EnvelopeIcon
  } from '@heroicons/vue/20/solid'
  import VueCountdown from '@chenfengyuan/vue-countdown';
  import countries from './countries'
  import dragvercont from './dragvercont'
  var regres = 'login'
  const imgsrc = ref(dragvercont.chooseimg())
  const countrycodecookie = useCookie('countrycodecookie')
  const selectedCountry = ref(countries.countryListAlpha2.filter(country => country.iso == countrycodecookie.value)[
    0] || countries.countryListAlpha2[20])
  const firstsetting = dragvercont.dragvercont()
  const myValues = reactive(
    firstsetting
  )
  // const data = {}
  const email = ref('')
  const password = ref('')
  const repeatpassword = ref('')
  const phone = ref('')
  const sentcode = ref('')

  const createaccount = () => {
    console.log("createaccount------------")
    // myValues = reactive( 
    //   dragvercont.createaccountval()
    // )
    // myValues.contriescodesshow.value = true
    myValues.loginshow = true
    myValues.agreelostsignupshow = true
    // myValues.repeatpasswordshow.value = true
    myValues.passwordshow = false
    myValues.signupshow = false
    myValues.remlostshow = false
    myValues.modalheader = 'Sign up'
    regres = 'signup'
  }
  const gotologin = () => {
    console.log("gotologin------------")
    // myValues = reactive( 
    //   dragvercont.gotologinval()
    // )
    // myValues.contriescodesshow.value = false
    myValues.loginshow = false
    myValues.agreelostsignupshow = false
    // myValues.repeatpasswordshow.value = false
    myValues.signupshow = true
    myValues.passwordshow = true
    myValues.remlostshow = true
    myValues.modalheader = 'Sign in'
    regres = 'login'
  }
  const refresh = () => {
    imgsrc.value = dragvercont.chooseimg(imgsrc.value.num)
  }
  const resendcode = () => {
    regres = 'resendcode'
    passcallback()
  }
  const checksentcode = () => {
    if (sentcode.value.length == 6) {
      regres = 'sentcode'
      passcallback()
    }
  }
  const passcallback = () => {
    console.log("passcallback------------", regres)
    try {
      if (phone.value.length < 9) {
        dragvercont.showtoastnotification('danger', 'phone and code is not valid', 20)
        setTimeout(() => {
          imgsrc.value = dragvercont.chooseimg(imgsrc.value.num)
        }, 4000);
        return false
      }
      if (regres === 'newpassword' && (password.value != repeatpassword.value)) {
        dragvercont.showtoastnotification('danger', 'passwords should be identical', 20)
        setTimeout(() => {
          imgsrc.value = dragvercont.chooseimg(imgsrc.value.num)
        }, 4000);
        return false
      }
      let data = {
        regres,
        countrycode: selectedCountry.value.code,
        phoneal: parseInt(phone.value),
        phone: parseInt(selectedCountry.value.code) + "-" + parseInt(phone.value),
        password: password.value,
        repeatpassword: repeatpassword.value,
        email: email.value,
        sentcode: sentcode.value
      }
      const {
        $sanctumAuth
      } = useNuxtApp()
      // const errors = ref([])
      $sanctumAuth.login(data)
        .then((res) => {
          console.log("resssssss", res)
          dragvercont.showtoastnotification('success', 'welcome', 20)
        }).catch((err) => {
          // imgsrc.value = dragvercont.chooseimg()
          console.log("err---------", err)
          if (err.answ === 'nook') {
            dragvercont.showtoastnotification('danger', err.code, 20)
            return false
          }
          if (err.code === "usrpass matched") {
            console.log("loged ig---------------")
            $sanctumAuth.getUser()
          }
          if (err.code === "created") {
            // console.log(dragvercont.signup.signup())

            myValues.modalheader = 'insert sent code'
            dragvercont.showtoastnotification('success', myValues.modalheader, 20)
            myValues.sentcodeshow = true
            myValues.sendverificationagain = true
            myValues.contriescodesshow = false
            myValues.phoneshow = false
            myValues.agreelostsignupshow = false
            myValues.showdragable = false
            myValues.loginshow = false
            myValues.counting = true
          }
          if (err.code === "matched") {
            myValues.modalheader = 'enter your new password'
            dragvercont.showtoastnotification('success', myValues.modalheader, 20)
            myValues.passwordshow = true
            myValues.repeatpasswordshow = true
            myValues.sentcodeshow = false
            myValues.sendverificationagain = false
            myValues.showsubmit = true
            regres = 'newpassword'
          }
          if (err.code === "newpasssaved") {
            dragvercont.showtoastnotification('success', 'your pasword change successfully', 20)
            regres = 'login'
            myValues.phoneshow= true,
            myValues.modalheader = 'Sign in'
            // myValues = ref(
            //   dragvercont.dragvercont()
            // )
            // Object.keys(firstsetting).forEach((key) => {
            //   console.log('key---------',key)
            //   // console.log('myValues[key]---------',myValues[key])
            //   console.log('firstsetting[key]---------',firstsetting[key])
            //   myValues.key = firstsetting[key]
            // })
            // console.log(myValues)
            myValues.modalheader= "Sign in"
            myValues.openlogin= true
            myValues.showPassword= false
            myValues.showrepeatpassword= false
            myValues.counting= false
            myValues.contriescodesshow= true
            myValues.showdragable= true
            myValues.emailshow= false
            myValues.phoneshow= true
            myValues.passwordshow= true
            myValues.repeatpasswordshow= false
            myValues.remlostshow= true
            myValues.sentcodeshow= false
            myValues.agreelostsignupshow= false
            myValues.sendverificationagain= false
            myValues.loginshow= false
            myValues.signupshow= true
            myValues.showsubmit= false
            // myValues.openlogin = false

          }
        }).then((res) => {
          console.log("last then ---------", res)
          // imgsrc.value = dragvercont.chooseimg()
          // handleFail
          // isPassing.value = false
          setTimeout(() => {
            imgsrc.value = dragvercont.chooseimg(imgsrc.value.num)
          }, 4000);
        })
    } catch (error) {
      console.error("error-----------", error);
      dragvercont.showtoastnotification('danger', "error in log in", 20)
    }
  }
  const isPassing = ref(false)
  const handleFail = () => {
    console.log("handleFail------------")
    imgsrc.value = dragvercont.chooseimg(imgsrc.value.num)
  }
  // const flag = require('/countries-gif-flags/'+selectedCountry.value.iso+'.gif')
  // console.log("flag------------",flag)
  // const closed = () => {
  //   console.log("closed-----------")
  // }
  // const successfunc = function() {
  //       console.log("drager successed")
  // }
  // const startCountdown= function () {
  //       console.log("startCountdown")
  //       myValues.counting.value = true;
  //     }
  // const onCountdownEnd= function () {
  //       console.log("startCountdown")
  //       myValues.counting.value = true;
  //     }
  // const selected = ref(countries.countryListAlpha2[2])
</script>
<style>
  .dv_handler_bg div:first-child {
    /* content: ">>";
    font-weight: bold; */
    padding: 12px 10px 10px 10px;
    background: #6ba1ff !important;
    /* animation: blinker 5s infinite;
    color: #fff; */
  }

  .dv_handler_bg .tosuccess {
    /* content: ">>";
    font-weight: bold; */
    /* padding: 10px 10px 10px 10px; */
    background: #fff !important;
    /* animation: blinker 5s infinite;
    color: #fff; */
  }

  .ulwrapper ul {
    z-index: 10;
  }

  /* .drag_verify .tosuccess{
    border-radius: 0px 5px 5px 5px !important;
  } */
  /* .dv_handler_bg:hover {
    background-color: #1A56DB;
  } */
  /* label.d-block, .text-muted{
    text-align: right;
  }
  @keyframes blinker {
    from {
      opacity: 1.0;
    }

    50% {
      opacity: 0.5;
    }

    to {
      opacity: 1.0;
    }
  } */
</style>