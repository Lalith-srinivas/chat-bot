
let messages = document.getElementById('messages');
let userInput = document.getElementById('userInput');
let sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', function() {
  let message = userInput.value;
  if (message) {
    let messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('messagestyle');
    messages.appendChild(messageElement);
    userInput.value = '';
    messages.scrollTop = messages.scrollHeight;
    if(message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi") || message.toLowerCase().includes("hey")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Hi there! How can I assist you today?";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("how are you") || message.toLowerCase().includes("how's it going")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I'm just a bot, but I'm here to help!";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("what is your name") || message.toLowerCase().includes("who are you")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I'm ChatBot, your virtual assistant.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("thank you") || message.toLowerCase().includes("thanks")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "You're welcome! If you have any more questions, feel free to ask.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("bye") || message.toLowerCase().includes("goodbye") || message.toLowerCase().includes("see you") || message.toLowerCase().includes("bye bye")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Goodbye! Have a great day!";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("what can you do") || message.toLowerCase().includes("help") || message.toLowerCase().includes("assist") || message.toLowerCase().includes("support") || message.toLowerCase().includes("what you can do")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I can assist you with general questions and provide information. How can I help you today?";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("joke") || message.toLowerCase().includes("tell me a joke") || message.toLowerCase().includes("make me laugh")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "You Pay Lakhs of fees for college but you still study one day before the exam. Using youtube or chatgpt to complete your syllabus, 😂LOL";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("weather") || message.toLowerCase().includes("temperature") || message.toLowerCase().includes("climate")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I don't have real-time weather data, but you can check a weather website or app for the latest updates.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("time") || message.toLowerCase().includes("current time") || message.toLowerCase().includes("what's the time")){
      let botMessage = document.createElement('div');
      let currentTime = new Date().toLocaleTimeString();
      botMessage.textContent = "The current time is " + currentTime;
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("date") || message.toLowerCase().includes("current date") || message.toLowerCase().includes("what's the date")){
      let botMessage = document.createElement('div');
      let currentDate = new Date().toLocaleDateString();
      botMessage.textContent = "Today's date is " + currentDate;
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight;
    }
    else if(message.toLowerCase().includes("who made you") || message.toLowerCase().includes("creator") || message.toLowerCase().includes("developer")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I was created by a developer.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("love you") || message.toLowerCase().includes("i love you")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Aww, I appreciate the sentiment! I'm here to assist you.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("i am sad") || message.toLowerCase().includes("i am feeling low") || message.toLowerCase().includes("i am unhappy") || message.toLowerCase().includes("i am depressed") || message.toLowerCase().includes("i am not happy") ||message.toLowerCase().includes("sad")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I'm sorry to hear that. Remember, it's okay to feel sad sometimes. If you need someone to talk to, consider reaching out to a friend or a professional.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("suggest me a movie") || message.toLowerCase().includes("movie recommendation") || message.toLowerCase().includes("recommend a movie")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Sure! How about watching 'Inception'? It's a mind-bending thriller directed by Christopher Nolan.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("suggest me a skill") || message.toLowerCase().includes("skill recommendation") || message.toLowerCase().includes("recommend a skill") || message.toLowerCase().includes("which skill i should learn") || message.toLowerCase().includes("which skill is better to learn") || message.toLowerCase().includes("which skill to learn") || message.toLowerCase().includes("skills")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Sure! How about learning 'Python'? It's a versatile programming language that's great for beginners.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("suggest me a skill") || message.toLowerCase().includes("skill recommendation") || message.toLowerCase().includes("recommend a skill") || message.toLowerCase().includes("which skill i should learn") || message.toLowerCase().includes("which skill is better to learn")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Sure! How about learning 'Python'? It's a versatile programming language that's great for beginners.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("what is ai") || message.toLowerCase().includes("define ai") || message.toLowerCase().includes("what does ai mean")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "AI stands for Artificial Intelligence. It refers to the simulation of human intelligence in machines that are programmed to think and learn.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("give me roadmap to learn java script") || message.toLowerCase().includes("roadmap to learn java script") || message.toLowerCase().includes("how to learn java script")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "To learn JavaScript, start with the basics: variables, data types, functions, and control structures. Then, move on to DOM manipulation, event handling, and asynchronous programming. Practice by building small projects and gradually explore advanced topics like frameworks (React, Angular) and backend development (Node.js).";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("suggest me a anime") || message.toLowerCase().includes("anime recommendation") || message.toLowerCase().includes("recommend an anime") || message.toLowerCase().includes("which anime i should watch") || message.toLowerCase().includes("which anime is better to watch") || message.toLowerCase().includes("which anime to watch") || message.toLowerCase().includes("anime")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "Sure! How about watching 'Attack on Titan'? It's an action-packed anime with a gripping storyline.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("where i can watch anime") || message.toLowerCase().includes("anime website") || message.toLowerCase().includes("anime platform") || message.toLowerCase().includes("anime streaming site")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "You can watch anime on platforms like Crunchyroll, Funimation, Netflix, and Hulu.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("who is your favorite anime character") || message.toLowerCase().includes("favorite anime character") || message.toLowerCase().includes("best anime character")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "I don't have personal preferences, but many people love characters like Goku from Dragon Ball, Naruto from Naruto, and Luffy from One Piece.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else if(message.toLowerCase().includes("where i can learn coding for free") || message.toLowerCase().includes("free coding website") || message.toLowerCase().includes("free coding platform") || message.toLowerCase().includes("learn coding for free")){
      let botMessage = document.createElement('div');
      botMessage.textContent = "You can learn coding for free on websites like FreeCodeCamp, Codecademy, Khan Academy, and Coursera.";
      botMessage.classList.add('reply');
      messages.appendChild(botMessage);
    }
    else{
        let botMessage = document.createElement('div');
        botMessage.textContent = "I'm sorry, I didn't understand that!.";
        botMessage.classList.add('reply');
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }
    
  }
  else{
   alert("Please enter a message.");
  }
});