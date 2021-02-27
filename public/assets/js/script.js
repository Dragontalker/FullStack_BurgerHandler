$(document).ready(() => {
    $('#submit').on('click', () => {
        const input = $('#burger_name').val().trim();
        const newBurger = { burger_name: input };
        $.ajax('/api/cook', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log(`Cooked a new ${input} burger!`);
            location.reload();
        }).catch(error => console.log(error));
    });
});
