<?php 
# put this code in your Drupal form, making sure that the #ids below match the fieldnames you used in your form

$permalink_path = $_GET["permalink_path"];
# TODO: can we sanitize this variable?

$your_primo_domain_name = "http://onesearch.library.wwu.edu/";
$permalink = $your_primo_domain_name . $permalink_path;

   drupal_add_js('

     jQuery(document).ready(function(){ 
          jQuery("#edit-submitted-openurl").val(document.referrer);
          jQuery("#edit-submitted-page-record").val("' . $permalink .'");
        });', 
     'inline' 
     );
?>
