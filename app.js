const chatLink = document.getElementById("chat-link");
const copyBtn = document.getElementById("copy-btn");
const inbox = document.getElementById("inbox");
const messages = document.getElementById("messages");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

// Generate a unique chat link for the user
const chatLinkValue = `https://your-backend-server.com/chat/${generateUniqueId()}`;
chatLink.textContent = chatLinkValue;

// Copy the chat link to the clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(chatLinkValue);
});

// Set up the message form submission
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = messageInput.value;
  if (!messageText) return;

  // Send the message to the backend server
  sendMessage(messageText);

  // Add the message to the inbox
  const li = document.createElement("li");
  li.textContent = messageText;
  messages.appendChild(li);

  // Clear the message input
  messageInput.value = "";
});

// Example functions for generating a unique ID and sending a message
function generateUniqueId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function sendMessage(messageText) {
  // Implement the logic to send the message to the backend server
  console.log("Sending message:", messageText);
}
