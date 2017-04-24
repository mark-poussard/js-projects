var parenthesisCount = {
	
	isValid : function(str){
		let stack = [];
		let valid = true;
		
		for(let i=0, nStr=str.length; i<nStr; i++){
			switch(str[i]){
				case '(':
				case '[':
				case '{':
				stack.push(str[i]);
				break;
				
				case ')':
				case ']':
				case '}':
				let opening = stack.pop();
				valid = parenthesisCount.match(opening, str[i]);
				break;
			}
			if(!valid)
				return false;
		}
		
		return stack.length === 0;
	},
	
	validateParenCount : function(inputContainer, outputContainerId){
		let outputContainer = document.getElementById(outputContainerId);
		let strValue = inputContainer.value;
		let valid = parenthesisCount.isValid(strValue);
		if(valid){
			outputContainer.className = "valid";
			outputContainer.innerHTML = "Valid parenthesis count and match."
		}
		else{
			outputContainer.className = "invalid";
			outputContainer.innerHTML = "Invalid parenthesis count or match."
		}
	},
	
	match : function(opening, closing){
		switch(opening){
			case '(':
			return closing === ')';
			case '[':
			return closing === ']';
			case '{':
			return closing === '}';
		}
	}
	
};