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

    $('.devour').on('click', () => {
        const burgerID = $(this).data('id');
        const index = { id: burgerID };
        $.ajax('api/devour', {
            type: 'PUT',
            data: index
        }).then(() => {
            console.log(`Devoured the burger with id ${burgerID}!`);
        }).catch(error => console.log(error));
    });

});