function sendmessage() {
	let nameA = document.getElementById("name").value;
	let mailA = document.getElementById("mail").value;
	let telnumA = document.getElementById("tel").value;
	let subjectA = document.getElementById("naiyo").value;
	let consultationA = document.getElementById("bikou").value;
	alert("メールが送信されました（デモ）\n◆お名前："
		+ nameA +
		"\n◆メールアドレス："
		+ mailA +
		"\n◆電話番号："
		+ telnumA +
		"\n◆ご内容："
		+ subjectA +
		"\n◆相談内容："
		+ consultationA

	);
}
