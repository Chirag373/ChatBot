import { Component } from '@angular/core';

interface ChatMessage {
  text: string;
  sender: string;
  time: Date;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class FaqComponent {
  faq: { [key: string]: string } = {
    'hey siri': 'bakwaas mat kar',
    'Hi': "How can i help you?",
    'hi': "How can i help you?",
    'What are your business hours?': 'Our business hours are 9am-5pm, Monday through Friday.',
    'hours': 'Our business hours are 9am-5pm, Monday through Friday.',
    'What is your return policy?': 'You can view our return policy on our website at example.com/return-policy.',
    'How do I contact customer service?': 'You can contact customer service by calling our toll-free numboer at 1-800-555-5555, or by emailing support@example.com.',
    'Thank you': 'let me know if you want anything else',
    'Thanks': 'let me know if you want anything else',
    'thank': 'let me know if you want anything else'
  };

  messages: ChatMessage[] = []; // Array to store chat messages
  question: string = '';

  sendQuestion(): void {
    const questionValue = this.question?.trim();
    if (questionValue) {
      this.messages.push({ text: questionValue, sender: 'You', time: new Date() }); // Add user message to messages array
      const answer = this.faq[questionValue];
      if (answer) {
        const botTypingMessage = "Bot is typing...";
        this.messages.push({ text: botTypingMessage, sender: 'Bot', time: new Date() }); // Add bot message to messages array
        setTimeout(() => {
          this.messages.pop(); // Remove the bot typing message
          const botMessage = { text: answer, sender: 'Bot', time: new Date() };
          this.messages.push(botMessage); // Add bot message to messages array
        }, 3000);
      } else {
        const errorMessage = "I'm sorry, I don't have an answer to that question. Please contact customer service for assistance.";
        const botMessage = { text: errorMessage, sender: 'Bot', time: new Date() };
        this.messages.push(botMessage); // Add bot error message to messages array
        
      }
      this.question = '';
    }
  }

}
