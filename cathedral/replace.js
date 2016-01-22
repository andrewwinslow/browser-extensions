

var elements = document.getElementsByTagName('*');

var pairs = [
	["An algorithmic", "A divine"],
	["an algorithmic", "a divine"],
	["Algorithmic", "Divine"],
	["algorithmic", "divine"],
	["An algorithm", "A god"],
	["an algorithm", "a god"],
	["Algorithm", "God"],
	["algorithm", "god"],
	["Computational", "Theological"],
	["computational", "theological"],
	["Computers", "Mysterious ways"],
	["computers", "mysterious ways"],
	["Computer", "Divine intervention"],
	["computer", "divine intervention"],
	["Compute", "Work"],
	["compute", "work"],
	["Computing", "Working"],
	["computing", "working"],
	["Alan Turing", "Jesus"],
];

function replace() {
	
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var replacedText = node.nodeValue;
				for (var p = 0; p < pairs.length; p++)	
					replacedText = replacedText.replace(pairs[p][0], pairs[p][1]);
				element.replaceChild(document.createTextNode(replacedText), node);
			}
		}
	}
}

replace();

