const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const themeButton = document.querySelector(".theme-toggle");
themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("glow-mode");
  themeButton.textContent = document.body.classList.contains("glow-mode") ? "☼" : "☾";
  themeButton.setAttribute("aria-label", document.body.classList.contains("glow-mode") ? "Turn glow mode off" : "Turn glow mode on");
});

// Each project card contains its description, live URL, category and collaborators.
const projectDialog = document.querySelector("#project-dialog");
const dialogTitle = projectDialog?.querySelector("#dialog-project-title");
const dialogDescription = projectDialog?.querySelector(".dialog-description");
const dialogCategory = projectDialog?.querySelector(".dialog-project-category");
const dialogCollaboratorsWrap = projectDialog?.querySelector(".dialog-collaborators-wrap");
const dialogCollaborators = projectDialog?.querySelector(".dialog-collaborators");
const dialogLink = projectDialog?.querySelector(".dialog-project-link");
const liveIframe = projectDialog?.querySelector(".project-live-iframe");
const previewStatus = projectDialog?.querySelector(".preview-status");

function openProjectDetails(card) {
  if (!projectDialog) return;
  dialogTitle.textContent = card.querySelector("h3")?.textContent?.trim() || "Project";
  dialogDescription.textContent = card.dataset.projectDescription || "";
  dialogCategory.textContent = card.dataset.projectCategory || "";
  const collaborators = (card.dataset.projectCollaborators || "").trim();
  if (collaborators) {
    dialogCollaborators.textContent = collaborators;
    dialogCollaboratorsWrap.hidden = false;
  } else {
    dialogCollaboratorsWrap.hidden = true;
    dialogCollaborators.textContent = "";
  }
  const url = (card.dataset.projectUrl || "").trim();
  if (url) {
    dialogLink.href = url;
    dialogLink.hidden = false;
    if (liveIframe) {
      liveIframe.src = url;
      liveIframe.title = `Live preview of ${dialogTitle.textContent}`;
    }
    if (previewStatus) previewStatus.textContent = "Loading website…";
  } else {
    dialogLink.hidden = true;
    dialogLink.removeAttribute("href");
    if (liveIframe) liveIframe.removeAttribute("src");
    if (previewStatus) previewStatus.textContent = "Preview unavailable";
  }
  projectDialog.showModal();
}
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", event => {
    if (!event.target.closest("a")) openProjectDetails(card);
  });
  card.addEventListener("keydown", event => {
    if (event.target === card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openProjectDetails(card);
    }
  });
});
projectDialog?.querySelector(".dialog-close")?.addEventListener("click", () => projectDialog.close());
projectDialog?.addEventListener("click", event => {
  if (event.target === projectDialog) projectDialog.close();
});

liveIframe?.addEventListener("load", () => {
  if (previewStatus) previewStatus.textContent = "Website loaded";
});
projectDialog?.addEventListener("close", () => {
  if (liveIframe) liveIframe.removeAttribute("src");
  if (previewStatus) previewStatus.textContent = "Loading website…";
});
