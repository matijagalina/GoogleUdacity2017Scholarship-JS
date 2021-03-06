/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name : "Matija Galina",
    friends : 100,
    messages : ["Hello", "How are you?", "I love you", "Bye"],
    postMessage : function(message) {
        return facebookProfile.messages.push(message);
    },
    deleteMessage : function(index) {
        return facebookProfile.messages.splice(index, 1);
    },
    addFriend : function() {
        return facebookProfile.friends += 1;
    },
    removeFriend : function() {
        return facebookProfile.friends -= 1;
    }
};
