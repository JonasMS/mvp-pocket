module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateArticles extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052500072147;
    }

    up() {

      return [
        this.createTable("articles", [{"name":"url","type":"text"},{"name":"title","type":"text"},{"name":"author","type":"text"},{"name":"data","type":"text"},{"name":"publisher","type":"text"},{"name":"text","type":"text"}])
      ];

    }

    down() {

      return [
        this.dropTable("articles")
      ];

    }

  }

  return CreateArticles;

})();
