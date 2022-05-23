sidebarBtn.addEventListener("click", () => {
  let existingSidebar = document.getElementById("sidebar");
  if (existingSidebar) {
    removeSidebar(existingSidebar);
  } else {
    let sidebar = document.createElement("section");
    sidebar.id = "sidebar";
    sidebar.className = "slide-in";
    sidebar.innerHTML = "Sample Sidebar";
    body.append(sidebar);
    sidebar.addEventListener("click", () => removeSidebar(sidebar));
  }
});
function removeSidebar(sidebar) {
  sidebar.className = "slide-out";
  setTimeout(() => sidebar.remove(), 775);
}
