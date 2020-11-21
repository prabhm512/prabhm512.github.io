$(document).ready(() => {
    getContacts = ()  => {
        $.ajax({
            method: "GET",
            url: "/api/contact"
        });
    }
    getContacts();

    postContacts = (info) => {
        $.post("/api/contact", info).then(getContacts);
    };

    // Post information on clicking submit
    $(".submit-info").on("click", event => {
        event.preventDefault;
        const info = {
            name: $(".name").val().trim(),
            email: $(".email").val().trim(),
            message: $(".message").val().trim()
        };
        console.log(info);
        postContacts(info);
    });
});