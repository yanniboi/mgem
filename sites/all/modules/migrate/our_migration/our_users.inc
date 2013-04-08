<?php

// User Migration class
class ourUserMigration extends Migration {
  // class constructor
  public function __construct() {
    parent::__construct(MigrateGroup::getInstance('examplegroup'));
    $this->description = t('Migrate Drupal 6 users');
 // some field definitions; roles will be added later in prepareRow()
    $source_fields = array(
      'uid' => t('User ID'),
      'roles' => t('The set of roles assigned to a user.'),
    );
 
    // only import active users from the old db
    $query = db_select(SOURCE_DATABASE .'.users', 'u')
      ->fields('u', array('uid', 'name', 'pass', 'mail', 'created', 'access', 'login', 'status', 'init'))
      ->condition('u.status', 1, '=')
      ->condition('u.uid', 1, '>')
      ->orderBy('u.uid', 'ASC');
    $this->source = new MigrateSourceSQL($query, $source_fields);
    $this->destination = new MigrateDestinationUser(array('md5_passwords' => TRUE));
    $this->map = new MigrateSQLMap($this->machineName,
      array(
        'uid' => array(
          'type' => 'int',
          'unsigned' => TRUE,
          'not null' => TRUE,
          'description' => 'D6 Unique User ID',
          'alias' => 'u',
        )
      ),
      MigrateDestinationUser::getKeySchema()
    );
    
    $this->addFieldMapping('name', 'name')->dedupe('users', 'name');
    $this->addFieldMapping('pass', 'pass');
    $this->addFieldMapping('mail', 'mail')->dedupe('users', 'mail');
    $this->addFieldMapping('language')->defaultValue('');
    $this->addFieldMapping('theme')->defaultValue('');
    $this->addFieldMapping('signature')->defaultValue('');
    $this->addFieldMapping('signature_format')->defaultValue('filtered_html');
    $this->addFieldMapping('created', 'created');
    $this->addFieldMapping('access', 'access');
    $this->addFieldMapping('login', 'login');
    $this->addFieldMapping('status', 'status');
    $this->addFieldMapping('picture')->defaultValue(0);
    $this->addFieldMapping('init', 'init');
    $this->addFieldMapping('timezone')->defaultValue('Europe/London');
    $this->addFieldMapping('path')->issueGroup(t('DNM')); // DNM = Do Not Map
    $this->addFieldMapping('roles', 'roles');
  }
  // massage the user ids before saving
  public function prepareRow($current_row) {
    $source_id = $current_row->uid;
    $query = db_select(SOURCE_DATABASE .'.users_roles', 'r')
      ->fields('r', array('uid', 'rid'))
      ->condition('r.uid', $source_id, '=');
    $results = $query->execute();
    // add the Authenticated role for everyone
    $roles = array('2' => '2');
    foreach ($results as $row) {
      $roles[$row->rid] = $row->rid;
    }
      // adjust the old to new role id's
    $current_row->roles = $roles;
    
    /*$query = db_select(SOURCE_DATABASE .'.users', 'u')
      ->fields('u', array('uid'))
      ->condition('u.uid', $source_id, '=');
    $results = $query->execute();
    $userid = '';
    foreach ($results as $row) {
      // offset userids by 2
      $x = $row->uid;
      $y = $x;
      $userid[$x] = $y;
    }
    $current_row->uid = $userid;*/
    return TRUE;
    // return FALSE if you wish to skip a particular row

  }
} // close the ourUserMigration class