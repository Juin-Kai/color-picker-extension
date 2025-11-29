document.addEventListener("DOMContentLoaded", () => {
  const pickerBtn = document.getElementById("picker");
  const copyBtn = document.getElementById("copy");
  const resultDiv = document.getElementById("results");
  const successDiv = document.getElementById("success");
  const errorDiv = document.getElementById("errors");

  if (!window.EyeDropper) {
    showError(errorDiv, "EyeDropper API is not supported on this platform.");
    return;
  }

  const eyeDropper = new EyeDropper();

  pickerBtn.addEventListener("click", async () => {
    // Clear previous success messages
    successDiv.textContent = "";

    try {
      const result = await eyeDropper.open();
      const colorHexValue = result.sRGBHex;
      appendColors(resultDiv, colorHexValue);
    } catch (err) {
      // Ignore 'canceled' error if user hits ESC
      if (!err.toString().includes("canceled")) {
        showError(errorDiv, `Error picking color: ${err}`);
      }
    }
  });

  copyBtn.addEventListener("click", () => {
    let results = "";
    if (resultDiv.children.length > 0) {
      for (const child of resultDiv.children) {
        if (child.dataset.value) {
          results += `${child.dataset.value}\n`;
        }
      }
      copyToClipboard(successDiv, errorDiv, results);
    } else {
      showError(errorDiv, "No colors to copy!");
    }
  });

  function showError(container, msg) {
    container.textContent = msg;
    setTimeout(() => {
      container.textContent = "";
    }, 3000);
  }

  function showSuccess(container, msg) {
    container.textContent = msg;
    setTimeout(() => {
      container.textContent = "";
    }, 3000);
  }

  function appendColors(container, value) {
    const result = document.createElement("div");
    result.className = "color-entry";
    result.dataset.value = value;

    const leftGroup = document.createElement("div");
    leftGroup.className = "left-group";

    const text = document.createElement("span");
    text.textContent = value;
    text.style.fontFamily = "monospace";
    text.style.fontSize = "16px";

    const colorBlob = document.createElement("div");
    colorBlob.className = "circle";
    colorBlob.style.backgroundColor = value;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&times;";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      result.remove();
    };

    leftGroup.appendChild(text);
    leftGroup.appendChild(colorBlob);

    result.appendChild(leftGroup);
    result.appendChild(removeBtn);
    container.prepend(result);
  }

  async function copyToClipboard(successCon, errorCon, value) {
    try {
      await navigator.clipboard.writeText(value);
      showSuccess(successCon, "Colors copied to clipboard!");
    } catch (err) {
      showError(errorCon, `Error copying to clipboard: ${err}`);
    }
  }
});
