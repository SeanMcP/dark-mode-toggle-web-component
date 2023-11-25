// Copyright 2023 Sean McPherson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the “Software”), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

export class DarkModeToggle extends HTMLElement {
  // version: 0.1.0
  _initialValue = false;
  _storageKey = "dmtwc.darkMode";

  constructor() {
    super();
    
    let value = localStorage.getItem(this._storageKey);

    if (value == null) {
      value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    this._initialValue = typeof value === "string" ? value === "true" : value;
    this.dataset.id = "dmtwc";
  }

  connectedCallback() {
    const checkbox = this.querySelector("input[type=checkbox]");

    if (!checkbox) {
      throw new Error("No input[type=checkbox] found");
    }

    this.syncWithDOM(this._initialValue);

    checkbox.addEventListener("change", (e) => {
      const isChecked = e.target.checked;
      this.syncWithDOM(isChecked);
      localStorage.setItem(this._storageKey, isChecked);
    });
  }

  syncWithDOM(isChecked) {
    const checkboxes = document.querySelectorAll(
      "[data-id=dmtwc] input[type=checkbox]"
    );

    if (isChecked) {
      document.documentElement.setAttribute("data-dark-mode", "true");
      checkboxes.forEach((el) => el.setAttribute("checked", true));
    } else {
      document.documentElement.removeAttribute("data-dark-mode");
      checkboxes.forEach((el) => el.removeAttribute("checked"));
    }
  }
}

export default ["dark-mode-toggle", DarkModeToggle];
