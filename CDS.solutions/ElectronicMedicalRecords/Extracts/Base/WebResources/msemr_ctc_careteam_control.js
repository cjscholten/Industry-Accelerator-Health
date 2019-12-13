var div = "";
var careteamIdArray = [];
var CareTeamClassCounter = 0;
var ClassAssignArray = [];
var OldHtml = "";
var TotalRecordCount = 0;
var ToolTipClassCounter = 0;
var Median = 0;
var ToolTipClass = "";
var LiId = "";
var liCounter = 0;
var PathCounter = 0;

const teamsBase64Image = 'data:image/png;base64,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/wD///8A/wH/AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQABAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANBP8AAP///wAA//8AAP/+AAAAAQD///8AAAAAAAD/AAAAAAAAAP7/AAD//wD///8A////AP8AAAD/AAAA//3/AAD//wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP/+AAD/AAAA//8A//8AAAAA/wAA//4AAP8AAP8B/wD/AAAAAAD/AP7+/gD+AAAA//7+AAD//wD/AAAA////AP8A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP7/AAD//wD/AAAAAP/+AAAAAQD//wAAAP//AP8AAAAAAAAAAP7/AP/+/gD///8A/wEAAP8A/wD///8A////AAD/AQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAD/AP///gABAAEA//8AAAD//gD///8AAAD/AP8AAQD/AAAAAP//AP4A/wD+AP4AAP7/AP//AAD//wAA////AP///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP7/AAD/AAD/AP8AAP//AP///wD///8A/wAAAP8A/wAAAAAAAP/9AP/+/wD//wAA//8AAP///wD///8AAAD/AP8AAQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP//AP///wAA//8A////AP///wAA//8A////AP/IzADl3eAA7/r9AP3//gD///8A////AP///wD///8A////AP///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP7+AP///wAA//8A/wH/AP8A/wD/AAAA/wD/AP++wQDn/wAA////AP///wD///8A////AP///wAA//8A////AP8AAQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wD5BP//AP4AAAAAAAAA//3/AAAAAAD///8A////AP//AAD///8A//8AAP///wAA//8A/wD/AP//AAD//wAA//8AAP///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDdAgD/ANr9/QD//v4A////AP7+/gD+/v4A/v7+AP///gD///4A///9AP///gD+//8A/v7/AP7+/QD//v0A////AP0JCAD1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9/gD+AAAAAAAAAAAAAAAAAAAAAAAAAAAC/wC4BPsRAHUD7gAk/f4AAQMCAP/6+gAAAAAAAAAAAAAAAAAAAv4A/xUbAEcC/gAL/wIA/wAAAAAAAAAAAP0AAAgJAPwICAAYAP8ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8/AD7AAAAAAAAAAAAAAAAAAAAAAD/ANQZEACwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIaO/2H/AABNAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wADAAEAMwAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAPn5APbn6gDoAAAAAAAAAAAAAAAAAQAAvgT5AIWWlgH0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPr7ALkGBQBtAAAABgAAAAAAAAAAAAAAAAAAAAAAAQAN/wAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFAGb//wD7AgEAHQD+APYDAgDNl48B3gAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFjv9xAAAAegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArHtyAWkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD78gCRAQEAqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJ+wsAcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAH++vEAbAEBAIUAAAD5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA/v//AKD7EQBUgGcB9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEjv8bAwEAXv//AET/AAAlAQEAA///AOABAADC/QEAon1xAdcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUHrKcv/rAAAAAAASUVORK5CYII=';

$(document).ready(function (e) {
    $("body").scrollTop(100);

});

$(function () {
    GetData();
    $(".con-tooltip").hover(function () {
        $(this).css("z-index", "10");
    }, function () {
        $(this).css("z-index", "0");
    });
});

(function ($) {
    // jQuery extension: reverse jQuery element order
    jQuery.fn.reverse = [].reverse;


    // Default values for inner and outer radius limits (between 0 and 1)
    var defaultInner = 0; // Inner limit for radius
    var defaultOuter = 1; // Outer limit for radius
    var defaultBorders = 1; // Factor for space between limit
    // and inner/outer orbit

    // Default value for starting degree
    var defaultBegin = 0;

    // TODO: not yet implemented: Min density of satellites
    var minDensity = 8;
    var minDensityLevel1 = 4; // Min density for 1st orbit,
    // orbitlist becomes asymetric if less satellites
    
    // Trace satellite back to root
    function $orbitlistJS_trace(satellite) {
        while (satellite.length) {
            satellite.addClass('orbitlistJS-trace');
            satellite = satellite.data('parent');
        }
    }


    // Flatten Orbitlist HTML to one level only
    function $orbitlistJS_flatten(core) {

        // Detect height of orbitlist core in document
        var coreHeight = core.parents().length;

        // Height of heighest orbit
        var orbitHeight;

        // All satellites: save parent element, then move li element up to first level
        core.find('li').reverse().each(function () {

            var satellite = $(this);

            // Analyse height and apply corresponding css class
            var height = (satellite.parents().length - coreHeight + 1) / 2;
            satellite.addClass('orbitlistJS-orbit-' + height);
            satellite.data('height', height);
            orbitHeight = Math.max(orbitHeight, height);

            // Save reference for parent element if there is any
            satellite.data('parent', satellite.parent().parent().filter(".orbit li"));
            core.prepend(satellite);

        });

        // Save core height and max orbit height in core
        core.data('coreHeight', coreHeight);
        core.data('orbitHeight', orbitHeight);

        // Initial visible height is 1 (children of core)
        core.data('visibleHeight', 1);

        // Delete all sublists (now empty)
        core.find('ul').remove();

    }

    function $orbitlistJS_update(core) {

        var density; // Density of satellites shown
        var angle; // Starting angle of orbit

        // Height/width of element surrounding the orbitlist
        var frameW = core.parent().outerWidth();
        var frameH = core.parent().outerHeight();
        var radius = Math.min(frameW, frameH) / 2;
        var offsetTop = frameH / 2 - radius;
        var offsetLeft = frameW / 2 - radius;

        // Data for first/lowest orbit
        var orbitHeight = 1;
        var orbit = core.find('.orbitlistJS-orbit-1');

        // Read orbitlist's properties
        var borders = core.data('orbitlistjs-borders');
        var inner = core.data('orbitlistjs-inner');
        var outer = core.data('orbitlistjs-outer');
        var arcBegin = core.data('orbitlistjs-begin');
        var arcEnd = core.data('orbitlistjs-end');
        var visibleHeight = core.data('visibleHeight');

        // Calculate length of arc (between 0 and 1 = full circle)
        if (arcEnd <= arcBegin) {
            arcEnd = arcBegin + 360;
        }
        var arcLen = (arcEnd - arcBegin) / 360;

        // Format all visible orbits
        do {

            // Detect density and angle of orbit
            if (orbitHeight === 1) {
                density = orbit.length;
                angle = 0;
            } else {
                var squeeze = 3; // TODO: Change to user-definable parameter
                // Density at least as high as orbit below (looks ugly otherwise)
                density = Math.max((orbit.length - 1) * squeeze, density);
                angle = orbit.first().data('parent').data('angle') - 1 / (density / (orbit.length - 1)) / 2;
            }

            // Format all satellites
            orbit.each(function (index) {
                // set satellite jquery element
                var satellite = $(this);

                // Calculate distance from core (between 0 and 1)
                var distance = visibleHeight === 1 ? 0.65 : (borders + orbitHeight - 1) / (2 * borders + visibleHeight - 1);
                distance = inner + distance * (outer - inner);

                // Calculate satellite position
                var radiant = (index / density + angle + arcBegin) * arcLen * Math.PI * 2;
                var vertical = -Math.cos(radiant);
                var horizontal = Math.sin(radiant);

                // Positions without offset (circle center = 0|0)
                var posTop = radius * distance * vertical;
                var posLeft = radius * distance * horizontal;

                // Correct positions by parent element, centering and satellite dimensions
                posTop = posTop + (radius + offsetTop) + core.parent().offset().top - $(this).find("img").parent("li").height() / 3;
                posLeft = posLeft + (radius + offsetLeft) + core.parent().offset().left - $(this).find("img").parent("li").width() / 2;

                // Position satellite
                satellite.offset({
                    top: posTop,
                    left: posLeft
                });

                // Save angle for child orbit
                satellite.data('angle', index / density + angle);

            });

            // Get one orbit higher
            orbitHeight++;
            orbit = core.find('.orbitlistJS-orbit-' + orbitHeight + ':visible');

        } while (orbit.length);
        setTimeout(function () { GetLine(); }, 300);

    }

    $.fn.orbitlist = function (options) {
        var settings = $.extend({
            // default options here
            onhover: false
        }, options);

        return this.each(function (index) {

            // Create orbitlist's core
            var core = $(this);

            // Apply CSS class
            core.addClass('orbitlistJS');

            // Determine orbitlist's properties
            if (core.data('orbitlistjs-inner') === undefined) {
                core.data('orbitlistjs-inner', defaultInner);
            }
            if (core.data('orbitlistjs-outer') === undefined) {
                core.data('orbitlistjs-outer', defaultOuter);
            }
            if (core.data('orbitlistjs-borders') === undefined) {
                core.data('orbitlistjs-borders', defaultBorders);
            }
            if (core.data('orbitlistjs-begin') === undefined) {
                core.data('orbitlistjs-begin', defaultBegin);
            }
            if (core.data('orbitlistjs-end') === undefined) {
                core.data('orbitlistjs-end', core.data('orbitlistjs-begin'));
            }

            // Reduce HTML lists to only one level
            // Otherwise dependencies between list elements will cause problems
            // when moving particular satellites
            $orbitlistJS_flatten(core);

            // Hide all orbits except first
            core.find('li').filter(function () {
                return $(this).data('height') > 1;
            }).hide();

            // TODO: Way too much show and hide again in the following lines
            // Better filtering is needed!

            // Bind satellite click event
            // TODO: only bind to satellites that actually have children
            // therefore implement isParent property
            var event_handler = function (event) {
                satellite = $(this);

                // re-distribute styling classes
                if (satellite.hasClass('orbitlistJS-active')) {
                    satellite.removeClass('orbitlistJS-active orbitlistJS-trace');
                    satellite.data('parent').addClass('orbitlistJS-active');
                } else {
                    core.find('li').removeClass('orbitlistJS-active orbitlistJS-trace');
                    satellite.addClass('orbitlistJS-active');
                    $orbitlistJS_trace(satellite);
                }

                // Only show satellites with no parents or parent in current trace
                // Calculate current max visible height
                var visibleHeight = 1;
                core.find('li').hide();
                core.find('li').filter(function (index) {
                    var parent = $(this).data('parent');
                    var showSatellite = !parent.length | parent.hasClass('orbitlistJS-trace');
                    if (showSatellite) {
                        visibleHeight = Math.max(visibleHeight, $(this).data('height'));
                    }
                    return showSatellite;
                }).show();
                core.data('visibleHeight', visibleHeight);

                // Update orbitlist
                $orbitlistJS_update(core);

                // Prevent event bubbling
                event.stopPropagation();
            };

            if (settings['onhover']) {
                core.find('li').off('mouseover');
                core.find('li').mouseover(event_handler);
            }
            else {
                core.find('li').off('click');
                core.find('li').click(event_handler);
            }

            // Update orbitlist in order to create initial view
            $orbitlistJS_update(core);

            // Update orbitlist on window resize
            $(window).resize(function () {
                $orbitlistJS_update(core);
            });

        });
    };
})(jQuery);

function GetData() {

    // TODO: Remove for real data
    /*var data = [
        {
            "careteamid": "001ed7c1-40fb-e911-a83e-000d3a365fc2",
            "ParentCareTeamId": "001ed7c1-40fb-e911-a83e-000d3a365fc2",
            "patientimage": "data:image/JPEG;base64,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",
            "fullname": "ANDERA GENDREAU",
            "name": "Bob Smith",
            "image": "data:image/JPEG;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACQAJADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3aiiiqAKKKKACiiuZ8c+KE8M6E0iMDeT5SBffu34f4UN2VxpXdjm/iN8QBpStpGlSbr1/llkU/wCr9h7/AMq8aYq26SZtzMckk9/60lzcMZXmmYyXMpyzH+VVzvILOQq+prnu3qbpKOhDcXCj/Vwlvfp/KqfmsxOUCk+vNW3uVHCnP14zViytnupNz8IOuad7Ba5WgtJpiDgBfU1K32aBimA5H8Rq5fSxQfu4W+X1xWW4WbqAD7VN7jaSFDlXwrYB6K3I/CrCyhiY3XBx0PQ1SCsnBG5T2/wqRmVlAycDoe6//Wpk3HSwHf5kLbJB19D9anguPPJSRVWYDoRw1Vw7AjPXs3rTyA6+YvDL+lSykdN4S8T3PhPWEu4AXtXOyeEnqO4+voa+j9Pv7fUrGG8tZBJBModGHcV8oCfcm4jJAw49RXq/wd8R7ZZ9AuJMqQZrXJ/76X+v4Grpy1syakbq6PYqKKK3MAooopgHTk187fEHxF/bPia4lRt8Fv8AuoRngAd/xPNe0+NdW/sbwnfXKtiVk8qM/wC03H+Jr5kedpJiwG52bCL6n1NYVZdDakuoio5l3SZ3NyM+n0q41qhAyWZuwrpdA8HTT7ZrksWbkj1rsofCltCAVjUH6VzurbY640G9zyq20Oe6lAETKvqa1LuzGnWyxKAWPU5xXp0OjrH0AHtTJ/D1rOD5sYJ9az9o3ua+wiloeJzwv99hwfSoVjUdGH0r07UfBwTc1uBt9K47UdGmtCcxZxzjFbRqJnPOhJamIeOGH4GmMgPKnpUrAEHAJx1U9R9Kh389foau5jYizt4bgZwfb3qZGMbc/RvpTZE3jcB8wH5io4pMoVP3o+CPakxouOBE6uPutVzRNRl0rV7e9gbEtrKHXHceh9sZFUVG+FoSeoytQ28pE2T1xtcf1qUWfYlFFFdhxhRRRQB5T8bNSaHTLGyU/fZpGHr2H8zXl/gXTBqmvB5OUhXcfrXW/Gu6MniFIc8RW4/MkmqHwmjDW99Pj5i4X9M/1rjrPc7aEdUen20aIoVQAB2q3tDVWizVpOoFYR2O1ieUQeoppRe9WD0qIinYSZUmhUjqaxr/AE6O4QhkB/Ct6TBqpItZyNYs8v13wzsZpoV2nHUCuKuYWgkYOpHPzD0PrXut3CGTBGRXA+ItEEm50XnsRVU6rTszGtRUleJwytjj09KrzYilWYfdPDfSnTK9tL5cmQAcAn+VBYMrK3Q9eP1rpOLyJIZTuK5+ZeQfWkZlS6Vx9x8g/WqSu1vIFb+Dp7irEhB+Uc4IZT6/55otqK+h9m0UUV1nKFFFFAHzp8W3L+Kr9jzt2oPyqP4a6nbaXo11JcsR51wdoA7AAZq18WYNviC+Y9GZSPyq74Rh0yPwFZz3MEfzB95I5J3kf0rhk1Z37noU0+ZW7HcWOpWl0m6CZX+h5rRR1J615BONNiufMsr6a1fPC8//AK67Tw5qNzLEsdxOky/wyL1/GoatsdCd9GdhvFMZ07t+dVJJGWJivpxXHat/aE8h8u4ZEPX5u9TzFcp2zyxYzvX86zptUsY2w1wmfQGvN5tOud+JtW2D3er1joml5Hm6gZXPYOBmnaIk5bWO0e6t7hCYZFf1wazZ40lBBANVRotoBut7iWOQdG35qaCG4iOJpA/+0B1rOUVujRN7M4bxRoA+aVF+Vq4Zi0Eojk6jgMf5GvbtSgEtswK54rybX7MJOSB1PNa0pfZZy4iFveRkzgOgYduPpTYG3IB/FGf0q5o9i+p6jDZKwUOTuc9lHWuj1LwhZ20U0llNKbiBS5WQcOB1/StpTjHRmEKUppyifU1FFFdZxhRRRQB4n8Y7TGoJMBxJGM/UH/64qjp2gz3nw+0+KKQq2GfaOCcux6/jXdfFTSvtfh2S6C5aGRSPp0P86g0OBY/DunRelvH/AOgiuGpo2ejQ95JnEavotrPoFvZ2+n/ZLqMEOdgIfK43Z65HUZ9af4V0G+splw2YwBn5+nHXH1rvpbMS8NyKljtUgjwigE0pTclqaRpxi7oldEFmCeu2uZnsZLmdmVuFGQK6O6+WHb7VnxJlqyNle2hzOnaDb3k8rahI9sQDtDgqWPu3YfSuHNrqSatPCs86RhwqBn3kDPOeMEfSvZJLESD1z6iqq6IivuAT64rVT5VaxjKnzS5rnG6PDqvmMrKDEpwG6Z/DtXWxW0gjBkHNacFgsfJp04AWspa6m8dFYw7uMeW30rznW7ISXJAXPPFej30gVGrk4oBdawuR8qnJqYuzCavoZekaHDYCO+uEYKxwSnVfetbxSy22jz38BBV7fy1OO5O3+RrXljurxZ7SK3ENuhwZG7+4HeuV8fXa22lWelw8ZO4jvgev1P8AKqS5pq4StTpux9JUUUV6h4YUUUUAZfiO0jvfD97BIQFaInJ7Y5/pXG+HZ47vQ7GRfuiIJ+K8f0rpvE0s9zAuk2efPuvlYj+Be5/L/PNZVxbWmjPbabAVUrDlU7kDAJ/M1yV9Xfsd2Fly6dydiqDJqGOdZ/uHOGxWXqt062+1T8zHAq5YlLe3hG07gvzZ9e9c/Ndnc42Q++Py4rMjukU4ZsYNXNR1G2XAJA9eayGmtXjYQzB2P8IOTSdhxWh0dtIjqMEGrmwFciubsmktkTeeOhrcS6wgOaqL7icexYYbV5rJvZgoPNWLi9G3k1g3lz5jEClKSHGL3ZnX8xcEZrGS8tbCd3uZREpGC5OMZrVnAxk15p4yu2PmKDwx2gVEY80rE1J8keY9Ql8Q6VY2DXE17HtAyoDg7voO9eRanqUut6rLqE2QGPyL6DsKzIrPEMeeC36f5z+tXGCrKFH3UGfx6V0QgoHJUrOp0sfZFFFFdx54U1iei4z706igClaWqpJJcsd00p+8ey9hXNmwi1bxdqF5MwH2O3EUXPTJOT+ldeMLHz/CK4DxZZPZxXlzG8iNNGqEo2NzNnj3rnre6kdFHWT7kNzEpdJshkQ545zSx3tvNGGSQZ6EEcirGm+HbvSvCtmt1J5km07hjlATkD8BxXOX9g1trVrqCbjGuRJCpwJBjGD+dcfLyysz06c1NaGhPYrPNu3JsPuKfBaQQ/dKkj0NXTZaJdQrLFqBgywBDsBj8DVe/ttDs5P+P2aYtGSqxHdz9QKvktqHtIvTW/oK5XYV7VBDOyP5RbKnofSudvYbvU1gitVexUx4lJbc+7IOQenY/nWxpmn/AGOKOHzJJNvVpGyTWc1pctXW5Zud4XJNU9uOTVy6cMcVRncBaxLM3VJxHAxz2ryvWCb7VYYByC+T9K7jxBeYQoD1ri7JPN1KSU/wrgfUnA/qa6KWjucmId1YiY/I7+mdtIyBFc+yrVhYwbuOIcqpwR9f/rCorsbdydw38jWy3Oax9h0UUV2nEFFFFADJdwQlBlvQ96wWUax4ijgkjzb2CiR/QynoPwHNad7qMNsjqJo/P2/KhYZz9Kzn13SNGEMMt2pcgtIVGSWPJJ+tTKDkyoy5Tau4jPbtCMfOcHPYVxWs6a8LNCw77kOKnvfiTpVsG8mGebHfAUVz6+Pzr2pJC1ksFqBtEhfcS56DOB2B/Ss69JtcxthqvLKwxpGjwrwZx3A60xjJM37uEIP7xrokWN/vAflRJFEp+VQK5Lysex7VmNFAYlzjnuTSh9uT3q5cMiLWLc3i5IWsJAtRZpuTzWRe3gUEA5NLNM75xVVoD95utShNnMaw7bGZuSay9CUtcycZC9T74P8ALgfjWnrPzOw7CneGrHOi3NywG5mLZ/4Eo/rXRD4WcdX4kY+mIXmkdgT++5P4Gq10wmlZxzhyr/4/yrbgiFraXT44EpH5DmuetNxR2I6nJ/z/AJ6VotdTF6aH2TUNxcw2sRlnkCIO5pl9eR2Nq08ucDgAdWPoK4bV9RnkJnuG+b+CMdFr0YQ5jgbsdBP4ts1m8i3ikml9D8o/M1ymt+J7woZfNZZJciKNDhVXpn3yag0uEvA07t8858uPnoD1P5VnKUv9dVh/qUOQPRF6fyrZQSZDk2X4R/ZmnveXBMkqjcxc53SH7q/h1rnQJJmaWQ75ZGyzHqSa1NfuCoit34WJPOkH+23QfgMVWgiKQjecORuJx90U0hGZNZzXt1DZw43SHv0A7sfbvUGpmNjYaZp7YgQtOzjqyDjefdiDj2xWtHtXT5HaQxyX6sN46xWy5Lt9TjFGnaQWie5mTZNcAO6/88oh9yMflUNXdjRKyuy5P4pTTNNW5vAwAwPl6n8KvHWmdNyDIIyDXD+Nd8sgtEGV8wKcdODj+efyroNCHmabDG4O9F2nPtXl4umoS0PTwlWUo6lia7nuSRnH0qp5Eu7k5rW+yhWyBUq24btXCd1zLWBuw/Go54f3Zx+JrZaIKMH8hVS5TcpA6egoEcBq0XMgA7VoaPsg8PgN1LhcfUg/0qbUbAu7cdal022AihjPzIH80j2H+RWtORhVjqYmqxeRtteh2PI498Z/ma53T7aZxI+392o5I6j8K6TUxJc6lM6LuDgopH1ptpYPEu9eQrfMOxxW0XcxcdT/2Q==",
            "memberType": 935000002,
            "memberTypeName": "Patient",
            "email": "jsmith@microsoft.com",
            "phone": "555-555-1234"
        },
        {
            "careteamid": "001ed7c1-40fb-e911-a83e-000d3a365fc2",
            "ParentCareTeamId": "001ed7c1-40fb-e911-a83e-000d3a365fc2",
            "patientimage": "data:image/JPEG;base64,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",
            "fullname": "Jill Smith",
            "name": "Jill Smith",
            "memberType": 935000000,
            "memberTypeName": "Practitioner",
            "email": "jsmith@microsoft.com",
            "phone": "555-555-1234"
        },
        {
            "careteamid": "001ed7c1-40fb-e911-a83e-000d3a365fc2",
            "ParentCareTeamId": "001ed7c1-40fb-e911-a83e-000d3a365fc2",
            "patientimage": "data:image/JPEG;base64,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",
            "fullname": "Al Roker",
            "name": "Al Roker",
            "memberType": 935000001,
            "memberTypeName": "Relation Person",
            "email": "jsmith@microsoft.com",
            "phone": "555-555-1234"
        }

    ];
    TotalRecordCount = data.length;
    BindCareTeam(data, 0);
    return;*/
    //////////////////////////////////////

    var Id = GetId();
    if (Id !== null && Id !== "" && typeof Id !== 'undefined') {

        var list = [];
        var query = '<fetch mapping="logical" version="1.0" distinct="false" output-format="xml-platform">'
            + '  <entity name="msemr_careteam">'
            + '      <attribute name="msemr_careteamid" />'

            + '<filter type="and">'
            + '<condition attribute="msemr_subjectpatient" operator="eq"  uitype="contact" value="' + Id + '" />'
            + '</filter>'


            + '    <link-entity name="contact" from="contactid" to="msemr_subjectpatient" alias="ptnt" link-type="outer" >'
            + '      <attribute name="entityimage" />'
            + '      <attribute name="fullname" />'
            + '      <attribute name="emailaddress1" />'
            + '      <attribute name="telephone2" />'
            + '    </link-entity>'

            + '<link-entity name="msemr_careteamparticipant" from="msemr_careteam" to="msemr_careteamid" link-type="inner" alias="ctp">'

            + '      <attribute name="msemr_membertype" />'
            + '      <attribute name="msemr_membercareteam" />'
            + '      <attribute name="msemr_memberorganization" />'
            + '      <attribute name="msemr_memberpatient" />'
            + '      <attribute name="msemr_memberpractioner" />'
            + '      <attribute name="msemr_memberrelatedperson" />'
            + '      <attribute name="msemr_role" />'

            + '    <link-entity name="msemr_codeableconcept" from="msemr_codeableconceptid" to="msemr_role" alias="cc" link-type="outer" >'
            + '      <attribute name="entityimage" />'

            + '    </link-entity>'
            + '    <link-entity name="msemr_careteam" from="msemr_careteamid" to="msemr_membercareteam" alias="crt" link-type="outer" >'
            + '      <attribute name="entityimage" />'
            + '    </link-entity>'


            + '    <link-entity name="account" from="accountid" to="msemr_memberorganization" alias="org" link-type="outer" >'
            + '      <attribute name="entityimage" />'
            + '      <attribute name="emailaddress1" />'
            + '      <attribute name="telephone1" />'
            + '    </link-entity>'

            + '    <link-entity name="contact" from="contactid" to="msemr_memberpatient" alias="pt" link-type="outer" >'
            + '      <attribute name="entityimage" />'
            + '      <attribute name="emailaddress1" />'
            + '      <attribute name="telephone2" />'
            + '    </link-entity>'

            + '    <link-entity name="contact" from="contactid" to="msemr_memberpractioner" alias="prc" link-type="outer" >'
            + '      <attribute name="entityimage" />'
            + '      <attribute name="emailaddress1" />'
            + '      <attribute name="telephone2" />'
            + '    </link-entity>'

            + '    <link-entity name="contact" from="contactid" to="msemr_memberrelatedperson" alias="rp" link-type="outer" >'
            + '      <attribute name="entityimage" />'
            + '      <attribute name="emailaddress1" />'
            + '      <attribute name="telephone2" />'
            + '    </link-entity>'

            + '    </link-entity>'
            + '  </entity>'
            + '</fetch>';

        var results = XrmServiceToolkit.Soap.Fetch(query);
        TotalRecordCount = results.length;
        if (results.length > 0) {
            results.forEach(function (val, index) {
                var dataSet = val.attributes;
                var item = {};
                var memberType;
                var memberTypeName;
                var roleName;

                if (dataSet.hasOwnProperty('msemr_careteamid')) {

                    var careteamid = dataSet.msemr_careteamid.value;
                    careteamIdArray.push(careteamid);
                    item.careteamid = careteamid;
                    item.ParentCareTeamId = careteamid;

                }

                if (dataSet.hasOwnProperty('ptnt.entityimage')) {

                    item.patientimage = 'data:image/JPEG;base64,' + dataSet['ptnt.entityimage'].value;

                }
                if (dataSet.hasOwnProperty('ptnt.fullname')) {

                    item.fullname = dataSet['ptnt.fullname'].value;

                }
                if (dataSet.hasOwnProperty('ptnt.emailaddress1')) {
                    item.email = dataSet['ptnt.emailaddress1'].value;
                }
                if (dataSet.hasOwnProperty('ptnt.telephone2')) {
                    item.phone = dataSet['ptnt.telephone2'].value;
                }
                if (dataSet.hasOwnProperty('ctp.msemr_membertype')) {

                    memberType = dataSet['ctp.msemr_membertype'].value;
                    memberTypeName = dataSet['ctp.msemr_membertype'].formattedValue;
                }
                if (dataSet.hasOwnProperty('ctp.msemr_role')) {

                    roleName = dataSet['ctp.msemr_role'].formattedValue;
                }


                //According to Member Type
                if (memberType === 935000000) {
                    if (dataSet.hasOwnProperty('ctp.msemr_memberpractioner')) {
                        item.name = dataSet['ctp.msemr_memberpractioner'] ? dataSet['ctp.msemr_memberpractioner'].formattedValue : '';
                        item.email = dataSet['prc.emailaddress1'] ? dataSet['prc.emailaddress1'].value : null;
                        item.phone = dataSet['prc.telephone2'] ? dataSet['prc.telephone2'].value : null;

                    }
                    if (dataSet.hasOwnProperty('prc.entityimage')) {
                        item.image = dataSet['prc.entityimage'] ? ('data:image/JPEG;base64,' + dataSet['prc.entityimage'].value) : null;
                    }
                }
                else if (memberType === 935000001) {
                    if (dataSet.hasOwnProperty('ctp.msemr_memberrelatedperson')) {
                        item.name = dataSet['ctp.msemr_memberrelatedperson'] ? dataSet['ctp.msemr_memberrelatedperson'].formattedValue : '';
                        item.email = dataSet['rp.emailaddress1'] ? dataSet['rp.emailaddress1'].value : null;
                        item.phone = dataSet['rp.telephone2'] ? dataSet['rp.telephone2'].value : null;
                    }
                    if (dataSet.hasOwnProperty('rp.entityimage')) {
                        item.image = dataSet['rp.entityimage'] ? ('data:image/JPEG;base64,' + dataSet['rp.entityimage'].value) : null;
                    }
                }
                else if (memberType === 935000002) {
                    if (dataSet.hasOwnProperty('ctp.msemr_memberpatient')) {
                        item.name = dataSet['ctp.msemr_memberpatient'] ? dataSet['ctp.msemr_memberpatient'].formattedValue : '';
                        item.email = dataSet['pt.emailaddress1'] ? dataSet['pt.emailaddress1'].value : null;
                        item.phone = dataSet['pt.telephone2'] ? dataSet['pt.telephone2'].value : null;
                    }
                    if (dataSet.hasOwnProperty('pt.entityimage')) {
                        item.image = dataSet['pt.entityimage'] ? ('data:image/JPEG;base64,' + dataSet['pt.entityimage'].value) : null;
                    }
                }
                else if (memberType === 935000003) {
                    if (dataSet.hasOwnProperty('ctp.msemr_memberorganization')) {
                        item.name = dataSet['ctp.msemr_memberorganization'] ? dataSet['ctp.msemr_memberorganization'].formattedValue : '';
                        item.email = dataSet['org.emailaddress1'] ? dataSet['org.emailaddress1'].value : null;
                        item.phone = dataSet['org.telephone1'] ? dataSet['org.telephone1'].value : null;
                    }
                    if (dataSet.hasOwnProperty('org.entityimage')) {
                        item.image = dataSet['org.entityimage'] ? ('data:image/JPEG;base64,' + dataSet['org.entityimage'].value) : null;
                    }
                }
                else if (memberType === 935000004) {
                    if (dataSet.hasOwnProperty('ctp.msemr_membercareteam')) {
                        item.email = dataSet['crt.emailaddress1'] ? dataSet['crt.emailaddress1'].value : null;
                        item.name = dataSet['ctp.msemr_membercareteam'] ? dataSet['ctp.msemr_membercareteam'].formattedValue : '';
                        item.id = dataSet['ctp.msemr_membercareteam'].id;
                    }
                    if (dataSet.hasOwnProperty('crt.entityimage')) {
                        item.image = dataSet['crt.entityimage'] ? ('data:image/JPEG;base64,' + dataSet['crt.entityimage'].value) : null;
                    }
                }

                if (item.image === null || typeof item.image === 'undefined' || item.image === "") {

                    if (dataSet.hasOwnProperty('cc.entityimage')) {
                        item.roleimage = dataSet['cc.entityimage'] ? ('data:image/png;base64,' + dataSet['cc.entityimage'].value) : null;
                    }

                }
                item.memberType = memberType;
                item.memberTypeName = memberTypeName;
                item.roleName = roleName;
                list.push(item);
            });
        }
        if (list.length > 0) {
            BindCareTeam(list, 0);

        }
        else {
            $('.container').html('<h3 style="font-size:16px;font-weight: 400; color:#9B9B9B; font-family:Segoe\000020UI,Tahoma,Arial; margin-top:25%;height: 100px;text-align: center;">No Records Found</h3>');
        }
    }
    else {
        $('.container').html('');
    }
}


function BindCareTeam(list, IsChildCareTeam) {
    if (IsChildCareTeam === 1 || IsChildCareTeam === "1") {
        div += '<ul>';

    }

    $.each(list, function (i, e) {
        liCounter++;
        Median = TotalRecordCount / 2;
        ToolTipClass = "left";
        if (Median > ToolTipClassCounter) {
            ToolTipClass = "right";
        }
        if (IsChildCareTeam !== 1 && IsChildCareTeam !== "1") {

            ToolTipClassCounter++;
            if (e.patientimage === null || typeof e.patientimage === 'undefined' || e.patientimage === "") {
                e.patientimage = "../webresources/msemr_icon_doctor";
            }
            $('#PatientImage').attr("src", e.patientimage);
            $('.patientname').text(e.fullname);

        }
        var title = "Person";
        if (e.image === null || typeof e.image === 'undefined' || e.image === "") {
            //careteam
            if (e.memberType === 935000004) {
                e.image = "../webresources/msemr_icon_careteam";
                title = "Care Team";

            }
            //if (e.roleName == "Nurse") {
            //    e.image = "../webresources/msemr_icon_nurse";
            //    title = "Nurse"

            //}
            else {
                e.image = "../webresources/msemr_icon_doctor";
                title = "Member";


            }

            if (e.roleimage !== null && typeof e.roleimage !== 'undefined' && e.roleimage !== "") {
                e.image = e.roleimage;
                title = "Member";
            }
        }
        var CareteamClass = "";

        var ArrayObject = search(e.careteamid, ClassAssignArray);
        if (ArrayObject && ArrayObject.CareteamClass !== "undefined") {
            CareteamClass = ArrayObject.CareteamClass;
        }
        else {
            CareTeamClassCounter++;
            CareteamClass = "careteam" + CareTeamClassCounter;
            var ClassAssign = { CareteamId: e.careteamid, CareteamClass: CareteamClass };
            ClassAssignArray.push(ClassAssign);
        }
        if (CareTeamClassCounter === 4) {
            CareTeamClassCounter = 0;
        }
        if (e.memberType === 935000004) {

            if (careteamIdArray.length > 0) {
                //  var IsCareTeamAlreadyExist = careteamIdArray.includes(e.id)
                var IsCareTeamAlreadyExist = includess(careteamIdArray, e.careteamid);

            }
            careteamIdArray.push(e.careteamid);
            if (IsCareTeamAlreadyExist === true) {

                return true;
            }




            var careteamlist = [];
            var query = '<fetch mapping="logical" version="1.0" distinct="false" output-format="xml-platform">'
                + '  <entity name="msemr_careteamparticipant">'
                + '      <attribute name="msemr_membertype" />'
                + '      <attribute name="msemr_membercareteam" />'
                + '      <attribute name="msemr_memberorganization" />'
                + '      <attribute name="msemr_memberpatient" />'
                + '      <attribute name="msemr_memberpractioner" />'
                + '      <attribute name="msemr_memberrelatedperson" />'
                + '      <attribute name="msemr_role" />'
                + '<filter type="and">'
                + '<condition attribute="msemr_careteam" operator="eq"  value="{' + e.careteamid + '}" />'
                + '</filter>'

                + '    <link-entity name="msemr_codeableconcept" from="msemr_codeableconceptid" to="msemr_role" alias="cc" link-type="outer" >'
                + '      <attribute name="entityimage" />'

                + '    </link-entity>'
                + '    <link-entity name="msemr_careteam" from="msemr_careteamid" to="msemr_membercareteam" alias="crt" link-type="outer" >'
                + '      <attribute name="entityimage" />'
                + '    </link-entity>'


                + '    <link-entity name="account" from="accountid" to="msemr_memberorganization" alias="org" link-type="outer" >'
                + '      <attribute name="entityimage" />'
                + '    </link-entity>'

                + '    <link-entity name="contact" from="contactid" to="msemr_memberpatient" alias="pt" link-type="outer" >'
                + '      <attribute name="entityimage" />'
                + '    </link-entity>'

                + '    <link-entity name="contact" from="contactid" to="msemr_memberpractioner" alias="prc" link-type="outer" >'
                + '      <attribute name="entityimage" />'
                + '    </link-entity>'

                + '    <link-entity name="contact" from="contactid" to="msemr_memberrelatedperson" alias="rp" link-type="outer" >'
                + '      <attribute name="entityimage" />'
                + '    </link-entity>'
                + '  </entity>'
                //+ '    </link-entity>'
                + '</fetch>';

            var results = XrmServiceToolkit.Soap.Fetch(query);

            if (typeof e.name === 'undefined' || e.name === undefined) {
                e.name = "";
            }
            if (typeof e.roleName === 'undefined' || e.roleName === undefined) {
                e.roleName = "";
            }
            if (IsChildCareTeam === 1 || IsChildCareTeam === "1") {
                div += '<li class="chilcareteam con-tooltip careteam_parent careteamli ' + e.careteamid + ' ' + CareteamClass + ' ' + ToolTipClass + '" id="li' + liCounter + '" ParentCareTeamId="'
                    + e.ParentCareTeamId + '"><img src="' + e.image + '" alt="' + title + '"  onclick="RemoveToolTip()">' + 
                    '<div class="content"><span class="bold">' + e.name + '</span > <br><span>' + e.roleName + '</span ></div>';

            }
            else {
                div += '<li class="chilcareteam con-tooltip careteam_parent careteamli ' + e.careteamid + ' ' + ToolTipClass + '" id="li' + liCounter + '" ParentCareTeamId="'
                    + e.ParentCareTeamId + '"><img src="' + e.image + '" alt="' + title + '"  onclick="RemoveToolTip()">' +
                    '<div class="content"><span class="bold">' + e.name + '</span > <br><span>' + e.roleName + '</span ></div>';
                $('.icon').addClass(e.ParentCareTeamId);
            }



            if (results.length > 0) {
                results.forEach(function (val, index) {

                    var dataSet = val.attributes;
                    var careteamItem = {};
                    var memberType;
                    var memberTypeName;
                    var roleName;
                    if (dataSet.hasOwnProperty('msemr_membertype')) {

                        memberType = dataSet.msemr_membertype.value;
                        memberTypeName = dataSet.msemr_membertype.formattedValue;

                    }
                    if (dataSet.hasOwnProperty('msemr_role')) {

                        roleName = dataSet.msemr_role.formattedValue;
                    }


                    if (memberType === 935000000) {
                        if (dataSet.hasOwnProperty('msemr_memberpractioner')) {
                            careteamItem.name = dataSet.msemr_memberpractioner.formattedValue;
                        }
                        if (dataSet.hasOwnProperty('prc.entityimage')) {
                            careteamItem.image = 'data:image/JPEG;base64,' + dataSet['prc.entityimage'].value;
                        }
                    }
                    else if (memberType === 935000001) {
                        if (dataSet.hasOwnProperty('msemr_memberrelatedperson')) {
                            careteamItem.name = dataSet.msemr_memberrelatedperson.formattedValue;
                        }
                        if (dataSet.hasOwnProperty('rp.entityimage')) {
                            careteamItem.image = 'data:image/JPEG;base64,' + dataSet['rp.entityimage'].value;
                        }
                    }
                    else if (memberType === 935000002) {
                        if (dataSet.hasOwnProperty('msemr_memberpatient')) {
                            careteamItem.name = dataSet.msemr_memberpatient.formattedValue;
                        }
                        if (dataSet.hasOwnProperty('pt.entityimage')) {
                            careteamItem.image = 'data:image/JPEG;base64,' + dataSet['pt.entityimage'].value;
                        }
                    }
                    else if (memberType === 935000003) {
                        if (dataSet.hasOwnProperty('msemr_memberorganization')) {
                            careteamItem.name = dataSet.msemr_memberorganization.formattedValue;
                        }
                        if (dataSet.hasOwnProperty('org.entityimage')) {
                            careteamItem.image = 'data:image/JPEG;base64,' + dataSet['org.entityimage'].value;
                        }
                    }
                    else if (memberType === 935000004) {
                        if (dataSet.hasOwnProperty('msemr_membercareteam')) {
                            careteamItem.name = dataSet.msemr_membercareteam.formattedValue;
                            careteamItem.id = dataSet.msemr_membercareteam.id;

                        }
                        if (dataSet.hasOwnProperty('crt.entityimage')) {
                            careteamItem.image = 'data:image/JPEG;base64,' + dataSet['crt.entityimage'].value;
                        }
                    }

                    if (careteamItem.image === null || typeof careteamItem.image === 'undefined' || careteamItem.image === "") {

                        if (dataSet.hasOwnProperty('cc.entityimage')) {
                            careteamItem.roleimage = 'data:image/png;base64,' + dataSet['cc.entityimage'].value;
                        }

                    }


                    careteamItem.memberTypeName = memberTypeName;
                    careteamItem.roleName = roleName;
                    careteamItem.memberType = memberType;
                    careteamItem.careteamid = e.id;
                    careteamItem.ParentCareTeamId = e.id;

                    if (careteamItem !== null) {
                        careteamlist.push(careteamItem);
                    }
                });
            }
            BindCareTeam(careteamlist, 1);
        }
        else {
            if (typeof e.name === 'undefined' || e.name === undefined) {
                e.name = "";
            }
            if (typeof e.roleName === 'undefined' || e.roleName === undefined) {
                e.roleName = "";
            }
            if (IsChildCareTeam === 1 || IsChildCareTeam === "1") {
                div += '<li class="chilcareteam ' + CareteamClass + ' con-tooltip customtooltip  ' + ToolTipClass + ' careteamli" id="li' + liCounter 
                    + '" ParentCareTeamId="' + e.ParentCareTeamId + '">'
                    + '<img src = "' + e.image + '" alt = "' + title + '"  id = "li' + liCounter + '" ><div class="content"><span class="bold">' + e.name + '</span > <br><span>' + e.memberTypeName + '</span >' + 
                    '<div class="tooltip"><p>'+ e.name + '</p>' + 
                    '<p><b>' + e.memberTypeName + '</b></p><br>' +
                    (e.email ? '<p><a href="mailto:' + e.email + '">' + e.email + '&nbsp;&#9993;</a></p>' : '') + 
                    (e.phone ? '<p><a href="tel:' + e.phone + '">' + e.phone + '&nbsp;&#9742;</a></p>' : '') +
                    (e.email ? '<p><a target="_blank" href="https://teams.microsoft.com/l/chat/0/0?users=' + e.email + '&topicname=Chat">Message on Teams</a>&nbsp;<img class="teamsIcon" src="' + teamsBase64Image + '" /></p></div></div>' : '');

            }
            else {
                if (ToolTipClass === 'right') {
                    div += '<li class="chilcareteam con-tooltip customtooltip careteamli ' + ToolTipClass + '" ParentCareTeamId="'
                        + e.ParentCareTeamId + '" id="li' + liCounter + '">'
                        + '<img src = "' + e.image + '" alt = "' + title + '"  id = "li' + liCounter + '" ><div class="content"><span class="bold">' + e.name + '</span > <br><span>' + e.memberTypeName + '</span >' + 
                        '<div class="tooltip"><p>'+ e.name + '</p>' + 
                        '<p><b>' + e.memberTypeName + '</b></p><br>' +
                        (e.email ? '<p><a href="mailto:' + e.email + '">' + e.email + '&nbsp;&#9993;</a></p>' : '') + 
                        (e.phone ? '<p><a href="tel:' + e.phone + '">' + e.phone + '&nbsp;&#9742;</a></p>' : '') +
                        (e.email ? '<p><a target="_blank" href="https://teams.microsoft.com/l/chat/0/0?users=' + e.email + '&topicname=Chat">Message on Teams</a>&nbsp;<img class="teamsIcon" src="' + teamsBase64Image + '" /></p></div></div>' : '');
                }
                else {
                    div += '<li class="chilcareteam con-tooltip customtooltip careteamli ' + ToolTipClass + '" ParentCareTeamId="'
                        + e.ParentCareTeamId + '" id="li' + liCounter + '">'
                        + '<div class="content"><span class="bold">' + e.name + '</span > <br><span>' + e.memberTypeName + '</span >' + 
                        '<div class="tooltip"><p>'+ e.name + '</p>' + 
                        '<p><b>' + e.memberTypeName + '</b></p><br>' +
                        (e.email ? '<p><a href="mailto:' + e.email + '">' + e.email + '&nbsp;&#9993;</a></p>' : '') + 
                        (e.phone ? '<p><a href="tel:' + e.phone + '">' + e.phone + '&nbsp;&#9742;</a></p>' : '') +
                        (e.email ? '<p><a target="_blank" href="https://teams.microsoft.com/l/chat/0/0?users=' + e.email + '&topicname=Chat">Message on Teams</a>&nbsp;<img class="teamsIcon" src="' + teamsBase64Image + '" /></p></div></div>' : '')
                        + '<img src = "' + e.image + '" alt = "' + title + '"  id = "li' + liCounter + '" >';
                }
                $('.icon').addClass(e.ParentCareTeamId);

            }

        }
        div += '</li>';

    });
    if (IsChildCareTeam === 1 || IsChildCareTeam === "1") {
        div += '</ul>';

    }

    $('.orbit').html('');
    $('.orbit').html(div);
    OldHtml = $('.container').html();
    jQuery('ul.orbit').orbitlist({
        onhover: false
    });

}

function GetTootlTip($this) {

}
function RemoveToolTip() {

    $('#svg1').html('');
}
function Triggermenu($this) {

    if ($($this).hasClass("iconOpened")) {

        $('.container').html('');

        $('.container').html(OldHtml);
        jQuery('ul.orbit').orbitlist({
            onhover: false
        });
        $('.orbit').hide();
        $('.icon').removeClass('iconOpened');
        $('.careteamli').removeClass('transaction');
        $('.menutooltip').text('Click to Expand');

    }
    else {

        $('.careteamli').addClass('transaction');

        $($this).addClass('iconOpened');


        $('.orbit').show();
        $('.menutooltip').text('Click to Collapse');
    }

    $("#svg1").html('');
    GetLine();
    $(".con-tooltip").hover(function () {
        $(this).css("z-index", "10");
    }, function () {
        $(this).css("z-index", "0");
    });
}
function search(Key, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].CareteamId === Key) { return myArray[i]; }
    }
}

function GetLine() {
    PathCounter = 0;
    $("#svg1").html('');

    $('.chilcareteam > img').each(function (e, v) {
        var Id = this.parentElement.id;
        var element = document.getElementById(Id),
            style = window.getComputedStyle(element),
            display = style.getPropertyValue('display');

        var menu = document.getElementById('MainOrbitList'),
            menustyle = window.getComputedStyle(menu),
            menudisplay = menustyle.getPropertyValue('display');
        if (menudisplay !== "none") {
            if (display !== "none") {
                var ParentCareTeamId = $(this.parentElement).attr("ParentCareTeamId");
                if (ParentCareTeamId !== undefined) {
                    PathCounter++;
                    var newpath = document.createElementNS('http://www.w3.org/2000/svg', "path");
                    newpath.setAttributeNS(null, "id", "path" + PathCounter);
                    newpath.setAttributeNS(null, "d", "M0 0");
                    newpath.setAttributeNS(null, "stroke", "#a3a3a3");
                    newpath.setAttributeNS(null, "stroke-width", 3);
                    newpath.setAttributeNS(null, "fill", "none");
                    newpath.setAttributeNS(null, "stroke-dasharray", "5,5");

                    $("#svg1").append(newpath);
                    // setTimeout(function () {
                    connectElements($("#svg1"), $("#path" + PathCounter), $("#" + Id + " > img"), $("." + ParentCareTeamId));
                    // }, 1000)


                }
            }
        }
    });
}

function includess(container, value) {
    var returnValue = false;
    var pos = container.indexOf(value);
    if (pos >= 0) {
        returnValue = true;
    }
    return returnValue;
}

//helper functions, it turned out chrome doesn't support Math.sgn()
function signum(x) {
    return x < 0 ? -1 : 1;
}
function absolute(x) {
    return x < 0 ? -x : x;
}

function drawPath(svg, path, startX, startY, endX, endY) {
    // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)
    var stroke = parseFloat(path.attr("stroke-width"));
    // check if the svg is big enough to draw the path, if not, set heigh/width
    if (svg.attr("height") < endY) svg.attr("height", endY);
    if (svg.attr("width") < startX + stroke) svg.attr("width", startX + stroke);
    if (svg.attr("width") < endX + stroke) svg.attr("width", endX + stroke);

    var deltaX = (endX - startX) * 0.15;
    var deltaY = (endY - startY) * 0.15;
    // for further calculations which ever is the shortest distance
    var delta = deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);

    // set sweep-flag (counter/clock-wise)
    // if start element is closer to the left edge,
    // draw the first arc counter-clockwise, and the second one clock-wise
    var arc1 = 0; var arc2 = 1;
    if (startX > endX) {
        arc1 = 1;
        arc2 = 0;
    }
    // draw tha pipe-like path
    // 1. move a bit down, 2. arch,  3. move a bit to the right, 4.arch, 5. move down to the end
    path.attr("d", "M" + startX + " " + startY +
        " L" + endX +
        //  " A" + delta + " " +  delta + " 0 0 " + arc1 + " " + (startX + delta*signum(deltaX)) + " " + (startY + 2*delta) +
        //  " H" + (endX - delta*signum(deltaX)) +
        //   " A" + delta + " " +  delta + " 0 0 " + arc2 + " " + endX + " " + (startY + 3*delta) +
        " " + endY);


    //path.attr("d", "M" + startX + " " + startY +
    //                " V" + (startY + delta) +
    //                " A" + delta + " " + delta + " 0 0 " + arc1 + " " + (startX + delta * signum(deltaX)) + " " + (startY + 2 * delta) +
    //                " H" + (endX - delta * signum(deltaX)) +
    //                " A" + delta + " " + delta + " 0 0 " + arc2 + " " + endX + " " + (startY + 3 * delta) +
    //                " V" + endY);

}

function connectElements(svg, path, startElem, endElem) {
    try {
        var svgContainer = $("#svgContainer");

        // if first element is lower than the second, swap!
        if (startElem.offset().top > endElem.offset().top) {
            var temp = startElem;
            startElem = endElem;
            endElem = temp;
        }

        // get (top, left) corner coordinates of the svg container
        var svgTop = svgContainer.offset().top;
        var svgLeft = svgContainer.offset().left;

        // get (top, left) coordinates for the two elements
        var startCoord = startElem.offset();
        var endCoord = endElem.offset();

        // calculate path's start (x,y)  coords
        // we want the x coordinate to visually result in the element's mid point
        var startX = startCoord.left + 0.5 * startElem.outerWidth() - svgLeft;    // x = left offset + 0.5*width - svg's left offset
        var startY = startCoord.top + startElem.outerHeight() - svgTop;        // y = top offset + height - svg's top offset

        // calculate path's end (x,y) coords
        var endX = endCoord.left + 0.5 * endElem.outerWidth() - svgLeft;
        var endY = endCoord.top - svgTop;

        // call function for drawing the path
        drawPath(svg, path, startX, startY, endX, endY);
    }
    catch (error) {
        console.error(error);
    }
}





$(document).ready(function () {
    // reset svg each time
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    // connectAll();
});

$(window).resize(function () {
    // reset svg each time
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
});
