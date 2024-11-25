db = db.getSiblingDB('admin');
db.createUser({
  user: 'newAdmin',
  pwd: 'newPassword',
  roles: [ { role: 'root', db: 'admin' } ]
});
