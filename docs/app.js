// elements
const elements = document.querySelectorAll('.btn')
// event
elements.forEach(element => {
    element.addEventListener('click', () =>
    {
        let commnad = element.dataset['element']

        document.execCommand(command, false, null);
    })
})