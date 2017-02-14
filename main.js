var keyCodes = {enter: 13}





var isShowing = true
var showHideBtn = document.querySelector("#showHide")
var navMenuNode = document.querySelector(".nav-menu")

//Show hide nav menu
showHideBtn.addEventListener('click', function(eventObj){

	if(isShowing){

		navMenuNode.style.opacity = 0
		showHideBtn.innerHTML = "Show"
		isShowing = false
	}

	else{

		navMenuNode.style.opacity = 1
		showHideBtn.innerHTML = "Hide"
		isShowing = true
	}
})

//add items to a list

var textField = document.querySelector(".textField")
var list = document.querySelector(".guest-list")
var userString = ""

textField.addEventListener('keydown', function(eventObj){

	if(keyCodes.enter === eventObj.keyCode){
		
		userString = eventObj.target.value
		var listEntry = document.createElement("li")
		listEntry.innerHTML = userString
		list.appendChild(listEntry)
		eventObj.target.value = ""

	}

})

var textField2 = document.querySelector("#input2")
var list2 = document.querySelector("#list2")
var userString2 = ""
var rmvButtonList = {}
var entryNumber = 0

textField2.addEventListener('keydown', function(eventObj){

	if(keyCodes.enter === eventObj.keyCode){
		
		entryNumber += 1

		userString2 = eventObj.target.value
		var listEntry = document.createElement("li")
		listEntry.innerHTML = userString2

		var rmvButton = document.createElement("button")
		rmvButton.setAttribute("id", "rmvButton" + entryNumber)
		rmvButton.innerHTML = "X"
		listEntry.appendChild(rmvButton)
		rmvButtonList["button" + entryNumber] = rmvButton

		list2.appendChild(listEntry)
		eventObj.target.value = ""

	}

})

window.addEventListener('click', function(eventObj){

	selected = eventObj.target
	
	if (selected.id.includes("rmvButton")){
		var parentOf = selected.parentNode
		list2.removeChild(parentOf)
	}
})

