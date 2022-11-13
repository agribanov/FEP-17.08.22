function htmlToElement(html) {
    const container = document.createElement('div');

    container.innerHTML = html;

    return container.children[0];
}

function interpolate(template, obj) {
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }

    return template;
}

module.exports = {
    htmlToElement: htmlToElement,
    interpolate: interpolate,
};
