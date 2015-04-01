/* Code generated by ToJs v. 1.0 */
qx.Class.define("desktopHello.gen.MyFirstWindow", {

  extend : qx.ui.window.Window,

  construct : function()
  {
    this.base(arguments);

	
	this._createComponents();
	
	
  },
  members: {
    _createComponents: function() {

      this.setCaption("This is my first Window!");
      this.setLayout(new qx.ui.layout.VBox(10));
      this.setWidth(400);
      this.setHeight(200);

      this.__child1 = new qx.ui.basic.Label();
      this.__child1.setValue("This is a simple window");

      this.add(this.__child1);
      this.__child2 = new qx.ui.container.Composite();
      this.__child2.setLayout(new qx.ui.layout.HBox(10));

      this.__child3 = new qx.ui.basic.Label();
      this.__child3.setValue("First number here:");

      this.__child2.add(this.__child3);
      this.__child4 = new qx.ui.form.TextField();
      this.txtFirst = this.__child4;
      this.__child4.addListener("changeValue", this.onSumChanged, this);

      this.__child2.add(this.__child4, {flex:1});
      this.add(this.__child2);
      this.__child5 = new qx.ui.container.Composite();
      this.__child5.setLayout(new qx.ui.layout.HBox(10));

      this.__child6 = new qx.ui.basic.Label();
      this.__child6.setValue("Second number here:");

      this.__child5.add(this.__child6);
      this.__child7 = new qx.ui.form.TextField();
      this.txtSecond = this.__child7;
      this.__child7.addListener("changeValue", this.onSumChanged, this);

      this.__child5.add(this.__child7, {flex:1});
      this.add(this.__child5);
      this.__child8 = new qx.ui.container.Composite();
      this.__child8.setLayout(new qx.ui.layout.HBox(10));

      this.__child9 = new qx.ui.basic.Label();
      this.__child9.setValue("Sum:");

      this.__child8.add(this.__child9);
      this.__child10 = new qx.ui.form.TextField();
      this.txtSum = this.__child10;
      this.__child10.setReadOnly(true);

      this.__child8.add(this.__child10, {flex:1});
      this.add(this.__child8);
      this.__child11 = new qx.ui.form.Button();
      this.__child11.setLabel("Hi!");
      this.__child11.addListener("execute", this.onButtonExecute, this);

      this.add(this.__child11);
    }
    ,
onButtonExecute: function() {
		alert("Hi!");
	},

	onSumChanged: function() {
		var first = parseInt(this.txtFirst.getValue());
		var second = parseInt(this.txtSecond.getValue());
		var sum = first+second;

		if (isNaN(sum)) {
			this.txtSum.setValue("");
		} else {
			this.txtSum.setValue("" + (first + second));
		}
	}
  },

  destruct: function() {
    this._disposeObjects(["__child1"]);
    this._disposeObjects(["__child2"]);
    this._disposeObjects(["__child3"]);
    this._disposeObjects(["__child4"]);
    this._disposeObjects(["__child5"]);
    this._disposeObjects(["__child6"]);
    this._disposeObjects(["__child7"]);
    this._disposeObjects(["__child8"]);
    this._disposeObjects(["__child9"]);
    this._disposeObjects(["__child10"]);
    this._disposeObjects(["__child11"]);
  }
});
