
const emailregularexpression  = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordregularexpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
const usernameregularexpression = /^[a-zA-Z0-9]+$/;
const titleregularexpression = /^[a-zA-Z0-9 ]*$/;
const nameregularexpression = /^[a-zA-Z ]+$/;

const formTypes = [
    'Invitational',
    'National',
    'Season',
    'State'
]

module.exports = {

    // Checks if 'data' (String) is in the form type list. 
    checkFormType: function(data){
        if(formTypes.indexOf(data) > -1 ){
            return {
                error : false,
            } 
        }else {
            return {
                error : true,
                message: "Please select the form type. Season, State, National or Invitational."
            }
        }

    },

    // Checks if 'data' conforms to the email RegEx
    checkEmail: function(data){
        if(emailregularexpression.test(data)){
            return {
                error : false,
            } 
        }else {
            return {
                error : true,
                message: "That's an invalid e-mail. Please use a fully qualified e-mail address!"
            }
        }
    },

    // Checks if 'data' conforms to the username RegEx
    checkUsername: function(data){
        if(usernameregularexpression.test(data)){
            return {
                error : false,
            } 
        }else {
            return {
                error : true,
                message: "That's an invalid username. Please use numbers and letters only!",
            }
        }
    },

    // Checks if 'data' conforms to the name RegEx
    checkName: function(data){
        if(nameregularexpression.test(data)){
            return {
                error : false,
            } 
        }else {
            return {
                error : true,
                message: "That's an invalid name. Please use letters only!",
            }
        }
    },

    // Checks if 'data' conforms to the password RegEx
    checkPassword: function(data){
        if(passwordregularexpression.test(data)){
            return {
                error : false,
            } 
        }else {
            return {
                error : true,
                message: "Your password must have at least one number, one lowercase letter, and one uppercase letter. It must be at least 6 character long. No special characters."
            }
        }
    },

    // Checks if 'data' conforms to the title RegEx
    checkTitle: function(data){
        if(titleregularexpression.test(data)){
            return {
                error : false,
            } 
        }else {
            return {
                error : true,
                message: "Title can only contain numbers and letters."
            }
        }
    },

    // Checks if 'data' is a number and between 2 and 16
    checkRounds: function(data){
        if(isNaN(data)){
            return {
                error : true,
                message: "Rounds is not a number."
            }
        }
        else if (data < 2 || data > 16){
            return {
                error : true,
                message: "The number of rounds should be between 2 and 16."
            }
        }
        else{
            return {
                error : false,
            }
        }

    },

    // Checks if end is after start. Checks if start date is not in the past.
    checkStartEndDate: function(start, end){

        // Checks if data is a date. Return True or False
        var isDate = function(date) {
            return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
        }
        if(!isDate(start) || !isDate(end)){
            return {
                error : true,
                message: "Invalid Date."
            }
        }
        else if(start < new Date()){
            return {
                error : true,
                message: "Start date can not be in the past."
            }
        }
        else if(end < start){   
            return {
                error : true,
                message: "Start date can not be before end date."
            }
        }
        else{
            return {
                error : false,
            }
        }
    }

};