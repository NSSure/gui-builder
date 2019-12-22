import StandardElement from '../models/StandardElement';

const standardAttribute = {
    "id": 1,
    "class": 2,
    "style": 3,
    "title": 4,
    "dir": 5,
    "lang": 6,
    "xmllang": 7,
    "accesskey": 8,
    "tabindex": 9
};

const standardAttributeMap = {
    1: 'id',
    2: 'class',
    3: 'style',
    4: 'title',
    5: 'dir',
    6: 'lang',
    7: 'xml:lang',
    8: 'accesskey',
    9: 'tabindex'
}

const eventAttributes = {
    "onabort": 0,
    "onautocomplete": 1,
    "onautocompleteerror": 2,
    "onblur": 3,
    "oncancel": 4,
    "oncanplay": 5,
    "oncanplaythrough": 6,
    "onchange": 7,
    "onclick": 8,
    "onclose": 9,
    "oncontextmenu": 10,
    "oncuechange": 11,
    "ondblclick": 11,
    "ondrag": 12,
    "ondragend": 13,
    "ondragenter": 14,
    "ondragexit": 15,
    "ondragleave": 16,
    "ondragover": 17,
    "ondragstart": 18,
    "ondrop": 19,
    "ondurationchange": 20,
    "onemptied": 21,
    "onended": 22,
    "onerror": 23,
    "onfocus": 24,
    "oninput": 25,
    "oninvalid": 26,
    "onkeydown": 27,
    "onkeypress": 28,
    "onkeyup": 29,
    "onload": 30,
    "onloadeddata": 31,
    "onloadedmetadata": 32,
    "onloadstart": 33,
    "onmousedown": 34,
    "onmousenter": 35,
    "onmouseleave": 36,
    "onmousemove": 37,
    "onmouseout": 38,
    "onmouseover": 39,
    "onmouseup": 40,
    "onmousewheel": 41,
    "onpause": 42,
    "onplay": 43,
    "onplaying": 44,
    "onprogress": 45,
    "onratechange": 46,
    "onreset": 47,
    "onresize": 48,
    "onscroll": 49,
    "onseeked": 50,
    "onseeking": 51,
    "onselect": 52,
    "onshow": 53,
    "onsort": 54,
    "onstalled": 55,
    "onsubmit": 56,
    "onsuspend": 57,
    "ontimeupdate": 58,
    "ontoggle": 59,
    "onvolumechange": 60,
    "onwaiting": 61
};

const standardElements: Array<StandardElement> = [
    new StandardElement('param', [
        standardAttribute.id
    ]),
    new StandardElement('head', [
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('html', [
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('meta', [
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('title', [
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('style', [
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('applet', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title
    ]),
    new StandardElement('br', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title
    ]),
    new StandardElement('frame', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title
    ]),
    new StandardElement('frameset', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title
    ]),
    new StandardElement('iframe', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title
    ]),
    new StandardElement('basefront', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('center', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('dir', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('font', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('menu', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('s', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('strike', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('u', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang
    ]),
    new StandardElement('abbr', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('acronym', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('address', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('b', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('big', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('blockquote', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('body', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('caption', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('cite', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('code', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('col', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('colgroup', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('dd', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('del', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('dfn', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('div', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('dl', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('dt', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('em', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('fieldset', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('form', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('hn', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('h1', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('h2', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('h3', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('h4', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('h5', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('h6', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('i', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('img', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('ins', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('kbd', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('li', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('link', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('map', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('noframes', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('noscript', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('ol', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('optgroup', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('option', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('p', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('pre', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('q', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('samp', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('small', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('span', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('strong', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('sub', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('sup', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('table', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('tbody', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('td', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('tfoot', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('th', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('thead', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('tr', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('tt', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('ul', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('var', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang
    ]),
    new StandardElement('label', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey
    ]),
    new StandardElement('legend', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey
    ]),
    new StandardElement('object', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.tabindex
    ]),
    new StandardElement('select', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.tabindex
    ]),
    new StandardElement('a', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey,
        standardAttribute.tabindex
    ]),
    new StandardElement('area', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey,
        standardAttribute.tabindex
    ]),
    new StandardElement('button', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey,
        standardAttribute.tabindex
    ]),
    new StandardElement('input', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey,
        standardAttribute.tabindex
    ]),
    new StandardElement('textarea', [
        standardAttribute.id,
        standardAttribute.class,
        standardAttribute.style,
        standardAttribute.title,
        standardAttribute.dir,
        standardAttribute.lang,
        standardAttribute.xmllang,
        standardAttribute.accesskey,
        standardAttribute.tabindex
    ])
]

export default class HtmlDefinitions {
    standardAttribute = standardAttribute;
    standardAttributeMap = standardAttributeMap;
    eventAttributes = eventAttributes;
    standardElements = standardElements;
}