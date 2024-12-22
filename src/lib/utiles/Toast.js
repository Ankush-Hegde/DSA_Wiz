export function displayToast(message, type = "error", duration = 3000) {
    const toastMessage = document.createElement("div");
    toastMessage.innerText = message;
    if (type === "error") toastMessage.classList.add("toast-message-error");
    else toastMessage.classList.add("toast-message-success");
    document.body.appendChild(toastMessage);
  
    setTimeout(() => {
      document.body.removeChild(toastMessage);
    }, duration);
  }