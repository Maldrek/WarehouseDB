$(document).ready(function() {

    //ticketContainer will hold all the tickets
    var ticketContainer = {};
    
    //On click listener for user created tickets
    $(document).on("click", "#submitForm", handlePostCreate()  )


    //function to post information submitted in ticket creation form
    function handlePostCreate() {
        $.ajax({
            type: "POST",
            url: "api/ticket",
            data: {
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                company: $("#company").val(),
                title: $("#title").val(),
                item: $("#itemName").val(),
                building: $("#building").val(),
                room_number: $("#roomNum").val(),
                email: $("#email").val(),
                descript: $("#description").val(),
                deliver_option: $("#deliver_option").val(),
                due_date: $("#dueDate").val(),
                initials: $("#initial").val()
            },
            success: function(data){
                console.log(data);
            },
            dataType: 'json'
        })
    }

    //function to send ticket to active, completed, or closed page
    function determineTicketStage() {
        
    }
});