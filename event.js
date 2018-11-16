var addEvent = function(element, type, callback){
        if(element.addEventListener)
            element.addEventListener(type, callback);
        else
            element.attachEvent("on" + type, callback);
    },

    addEventByTypes = function(element, types, callback){
        for(var eventIndex=types.length; eventIndex--;)
            addEvent(element, types[eventIndex], callback);
    },

    addEventByElements = function(elements, type, callback){
        for(var eventIndex=elements.length;eventIndex--;)
            addEvent(elements[eventIndex], type, callback);
    },

    getTarget = function(e){
        return e.target || e.srcElement;
    },

    getKey = function (e) {
        return e.which || e.keyCode;
    },

    applyEvent = function (element, event) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, false, true);
            element.dispatchEvent(evt);
        } else
            element.fireEvent("on" + event);
    }
;