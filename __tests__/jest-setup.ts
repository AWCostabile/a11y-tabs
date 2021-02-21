/*
 * React depends on requestAnimationFrame (even in test environments).
 * Here we use the raf package to shim requestAnimationFrame:
 * It has to be imported before the requestAnimationFrame is called to prevent warnings
 */
import 'raf/polyfill';
