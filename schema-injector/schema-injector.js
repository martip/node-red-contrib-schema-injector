module.exports = function(RED) {

  function SchemaInjectorNode(config) {
    RED.nodes.createNode(this, config);

    const node = this;
    this.name = config.name;
    this.schema = config.schema;

    this.on('input', async (msg, send, done) => {
      if (node.schema) {
        try {
          msg.schema = JSON.parse(node.schema);
          node.send(msg);
          done();
        } catch (error) {
          msg.schemaNotValidError = error;
          done(error);
        }  
      } else {
        node.send(msg);
        done();
      }
    });
  }

  RED.nodes.registerType('schema-injector', SchemaInjectorNode);
  RED.library.register('schemas');
}
