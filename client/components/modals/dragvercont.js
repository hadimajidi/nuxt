const imgsrc = ['/img/t1.png','/img/t2.png','/img/t3.jpg']
function dragvercont(){
    let values = {
        modalheader: "Sign in",
        openlogin: false,
        showPassword: false,
        showrepeatpassword: false,
        counting: false,
        contriescodesshow: true,
        showdragable: true,
        emailshow: false,
        phoneshow: true,
        passwordshow: true,
        repeatpasswordshow: false,
        remlostshow: true,
        sentcodeshow: false,
        agreelostsignupshow: false,
        sendverificationagain: false,
        loginshow: false,
        signupshow: true,
        showsubmit: false,
    }
    return values
}
function createaccountval(){
    let values = dragvercont()
        // myValues.contriescodesshow.value = true
        values.loginshow = true
        values.agreelostsignupshow = true
        // values.repeatpasswordshow.value = true
        values.passwordshow = false
        values.signupshow = false
        values.remlostshow = false
        values.modalheader = 'Sign up'
    return values
}
function gotologinval(){
    let values = dragvercont()
        // myValues.contriescodesshow.value = false
    values.loginshow = false
    values.agreelostsignupshow = false
    // myValues.repeatpasswordshow.value = false
    values.signupshow = true
    values.passwordshow = true
    values.remlostshow = true
    values.modalheader = 'Sign in'
    return values
}
function chooseimg(exp){
    let min = 0
    let max = 3
    let difference = max - min;

    // generate random number 
    let rand = Math.random();
    do{
        rand = Math.random();
        
        // multiply with difference 
        rand = Math.floor( rand * difference);

        // add with min value 
        rand = rand + min;
    }while(rand == exp)

    console.log("chooseimg------------",imgsrc[rand])
    return {num: rand, filename: imgsrc[rand]};
}
function login(){
    const { $toast } = useNuxtApp();
    $toast.show({type: 'success',message: "choose your password", timeout: 10})
}
function signup(){
    const { $toast } = useNuxtApp();
    $toast.show({type: 'success',message: "check your sms", timeout: 10})
}
function showtoastnotification(type= type||'success' ,message= message, timeout= timeout||10){
    const { $toast } = useNuxtApp();
    $toast.show({type: type,message: message, timeout: timeout})
}
export default{
    dragvercont,chooseimg,login,signup,createaccountval,gotologinval,showtoastnotification
}