// display logo

const logoInput = document.querySelector("#image-input");
const logoLabel = document.querySelector("#logo-label");

logoInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploadedImage = reader.result;
    document.querySelector(
      "#display-logo"
    ).style.backgroundImage = `url(${uploadedImage})`;
    document.querySelector(
      "#display-logo-invoice"
    ).style.backgroundImage = `url(${uploadedImage})`;
    logoLabel.style.background = "transparent";
    logoLabel.textContent = "";
  });
  reader.readAsDataURL(this.files[0]);
});

//update textcontent with input value

const updateText = (element, text, input) => {
  return (e) => {
    if (e.target.value == "") {
      element.textContent = text;
      input.classList.add("invalid");
    } else {
      element.textContent = e.target.value;
      input.classList.remove("invalid");
    }
  };
};

const addUpdatedText = (element, text, input) => {
  return (e) => {
    if (e.target.value == "") {
      element.textContent = text;
      input.classList.add("invalid");
    } else {
      element.textContent = text + e.target.value;
      input.classList.remove("invalid");
    }
  };
};

const phoneValidation = (element, text, input) => {
  return (e) => {
    var numbers = /^[0-9]+$/;
    var letter = e.target.value;
    let lastLetter = letter.charAt(letter.length - 1);
    if (lastLetter.match(numbers) || lastLetter == "+") {
      input.classList.remove("invalid");
      element.classList.add("show");
      element.textContent = text + e.target.value;
    } else if (e.target.value == "") {
      input.classList.remove("invalid");
      element.classList.remove("show");
    } else {
      input.classList.add("invalid");
    }
  };
};

function updateDate(element, input) {
  let dateValue = input.value;
  let date =
    dateValue[dateValue.length - 2] +
    dateValue[dateValue.length - 1] +
    "." +
    dateValue[dateValue.length - 5] +
    dateValue[dateValue.length - 4] +
    "." +
    dateValue[dateValue.length - 10] +
    dateValue[dateValue.length - 9] +
    dateValue[dateValue.length - 8] +
    dateValue[dateValue.length - 7];
  element.textContent = date;
}

const inputCompany = document.querySelector("#company");
const outputCompany = document.querySelector("#company-invoice");
const inputYourAdress = document.querySelector("#your-address");
const outputYourAdress = document.querySelector("#your-adress-invoice");
const inputYourVat = document.querySelector("#your-vat-no");
const outputYourVat = document.querySelector("#your-vat-invoice");
const inputYourPhone = document.querySelector("#your-phone");
const outputYourPhone = document.querySelector("#your-phone-invoice");
const inputYourInvoiceNumber = document.querySelector("#your-invoice-number");
const outputYourInvoiceNumber = document.querySelector(
  "#your-invoice-number-invoice"
);
const inputYourDate = document.querySelector("#your-invoice-date");
const outputYourDate = document.querySelector("#your-invoice-date-invoice");

inputCompany.addEventListener(
  "input",
  updateText(outputCompany, "Company name", inputCompany)
);
inputYourAdress.addEventListener(
  "input",
  updateText(outputYourAdress, "Adress", inputYourAdress)
);
inputYourVat.addEventListener(
  "input",
  addUpdatedText(outputYourVat, "VAT no.: ", inputYourVat)
);
inputYourPhone.addEventListener(
  "input",
  phoneValidation(outputYourPhone, "Tel.: ", inputYourPhone)
);
inputYourInvoiceNumber.addEventListener(
  "input",
  updateText(outputYourInvoiceNumber, "Invoice no. ", inputYourInvoiceNumber)
);
inputYourDate.addEventListener("change", function () {
  updateDate(outputYourDate, this);
});
