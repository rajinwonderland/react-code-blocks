export default {
	bash: `echo Hello World`,
	c: `int main(void)
{
  puts("Hello World!");
  return EXIT_SUCCESS;
}
`,
	clojure: `(defn hello []
  (println "Hello world!"))
(hello)
`,
	cpp: `#include <iostream.h>
main() {
  cout << "Hello World!" << endl;
  return 0;
}`,
	csharp: `class HelloWorld {
 static void Main() {
  System.Console.WriteLine("Hello, World!");
 }
}`,
	dart: `main() {
  print("Hello world!");
}
`,
	elixir: `defmodule Greetings do
  def hello_world, do:
    hello("world" )


  defp  hello(recipient) do
  IO.puts(
  "hello #{recipient}"
  )
  end
end`,
	elm: `import Text
main = Text.plainText "Hello, world!"
`,
	erlang: `
-module(hello).
-export([hello/0]).
hello() ->
io:format("Hello World!~n", []).
`,
	fsharp: `printf "Hello World!\n"`,
	graphql: `query FirstSevenStarShips {
  allStarships(first: 7) {
    edges {
      node {
        id
        name
        model
        costInCredits
      }
    }
}
`,
	go: `package main
import "fmt"
func main() {
  fmt.Printf("Hello World\n")
}
`,
	groovy: `println "Hello World"`,
	haskell: `main = putStrLn "Hello World"`,
	html: `<html>
<!-- Hello World in HTML -->
<head>
<title>Hello World!</title>
</head>
<body>
Hello World!
</body>
</html>
`,
	java: `class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}`,
	javascript: `var sys = require("sys");
sys.puts("Hello World");
`,
	jsx: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />, 
  mountNode 
);`,
	julia: `println("Hello, World!")`,
	kotlin: `fun main(args : Array<String>) {
  println("Hello, world!")
}
`,
	lisp: `(defun hello-world()
"Display the string hello world."
  (interactive)
  (message "hello world"))
`,
	makefile: `all:
  @echo "Hello world!"
`,
	matlab: `disp("Hello World");`,
	objectivec: `#include <stdio.h>
#include <objpak.h>
int
main (int argc, char **argv)
{
  id set =[Set new];
  argv++;
  while (--argc)
  [set add: [String str:*argv++]];
  [set
   do
  :{
    :each | printf ("hello, %s!\n",[each str]);
   }
  ];
  return 0;
  }
`,
	ocaml: `print_string "Hello World!\n";;`,
	php: `<?php
  echo "Hello World!";
?>
`,
	python: `# Hello world in Python 2
print "Hello World"

# Hello world in Python 3 (aka Python 3000)
print("Hello World")
`,
	r: `cat("Hello world\n")`,
	ruby: `puts "Hello World!"`,
	rust: `fn main() {
  println!("Hello World!");
}
`,
	scala: `object HelloWorld extends App {
  println("Hello world!")
}
`,
	sql: `SELECT "Hello World";`,
	swift: `println("Hello, world!")`,
	tsx: `import * as React from "react";

export class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello world!It's from Helloword Component.</div>;
    }
}`,
	typescript: `var exclamation: string = "Hello";
var noun: string = "World";
console.log(exclamation + noun);
`
};
