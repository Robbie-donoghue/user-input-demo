const messageForm = document.getElementById('messageForm')

//prevent default
function handleSubmitMessageForm(event)
{
  event.preventDefault();
  const formData = new FormData(messageForm)
  const message = formData.get("message")
  //fetch
  fetch("http://localhost:6060/messages" , 
  {
    method: "POST", //where we set up http post verb
    headers:
    {
      //sending stringified JSON data
      "Content-Type": "Application/json",

    },
    body:JSON.stringify({message}),
  })
}
messageForm.addEventListener("submit" , handleSubmitMessageForm)