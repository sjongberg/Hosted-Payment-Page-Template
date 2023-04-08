function toggleTestCases() {
  var testCasesContent = document.querySelector(".test-cases-content");
  testCasesContent.style.display = testCasesContent.style.display === "block" ? "none" : "block";
}

function toggleCategory(category) {
  var categoryContent = category.querySelector(".test-cases-category-content");
  categoryContent.style.display = categoryContent.style.display === "block" ? "none" : "block";
}

function copyValue(value) {
  var range = document.createRange();
  range.selectNode(value);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Copied value: " + value.textContent);
}
