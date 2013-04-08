<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function omegamgem_phptemplate_variables($hook, $vars = array()) {

  if ($hook == 'page') {
    omegamgem_removetab('files', $vars);
    // add additional lines here to remove other tabs.
  }

  return $vars;
}

function omegamgem_preprocess_field(&$variables) {
  if ($variables['element']['#field_type'] == 'link_field') {
    $variables['classes_array'][] = 'product-link';
  }
}

function omegamgem_preprocess_form(&$variables) {
  if ($variables['element']['#attributes']['class'][0] == 'commerce-add-to-cart') {
    $variables['element']['#attributes']['class'][] = 'product-link';
    $variables['element']['submit']['#attributes']['class'][] = 'product-link';
  }
}

function omegamgem_removetab($label, &$vars) {
  $tabs = explode("\n", $vars['tabs']);
  $vars['tabs'] = '';

  foreach ($tabs as $tab) {
    if (strpos($tab, '>' . $label . '<') === FALSE) {
      $vars['tabs'] .= $tab . "\n";
    }
  }
}
