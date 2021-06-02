const button=document.querySelector("button");
		const h3Ele=document.querySelector("h3");
		const sec=document.querySelector("section");

		//event listener
		button.addEventListener("click",changeCol);
		function changeCol(){
			let color="#";
			const random=Math.random().toString(16).slice(2,8); //toString is used to convert the random integer into hexadecimal 
																//number and then slice is used to get a set of 6 digits only
			color+=random;   //adding # to the front of 6digits to make meaningful color
			sec.style.backgroundColor=color;  
			h3Ele.innerText=color;
		}
		