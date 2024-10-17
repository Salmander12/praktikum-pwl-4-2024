let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title === "") {
      alert("Inputan masih kosong");
      return;
   }

   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex items-center justify-between space-x-4`;  // Task container styling
   task.innerHTML = `
         <p class="flex-grow text-gray-800">${title}</p>  <!-- Task text -->
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="px-3 py-1 bg-green-200 text-green-900 font-semibold rounded-lg hover:bg-green-300 cursor-pointer">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="px-3 py-1 bg-red-200 text-red-900 font-semibold rounded-lg hover:bg-red-300 cursor-pointer">
   `;
   output.appendChild(task);
   input.value = "";  // Clear the input field
   e.preventDefault();
}
