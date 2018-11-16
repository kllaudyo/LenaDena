var
    hasClassName = function(element, className){
        return element.className.split(" ").indexOf(className) !== -1;
    },

    addClassName = function(element, className){
        if(!hasClassName(element, className))
            element.className += " " + className;
    },

    removeClassName = function(element, className){
        if(hasClassName(element,className))
            element.className = element.className.replace((new RegExp("\\b" + className + "\\b", "g")),"");
    },

    addStyles = function(element, styles){
        for(var keys = Object.keys(styles), indexStyle = keys.length; indexStyle--;)
            if(element.style.hasOwnProperty(keys[indexStyle]))
                element.style[keys[indexStyle]] = styles[keys[indexStyle]];
    }
;