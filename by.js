const
    byId = id =>
        document.getElementById(id)
    ,
    byName = (name, parent=document) =>
        parent.getElementsByName(name)
    ,
    byTag = (tag, parent=document) =>
        parent.getElementsByTagName(tag)
    ,
    bySelector = (selector, parent=document) =>
        parent.querySelector(selector)
    ,
    byAll = (selector, parent=document) =>
        parent.querySelectorAll(selector)
;