/* Code generated by ToJs v. 1.0 */
qx.Class.define("mobileHello.gen.page.Login", {

  extend : qx.ui.mobile.page.NavigationPage,

  members: {
    _createComponents: function() {

      this.setTitle("Login");

      this.__child1 = new qx.ui.mobile.form.Form();
      this.__form = this.__child1;

      this.__child2 = new qx.ui.mobile.form.TextField();
      this.user = this.__child2;
      this.__child2.setRequired(true);

      this.__child1.add(this.__child2, 'Username');
      this.__child3 = new qx.ui.mobile.form.PasswordField();
      this.pwd = this.__child3;
      this.__child3.setRequired(true);

      this.__child1.add(this.__child3, 'Password');
      this.add(new qx.ui.mobile.form.renderer.Single(this.__child1));
      this.__child4 = new qx.ui.mobile.form.Button();
      this.__child4.setLabel("Login");
      this.__child4.addListener("tap", this.onButtonTap, this);

      this.add(this.__child4);
    }
    ,
_initialize: function() {
		this._createComponents();
	},

	onButtonTap: function() {
		if (this.__form.validate()) {
			qx.core.Init.getApplication().getRouting().executeGet("/overview");
		}
	}
  },

  destruct: function() {
    this._disposeObjects(["__child1"]);
    this._disposeObjects(["__child2"]);
    this._disposeObjects(["__child3"]);
    this._disposeObjects(["__child4"]);
  }
});
