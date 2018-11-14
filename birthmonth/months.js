//months project: use an array of objects and attributes:
console.log("start here")
var month = [
	{
		monthName: "january",
		attributes: "People born in January are born to be leaders. You are independent and analytical as well as clever and creative which is the perfect combination. You stand out from the crowd and with an obvious charisma people are always happy to follow you. It is normal for you to follow a more traditional life than others.",
		picture: "http://clipart-library.com/new_gallery/january-clip-art-4.jpg"
	},
	{
		monthName: "february",
		attributes:"Relationships are extremely important to people born in February. They dream of finding their soulmate and spending their lives together. They are very empathetic and lovable people. And, they want to feel that their love that they so freely give to others is reciprocated. They have soft and caring hearts and would be great parents.",
		picture:"http://clipart-library.com/data_images/25709.png"
	},
	{
		monthName: "march",
		attributes:"When it comes to luck, people born in March are one of the luckiest ones. Universe has a way to present them such favorable circumstances that they can make a lot of money quickly, but they can spend it even quicker. Moreover, they are prone to vices and addictions. And when it comes to relationships, they are not very faithful and do not take them seriously. However, when they fall in love, they fall in deeply.",
		picture: "http://clipart-library.com/newimages/march-clipart-21.jpg"
	},
	{
		monthName: "april",
		attributes:"Just like people born in January, those born in April are also meant to become leaders. They are very charismatic and extremely ambitious. They are also smart, bossy, stubborn, and creative which makes them to always get what they want. Other people admire them and want to be around them.", 
		picture: "http://clipart-library.com/data_images/117091.png"
	},
	{
		monthName: "may",
		attributes: "People who are born in May are very creative and self-expressive. They are often talented writers, painters, actors, or musicians. They treat everyone with respect. They are also very respectful and obedient towards authorities, and they have traditional and sacred values when it comes to marriage.",
		picture: " https://www.colourbox.dk/preview/8620515-.jpg"
	},
	{
		monthName: "june",
		attributes:"People born in June are fantastic lovers. They are very romantic, caring, and passionate. However, they can get easily jealous and tend to focus on the past rather than living in the moment. They have a kind heart, but sometimes they can’t resist their urge to gossip.",
		picture:"http://clipart-library.com/data_images/117988.jpg" 
	},
	{
		monthName: "july",
		attributes:"People born in July are very sympathetic, caring, and lovable. They are also very candid and honest, which makes them great friends. They are very intelligent and very emotional which makes them likely to suffer from depression, often leading to cynical and sarcastic behavior. Others often see them as loners. But, when they make a friend – it is for life.", 
		picture:"http://mbhumanistsatheists.ca/wp-content/uploads/july-768x565.jpg" 
	},
	{
		monthName: "august",
		attributes: "People born in August care deeply about people close to them. They value love, relationships, and marriage above everything else. They are very optimistic and filled with an enthusiasm which inspires and makes everyone around them to feel good.",
		picture: "http://clipart-library.com/data_images/325281.png"
	},
	{
		monthName: "september",
		attributes: "People born in September want everything in their life to be organized. They despise chaos, and they value stability and comfort. They are very emotionally intelligent and spiritual people with strong intuition. However, they tend to get depressed if something doesn’t go according to their plan. They need to learn to not be so hard on themselves.",
		picture: "http://clipart-library.com/image_gallery/197737.jpg"
	},
	{
		monthName: "october",
		attributes:"These people are among the luckiest out there. They always get what they want. All they need to do is wish for something, and it will happen. They have a revengeful nature, and if they could silence their inner demons and their argumentative nature, they can become very successful and achieve everything they want.", 
		picture:"http://clipart-library.com/data_images/200163.png"
	},
	{
		monthName: "november",
		attributes:"People born in November are always positive and willing to work hard to achieve their dreams. They are determined in their pursuit for a secure and happy future. Money problems can sometimes bring them down, but their hard-working nature will always get them through it.",
		picture: "http://clipart-library.com/img/1182603.png"
	},
	{
		monthName: "december",
		attributes:"People born in December are the life of the party. They have very busy social calendars and are always among friends and family. Sometimes, they tend to ignore their responsibilities and focus only on entertainment. They are very lucky, and love and wealth always find its way to them.", 
		picture:"https://img1.sendscraps.com/se/december/december_001.jpg"
	}
]
 // write a function to call appropriate MonthName:
 function monthf() {
	console.log("working")
	
	var userInput = document.getElementById("your-month").value.toLowerCase()
	
	var months = document.getElementById("yourmonth")
	//var range = document.getElementById("birthdayRange")
	var attributes = document.getElementById("attributes")
	var img = document.getElementById("MonthImage")
 	for(i = 0; i < month.length; i++) {
		if(userInput == month[i].monthName) {
			months.innerHTML = month[i].monthName
 			//range.innerHTML = month[i].birthdayRange
			attributes.innerHTML = month[i].attributes
			img.src = month[i].picture
			return
		} else {
			months.innerHTML = "oops! That's not a month. Try again"
			//range.innerHTML = " "
			attributes.innerHTML = " "
			img.src = "https://www.iconsdb.com/icons/preview/red/warning-3-xxl.png"
		}
	}
} monthf()