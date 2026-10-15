import * as edq from '../vendor/edq/js/edq.min.mjs';

function main() {
    edq.util.brightness.initBrightmode();
}

document.addEventListener("DOMContentLoaded", main);
