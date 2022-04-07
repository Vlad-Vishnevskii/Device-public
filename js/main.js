'use strict';
(function () {

  // accordion

  var footerTop = document.querySelector('.footer__top');
  var accordionsNoJS = footerTop.querySelectorAll('.accordion_no-js');
  var accordionContentNoJS = footerTop.querySelectorAll('.accordion__content_no-js');
  var accordions = document.querySelectorAll('.accordion');

  function deleteNoJS() {
    for (var i = 0; i < accordionsNoJS.length; i++) {
      accordionsNoJS[i].classList.remove('accordion_no-js');
    }
    for (var j = 0; j < accordionContentNoJS.length; j++) {
      accordionContentNoJS[j].classList.remove('accordion__content_no-js');
    }
  }

  deleteNoJS();

  accordions.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('accordion_active')) {
        item.classList.remove('accordion_active');
      } else {
        var activeAccordion = document.querySelector('.accordion_active');
        if (activeAccordion && activeAccordion !== item) {
          activeAccordion.classList.remove('accordion_active');
        }
        item.classList.add('accordion_active');
      }
    });
  });

  // scroll

  var advantages = document.querySelector('.advantages');
  var buttonToAdvantages = document.querySelector('.header__link-bottom');
  var buttonToForm = document.querySelector('.button_scroll-js');
  var form = document .querySelector('.questions');

  buttonToAdvantages.classList.remove('header__link-bottom-no-js');
  buttonToForm.classList.remove('button_no-js');

  function buttonToAdvantagesClick(evt) {
    evt.preventDefault();
    advantages.scrollIntoView({block: 'center', behavior: 'smooth'});
  }

  function buttonToFormClick(evt) {
    evt.preventDefault();
    form.scrollIntoView({block: 'center', behavior: 'smooth'});
  }


  buttonToAdvantages.addEventListener('click', buttonToAdvantagesClick);
  buttonToForm.addEventListener('click', buttonToFormClick);

  // focus

  var inputPhone = document.querySelector('.feedback__field_phone input');
  var inputPhonePopup = document.querySelector('.popup__field_phone input');
  var openingBrackets = '+7(';
  var closingBrackets = ')';
  var separator = '-';
  var oldLength = 0;
  var oldLengthPopup = 0;

  inputPhone.onfocus = function () {
    if (oldLength <= 3) {
      inputPhone.value = openingBrackets;
      oldLength += inputPhone.value.length - 1;
    }
  };

  inputPhonePopup.onfocus = function () {
    if (oldLengthPopup <= 3) {
      inputPhonePopup.value = openingBrackets;
      oldLengthPopup += inputPhonePopup.value.length - 1;
    }
  };

  inputPhone.oninput = function () {
    var currentLength = inputPhone.value.length;

    if (currentLength <= 3) {
      inputPhone.value = openingBrackets;
    }

    if (currentLength < oldLength || currentLength === oldLength) {
      oldLength--;
      return;
    }

    if (currentLength === 6) {
      inputPhone.value += closingBrackets;
      oldLength = inputPhone.value.length - 1;
    }

    if (currentLength === 10 || currentLength === 13) {
      inputPhone.value += separator;
    }

    oldLength++;
  };

  inputPhonePopup.oninput = function () {
    var currentLength = inputPhonePopup.value.length;

    if (currentLength <= 3) {
      inputPhonePopup.value = openingBrackets;
    }

    if (currentLength < oldLengthPopup || currentLength === oldLengthPopup) {
      oldLengthPopup--;
      return;
    }

    if (currentLength === 6) {
      inputPhonePopup.value += closingBrackets;
      oldLengthPopup = inputPhonePopup.value.length - 1;
    }

    if (currentLength === 10 || currentLength === 13) {
      inputPhonePopup.value += separator;
    }

    oldLengthPopup++;
  };

  // popup

  var buttonPopup = document.querySelector('.button-popup-js');
  var popup = document.querySelector('.popup');
  var escape = 27;
  var closeButton = popup.querySelector('.popup__close');
  var body = document.querySelector('body');

  function openPopup() {
    popup.classList.add('popup_open');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEscapePress);
    closeButton.addEventListener('click', onCloseButtonClick);
    popup.addEventListener('click', onOverlayClick);
  }

  function closePopup() {
    popup.classList.remove('popup_open');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscapePress);
    closeButton.removeEventListener('click', onCloseButtonClick);
    popup.removeEventListener('click', onOverlayClick);
  }

  function onButtonPopupClick(evt) {
    evt.preventDefault();
    openPopup();
  }

  function onEscapePress(evt) {
    if (evt.keyCode === escape) {
      closePopup();
    }
  }

  function onCloseButtonClick() {
    closePopup();
  }

  function onOverlayClick(evt) {
    var target = evt.target;
    if (target.classList.contains('popup')) {
      closePopup();
    }
  }

  buttonPopup.addEventListener('click', onButtonPopupClick);


  // localStorage

  var inputName = document.querySelector('.feedback__field_name input');
  var textareaQuestion = document.querySelector('.feedback__field textarea');
  var inputNamePopup = document.querySelector('.popup__field_name input');
  var textareaQuestionPopup = document.querySelector('.popup__field textarea');

  window.addEventListener('DOMContentLoaded', function () {

    if (inputName) {
      inputName.addEventListener('change', function () {
        localStorage.setItem(inputName.value, 'inputName');
      });
    }

    if (inputPhone) {
      inputPhone.addEventListener('change', function () {
        localStorage.setItem(inputPhone.value, 'inputPhone');
      });
    }

    if (textareaQuestion) {
      textareaQuestion.addEventListener('change', function () {
        localStorage.setItem(textareaQuestion.value, 'inputQuestion');
      });
    }

    if (inputNamePopup) {
      inputNamePopup.addEventListener('change', function () {
        localStorage.setItem(inputNamePopup.value, 'inputNamePopup');
      });
    }

    if (inputPhonePopup) {
      inputPhonePopup.addEventListener('change', function () {
        localStorage.setItem(inputPhonePopup.value, 'inputPhonePopup');
      });
    }

    if (textareaQuestionPopup) {
      textareaQuestionPopup.addEventListener('change', function () {
        localStorage.setItem(textareaQuestionPopup.value, 'inputQuestionPopup');
      });
    }
  });

})();
