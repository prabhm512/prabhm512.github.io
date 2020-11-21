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
    // $('.submit-info').popover();
    // Post information on clicking submit
    $(".submit-info").on("click", event => {
        event.preventDefault;
        // check if email address is valid and that it is not left null
        if (
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        $(".email")
          .val()
          .trim()
            ) === false) {
                $(".email").css("background-color", "#ffcccb");
        } else {
            // Changes background colour of all input boxes back to white.
            // A user may input an incorrect email first, making the box turn red. It should turn white after a successful entry.
            $(".email").css("background-color", "white");
            // $(".name").css("background-color", "white");
            // $(".message").css("background-color", "white");
    
            const info = {
                name: $(".name").val().trim(),
                email: $(".email").val().trim(),
                message: $(".message").val().trim()
            };
            // Post the data that has been entered by the user
            postContacts(info); 
        }
    });
});