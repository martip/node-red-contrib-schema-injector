# node-red-contrib-schema-injector

A [Node-RED](http://nodered.org/) node to inject a JSON Schema into the received message, before passing it along.

This node is meant to be used in conjunction with the default JSON parser node, to force it to perform a validation against the provided schema.

## Install

Either use the `Node-RED Menu - Manage Palette - Install`, or run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-schema-injector

## Usage

You can use the node editor to provide a valid JSON Schema and the node will inject it into `msg.schema`.

If no JSON Schema is provided, this node simply passes along the received message.

Schemas can be saved to and retrieved from your local library (`Local/schema`).  

