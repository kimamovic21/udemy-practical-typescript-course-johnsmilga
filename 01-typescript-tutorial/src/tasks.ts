// const btn = document.querySelector<HTMLButtonElement>('.selector')!;
// btn.disabled = true;

const btn = document?.querySelector('.btn')! as HTMLButtonElement;

btn.addEventListener('click', () => {
    console.log('test btn');
});