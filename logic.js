var getBtn = $("#get_btn")
var setBtn = $("#set_btn")
var userText = $("#user_text")
var userVal = $("#u_val")
var webText = "World"

getBtn.on('click', () => {
    userText.html(userVal.val())
})

setBtn.on('click', () => {
    userVal.val(webText)
})

