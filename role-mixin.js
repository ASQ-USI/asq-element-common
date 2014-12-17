
ASQ.RoleMixin = {

  // use a simple enum object
  Roles: Object.freeze({
    VIEWER: "viewer",
    PRESENTER: "presenter",
    TA: "ta"
  }),

  mixinPublish: {
    // default role is 'viewer'
    role: {value: "viewer", reflect: true},
  },

  /**
  * 
  * 1. Validate the updation of role. If the new value
  * is not a valid one, then roll back to the old value.
  * 
  * 2. If the role of `outside` element is 
  * changed, then `inside` elements' role
  * are also changed.
  *
  */
  roleChanged: function(old, newRole) {
    if ( newRole === "viewer" || newRole === "presenter" || newRole === "ta" ) {
      this.childNodes.array().filter(function(el) {
        return el.isASQElement;
      }).forEach(function(x) {
        x.role = newRole;
      });
    } else {
      this.role = old;
    }
    
  }
}