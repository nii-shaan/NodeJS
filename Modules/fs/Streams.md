# Streams

- A Stream is a sequence of data that is being moved from one point to another point over time
- Ex. a stream of data being transferred from one file to another file within the same computer
- Work with data in chunks instead of waiting for the entire data to be available at once
- If you're transfering file contents from fileA to fileB, you don't want to wait for entire fileA content to be saved in temporary memory before moving into fileB.
  Instead, the content is transferred in chunks over time which prevents unnecessary memory usage

- Stream is infact a built-in node module that inherits from the events emitter class
- Other module internally use streams for their functioning

# Types of Streams

- `Readable streams` from which data can be read
- `Writable streams` to which we can write data
- `Duplex streams` that are both readable and writable
- `Transform streams` that can modify or transform the data as it is written and read

  Ex: Reading from a file as readable streams
  Ex: Writing to a file as writable streams
  Ex: Sockets as a duplex stream
  Ex: File compression where you can write compressed data and read de-compressed data to and from a file as a transform stream
