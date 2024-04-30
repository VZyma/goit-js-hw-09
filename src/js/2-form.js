const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;

const feedbackFormState = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

if (localStorage.getItem(feedbackFormState)) {
  const { email: emailFromLS, message: messageFromLS } = JSON.parse(
    localStorage.getItem(feedbackFormState)
  );

  email.value = emailFromLS;
  textarea.value = messageFromLS;

  formData.email = emailFromLS;
  formData.message = messageFromLS;
}

form.addEventListener('input', event => {
  if (event.target.nodeName === 'TEXTAREA') {
    formData.message = event.target.value;
  } else if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.value;
  }
  localStorage.setItem(feedbackFormState, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || textarea.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(feedbackFormState);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});