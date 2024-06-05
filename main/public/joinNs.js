const joinNs = (elem, nsData) => {
  const nsEndpoint = elem.getAttribute("ns");
  const clickedNs = nsData.find((ns) => ns.endpoint === nsEndpoint);
  const rooms = clickedNs.rooms;

  // Clear the room list, add the retrieved rooms, and iterate through them to display each one.
  const roomList = document.querySelector(".room-list");
  roomList.innerHTML = "";

  rooms.forEach((room) => {
    roomList.innerHTML += `
          <div class="flex items-center justify-start">
            <i class="${
              room.privateRoom ? "fa-solid fa-lock" : "fa-solid fa-door-open"
            }"></i>
            <li class="font-mono border mt-2 p-1">${room.roomTitle}</li>
          </div>
        `;
  });
  localStorage.setItem("lastNs", nsEndpoint);
};
