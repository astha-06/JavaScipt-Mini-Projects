document.addEventListener('DOMContentLoaded',()=>{
	//card options

	const cardArray=[
		{
			name:'fries',
			img:'images/fries.png'
		},
		{
			name:'fries',
			img:'images/fries.png'
		},
		{
			name:'cheeseburger',
			img:'images/cheeseburger.png'
		},
		{
			name:'cheeseburger',
			img:'images/cheeseburger.png'
		},
		{
			name:'hotdog',
			img:'images/hotdog.png'
		},
		{
			name:'hotdog',
			img:'images/hotdog.png'
		},
		{
			name:'ice-cream',
			img:'images/ice-cream.png'
		},
		{
			name:'ice-cream',
			img:'images/ice-cream.png'
		},
		{
			name:'milkshake',
			img:'images/milkshake.png'
		},
		{
			name:'milkshake',
			img:'images/milkshake.png'
		},
		{
			name:'pizza',
			img:'images/pizza.png'
		},
		{
			name:'pizza',
			img:'images/pizza.png'
		}
	]

	//to bring the cards at random position everytime we refresh the game
	cardArray.sort(()=> 
		Math.random()-Math.random())

	const grid=document.querySelector('.grid')
	const resultDisplay=document.querySelector('#result')
	var cardsChosen=[]
	var cardsChosenId=[]
	var cardsWon=[]
	//create your board
	
	function createBoard(){
		for(let i=0;i<cardArray.length;i++)
		{
			var card=document.createElement('img')
			card.setAttribute('src','images/blank.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click',flipcard)
			grid.appendChild(card) //all the img tags with the src and ids will be appended to the "grid" div in html
		}

}

	//check for matches
	function checkForMatch()
	{
		let cards=document.querySelectorAll('img')
		let optionOneId=cardsChosenId[0]
		let optionTwoId=cardsChosenId[1]
		if (cardsChosen[0]===cardsChosen[1])
		{
			alert('YAYA,you have foud a match')
			cards[optionOneId].setAttribute('src','images/white.png')
			cards[optionTwoId].setAttribute('src','images/white.png')
			cardsWon.push(cardsChosen)
			console.log(cardsWon)
		}// if the two cards match swap them with white color cards
		else{
			cards[optionOneId].setAttribute('src','images/blank.png')
			cards[optionTwoId].setAttribute('src','images/blank.png')
			alert('Sorry,Try Again!')
		}

		//clearing the two arrays both in if or else case
		cardsChosen=[]
		cardsChosenId=[]
		resultDisplay.textContent=cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent='Congratulations! you found them all'
		}
	}


	//flip your card
	function flipcard()
	{
		var cardId=this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name) //pushing the card name thorugh the id 
		cardsChosenId.push(cardId) //pushing the id of the card in a different array
		this.setAttribute('src',cardArray[cardId].img)	// let us add a image to the particular square based on the card it holds
		if(cardsChosen.length===2){
			setTimeout(checkForMatch,500) //time is in ms
		} //we only have 2 cards at a time in the cardsChosen array
	}

	createBoard()

})