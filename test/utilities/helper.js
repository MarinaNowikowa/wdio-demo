export const waitForTextChange = (text, timeout) => {
    browser.waitUntil(async function () {
        return (await this.getText()) === text
    }, {
        timeout
    });
};

