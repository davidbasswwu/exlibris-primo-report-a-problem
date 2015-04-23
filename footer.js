<script>
    /* add this code to your Primo footer (or header) */

    function recreateExLiPermalink(exli_permaLink) {
        // requires ExLibris Primo 4.6 (or higher)
        exli_permaLink = exli_permaLink.split('?');     // split the exli_permalink at the question mark
        exli_permaLink = exli_permaLink[1];             // use what follows the question mark

        var docId = GetParameter(exli_permaLink,"docId");      // extract the docId value from that string
        var vid = GetParameter(exli_permaLink,"vid");           // extract the vid value from the exli_permalink string
        var exli_permaLink_final = vid + ":" + docId;     // put the pieces together
        return exli_permaLink_final;
    }


	$(document).ready(function() {
        // jQuery required (but it is already included with Primo)

       $(document).one("click", ".EXLTabHeaderButtonSendTo a", function() { 
            // when the "Actions" link is clicked on...
            var $child_list = $(this).parent().find("ol.EXLTabHeaderButtonSendToList");
            var child_list_a = $child_list.find(".EXLButtonSendToPermalink a").attr('href');
                // find the href attribute for the exli permalink
            var exli_permalink_generated = recreateExLiPermalink(child_list_a);
                // send that value to the recreate function and store it as this variable
            var report_a_problem_url = "http://your.drupal.site.edu/content/form-id-goes-here?permalink=" + exli_permalink_generated;
                // append the generated permalink to our target url
            $child_list.append("<li><a target='_blank' href='" + report_a_problem_url + "'> Report a Problem</a></li>");
                // create a new "Report a Problem" link in the Actions list 
        })
    });

</script>
