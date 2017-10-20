list_of_test = []

$("body").prepend('\
	<div id="re-test" class="well"\
	style="position:fixed; right:15px; top:70px; width:220px; z-index:2000; background-color:#eee">\
		<div id="test-listed"></div>\
		<div class="form-group" style="position:relative">\
			<input id="test-a" type="text" autocomplete="off" autocorrect="off" spellcheck="false" autocapitalize="off" class="form-control">\
			<span id="test-tell-c" style="position:absolute; top:5px; right:7px; color:#209e85; display:none">&#x2714;</span>\
			<span id="test-tell-r" style="position:absolute; top:5px; right:7px; color:#d2672e; display:none">&#x2718;</span>\
		</div>\
		<div class="btn-group">\
			<button id="test-check" class="btn">检查</button>\
			<button id="test-hint" class="btn">提示</button>\
			<button id="test-next" class="btn">下一个</button>\
		</div>\
		<hr />\
		<div class="form-group">\
			<input id="test-h" type="text" autocomplete="off" autocorrect="off" spellcheck="false" autocapitalize="off" class="form-control" placeholder="补充提示">\
		</div>\
		<button id="test-add" class="btn">加入队列</button>\
		<small id="test-tell-o" style="display:none">成功加入</small>\
		<small id="test-tell-p" style="display:none">找不到单词</small>\
	</div>\
')

function updateWordList() {
	$("#test-listed").children().remove()
	$("#test-listed").prepend('<p style="overflow:hidden">' + list_of_test[0][1] + "</p>")
	for (i = 1; i < list_of_test.length; i++) {
		$("#test-listed").prepend('<p style="overflow:hidden; color:#999">' + list_of_test[i][1] + "</p>")
	}
}
function tellAnswer(what) {
	if (what == "correct") {
		$("#test-tell-c").show()
		$("#test-tell-c").fadeOut()
	} else {
		$("#test-tell-r").show()
		$("#test-tell-r").fadeOut()
	}
}
function tellAdd(what) {
	if (what == "ok") {
		$("#test-tell-o").show()
		$("#test-tell-o").fadeOut()
	} else {
		$("#test-tell-p").show()
		$("#test-tell-p").fadeOut()
	}
}

$("#test-add").click(function() {
	if ($("h1.content").length) {
		wo = $("h1.content").clone().children().remove().end().text().trim()
		an = $("#review-definitions span.text").text().trim().replace("\n", " | ")
		hi = $("#test-h").val()
		list_of_test.push([wo, an, hi, 1])
		tellAdd("ok")
		updateWordList()
	} else {
		tellAdd("problem")
	}
	$("#test-h").val("")
})
$("#test-check").click(function() {
	if ($("#test-a").val() == list_of_test[0][0]) {
		$("#test-a").val("")
		tellAnswer("correct")
		list_of_test.shift()
		updateWordList()
	} else {
		tellAnswer("wrong")
	}
})
$("#test-a").keyup(function(e){
    if (e.which == 13){
        $("#test-check").click();
    }
})
$("#test-hint").click(function() {
	if (list_of_test[0][2] == "") {
		$("#test-a").val(list_of_test[0][0].substring(0, list_of_test[0][3]))
		list_of_test[0][3]++
	} else {
		$("#test-listed").append('<p style="overflow:hidden; color:#209e85">' + list_of_test[0][2] + "</p>")
		list_of_test[0][2] = ""
	}
})
$("#test-next").click(function() {
	list_of_test.shift()
	updateWordList()
	$("#test-a").val("")
})
