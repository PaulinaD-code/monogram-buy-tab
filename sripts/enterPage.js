import { renderNavbar } from "./navbar.js";
import { renderHeader } from "./header.js";
import { renderConsoleTypes } from "../sripts/consoleOffer.js";
import { createConsole } from "./createConsole.js";
import { renderConsoleParts } from "./consolePartsrender.js";
import { renderFooter } from "./footer.js";

function renderPage(){
  renderNavbar();
  renderHeader();
  renderConsoleTypes();
  createConsole();
  renderConsoleParts();
  renderFooter();
}

renderPage();

