const faqButtons = document.querySelectorAll('.faq__item-button');
const faqCenter = document.querySelector('.faq__roster--center');
const faqSubscription = document.querySelector('.faq__roster--subscription');
const faqServices = document.querySelector('.faq__roster--services');
const faqRules = document.querySelector('.faq__roster--rules');

faqCenter.style.display = 'block';
faqSubscription.style.display = 'none';
faqServices.style.display = 'none';
faqRules.style.display = 'none';

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    faqButtons.forEach((active) => {
      active.classList.remove('faq__item-button--active');
    });

    button.classList.add('faq__item-button--active');

    if (button.classList.contains('faq__item-button--center')) {
      faqCenter.style.display = 'block';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'none';
      faqRules.style.display = 'none';
    } else if (button.classList.contains('faq__item-button--subscription')) {
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'block';
      faqServices.style.display = 'none';
      faqRules.style.display = 'none';
    } else if (button.classList.contains('faq__item-button--services')) {
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'block';
      faqRules.style.display = 'none';
    } else if (button.classList.contains('faq__item-button--rules')) {
      faqCenter.style.display = 'none';
      faqSubscription.style.display = 'none';
      faqServices.style.display = 'none';
      faqRules.style.display = 'block';
    }
  });
});

const faqDescriptions = document.querySelectorAll('.faq__roster-description');
const faqIconButtons = document.querySelectorAll('.faq__roster-button');

faqDescriptions.forEach((description) => {
  description.style.display = 'none';

  if (description.classList.contains('faq__roster-description--active')) {
    description.style.display = 'block';
  }
});

faqIconButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const useElement = button.querySelector('use');
    const description = button.closest('li').querySelector('.faq__roster-description');

    if (description.style.display === 'none') {
      description.style.display = 'block';
      useElement.setAttribute('href', '/__spritemap#sprite-minus');
    } else {
      description.style.display = 'none';
      useElement.setAttribute('href', '/__spritemap#sprite-plus');
    }
  });
});
