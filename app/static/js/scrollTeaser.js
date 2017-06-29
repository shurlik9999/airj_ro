/**
 * Created by User on 031 31.01.17.
 */
var pulseSpeed = 500;
var hasScrolled = false;
function runPulseScrollTeaser() {
    if (jQuery('#scrollTeaser:not(:visible)').length > 0 && hasScrolled == false) {
        jQuery('#scrollTeaser').fadeIn(7000);
    }
    jQuery('#scrollTeaser-down1').fadeIn(pulseSpeed).delay(0).fadeOut(pulseSpeed);
    jQuery('#scrollTeaser-down2').delay(300).fadeIn(pulseSpeed).delay(0).fadeOut(pulseSpeed);
    jQuery('#scrollTeaser-down3').delay(500).fadeIn(pulseSpeed).delay(0).fadeOut(pulseSpeed, runPulseScrollTeaser);
}

jQuery(document).scroll(function () {
    var scrollTop = jQuery(document).scrollTop();
    if (scrollTop > 187) {
        jQuery('#scrollTeaser').stop();
        jQuery('#scrollTeaser').fadeOut(pulseSpeed);
        hasScrolled = true;
    }
});
if (jQuery(window).scrollTop() === 0) {
    runPulseScrollTeaser();

}