<?php

function commerce_taxonomy_reference_views_data() {

$data['commerce_product']['term_commerce_product_tid_depth'] = array(
    'help' => t('Display content if it has the selected taxonomy terms, or children of the selected terms. Due to additional complexity, this has fewer options than the versions without depth.'),
    'real field' => 'product_id',
    'argument' => array(
      'title' => t('Has taxonomy term ID (with depth)'),
      'handler' => 'views_handler_argument_term_commerce_product_tid_depth',
      'accept depth modifier' => TRUE,
    ),
    'filter' => array(
      'title' => t('Has taxonomy terms (with depth)'),
      'handler' => 'views_handler_filter_term_commerce_product_tid_depth',
    ),
  );

 return $data;
}

