/**
 * @license BSD
 * @copyright 2024 me@wangnan.net
 *
 * Project Home:
 *   https://github.com/theFool-wn/jsMind/
 */

class jsMindApi {
    constructor(url) {
        this.url = url || 'https://v1.api.jsmind.online';
    }

    async loadSample(lang) {
        const response = await fetch(`assets/data_intro_${lang}.json`);
        return await response.json();
    }
}
