list_of_test = []

$("body").prepend('\
	<div id="re-test" class="well"\
	style="position:fixed; right:50px; top:70px; max-width:400px; z-index:2000; background-color:#eee">\
		<div class="form-group">\
			<input id="test-a" type="text" class="form-control">\
		</div>\
		<div id="test-listed"></div>\
		<div class="btn-group">\
			<button id="test-check" class="btn">检查</button>\
			<button id="test-ans" class="btn">提示</button>\
			<button id="test-next" class="btn">下一个</button>\
		</div>\
		<hr />\
		<div class="form-group">\
			<input id="test-n" type="text" class="form-control" placeholder="单词提示">\
		</div>\
		<button id="test-add" class="btn">加入队列</button>\
	</div>\
')

$("#test-add").click(function() {
	if ($("h1.content").length) {
		if ($("#test-n").val() != "") {
			wo = $("h1.content").clone().children().remove().end().text().trim()
			an = $("#test-n").val()
			list_of_test.push([wo, an])
			$("#re-test").append('<small class="alert-fade">成功加入</small>')
			$(".alert-fade").fadeOut()
		} else {
			$("#re-test").append('<small class="alert-fade">提示为空</small>')
			$(".alert-fade").fadeOut()
		}
	} else {
		$("#re-test").append('<small class="alert-fade">找不到单词</small>')
		$(".alert-fade").fadeOut()
	}
	$("#test-a").attr("placeholder", list_of_test[0][1])
	$("#test-listed").children().remove()
	for (i = 1; i < list_of_test.length; i++) {
		$("#test-listed").append("<span>" + list_of_test[i][1] + "</span><br/>")
	}
	$("#test-n").val("")
})
$("#test-check").click(function() {
	if ($("#test-a").val() == list_of_test[0][0]) {
		$("#re-test").prepend('<p class="alert-fade">正确</p>')
		$(".alert-fade").fadeOut()
		list_of_test.shift()
		$("#test-a").attr("placeholder", list_of_test[0][1])
		$("#test-listed").children().remove()
		for (i = 1; i < list_of_test.length; i++) {
			$("#test-listed").append("<span>" + list_of_test[i][1] + "</span><br/>")
		}
		$("#test-a").val("")
	} else {
		$("#re-test").prepend('<p class="alert-fade">错误</p>')
		$(".alert-fade").fadeOut()
	}
})
$("#test-ans").click(function() {
	$("#re-test").prepend('<p class="alert-fade">' + list_of_test[0][0] + '</p>')
	$(".alert-fade").fadeOut()
})
$("#test-next").click(function() {
	list_of_test.shift()
	$("#test-a").attr("placeholder", list_of_test[0][1])
	$("#test-listed").children().remove()
	for (i = 1; i < list_of_test.length; i++) {
		$("#test-listed").append("<span>" + list_of_test[i][1] + "</span><br/>")
	}
	$("#test-a").val("")
})
