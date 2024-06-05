const socket = io("http://localhost:3000");

socket.on("welcome", (data) => {
  console.log(data.data);
});

socket.emit("messageFromClient", { data: "I am your client" });

// Listen for the Namespace List event from the server which gives up the list of namespaces
socket.on("nsList", (nsData) => {
  const lastNs = localStorage.getItem("lastNs");
  const namespaces = document.querySelector(".namespaces");
  namespaces.innerHTML = "";
  nsData.forEach((namespace) => {
    // Append the namespace to the list
    namespaces.innerHTML += `<div class="namespace" ns=${namespace.endpoint}><img src="${namespace.image}" /></div>`;
  });

  Array.from(document.getElementsByClassName("namespace")).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      joinNs(elem, nsData);
    });
  });

  Array.from(document.getElementsByClassName("namespace")).forEach((elem) => {
    if (elem.getAttribute("ns") === lastNs) {
      elem.click();
    }
  });
});
