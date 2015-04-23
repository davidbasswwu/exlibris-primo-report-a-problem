# exlibris-primo-report-a-problem
This code adds a "Report a problem" link to the Actions button, and sends the permalink of the record to a Drupal form

To see it in action, go to http://onesearch.library.wwu.edu/, do a search, click on "Details", then "Actions", and then "Report a Problem".  It will open a new tab that goes to a Drupal form that captures the referrer and the permalink of the record that had a problem:
http://library.wwu.edu/content/4769?permalink=http://onesearch.library.wwu.edu/WWU:CP71143170080001451

When designing your form, just be sure to make the IDs of your fields match the values in the drupal.php code.
