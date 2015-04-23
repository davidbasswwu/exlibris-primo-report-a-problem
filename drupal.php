<?php 
# put this code in your Drupal form, making sure that the #ids below match the fieldnames you used in your form

$permalink = $_GET["permalink"];
# TODO: sanitize $permalink 

   drupal_add_js('

     jQuery(document).ready(function(){ 
          jQuery("#edit-submitted-openurl").val(document.referrer);
          jQuery("#edit-submitted-page-record").val("' . $permalink .'");
        });', 
     'inline' 
     );
?>
