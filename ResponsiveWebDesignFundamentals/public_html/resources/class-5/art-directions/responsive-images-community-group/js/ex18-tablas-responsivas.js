
/**
 * No permite declaras variables sin var y demas fallos
 */
window.onload = function () {
    'use strict';

    // variables locales
    var i, element;

    //create headers for the mobile view
    (function () {
        // declarar variables
        var headers = document.querySelectorAll('th'),
            index = 1,
            columns = document.querySelectorAll('td'),
            headerName,
            strictaders = document.querySelectorAll('tr'),
            responsiveHeader;

        if (columns.length > 0) {
            for (i = 0; i < columns.length; i += 1) {
                if (index > strictaders.length) {
                    index = 1;
                }
                // mobile headers are actually td
                element = columns[i];
                headerName = document.querySelector('th:nth-of-type(' + index + ')').textContent;
                responsiveHeader = document.createElement("td");
                responsiveHeader.className = "responsive-header";
                responsiveHeader.innerHTML = headerName;
                element.parentNode.insertBefore(responsiveHeader, element);
                index += 1;
            }
        }
    }());

    var tableMinWidth, hasBeenSet = false;

    /**
     * addds mobile class for table when table is larger than screen
     */
    function sytleTable() {

        var tableWidth = document.querySelector('.responsive-table').offsetWidth,
            windowWidth = window.innerWidth,
            responsiveTables = document.getElementsByClassName('responsive-table');

        if (tableWidth >= windowWidth) {
            if (!hasBeenSet) {
                tableMinWidth = tableMinWidth;
                hasBeenSet = true;
            }
        }

        for (var i = 0; i < responsiveTables.length; i += 1) {
            element = responsiveTables[i];
            element.classList.add("mobile");
        }
    }

    window.onresize = function () {
        sytleTable();
    }

    sytleTable();

}; // window.onload();