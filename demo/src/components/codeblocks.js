export default {
	javascript: `class HelloMessage extends React.Component {
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
	go: `package main
import "fmt"

func main() {
message := greetMe("world")
fmt.Println(message)
}

func greetMe(name string) string {
return "Hello, " + name + "!"
}
`,
	graphql: `query FirstSevenStarShips {
  allStarships(first: 7) {
    edges {
      node {
        id
        name
        model
        costInCredits
        pilotConnection {
          edges {
            node {
              ...pilotFragment
            }
          }
        }
      }
    }
  }
}

fragment pilotFragment on Person {
  name
  homeworld {
    name
  }
}`,
	rust: `fn main() {
let url = Url::parse("http://localhost:7777/").expect("fail Url::parse()");
let mut target_url = url.join("/hello").expect("fail url join()");
target_url.set_query(Some("hoge=fuga"));
target_url.set_query(Some("t=zzz"));

println!("{}", target_url);
}`,
	php: `<?php
function greetMe($name) {
return "Hello, " . $name . "!";
}

$message = greetMe($name);
echo $message;
`,
	exs: `defmodule Greeter do
def greet(name) do
  message = "Hello, " <> name <> "!"
  IO.puts message
end
end

Greeter.greet("world")
`,
	ruby: `desc "Do something"
task :workit, [:id] => :environment do |_, args|
id = args[:id]
end

# rake workit[234]
`,
	c: `#include<stdio.h>

#include<conio.h>int sum(int,int);void main()

{
int a, b, c;
printf(“\nEnter the two numbers: “);
scanf(“ % d % d”, & a, & b);
c = sum(a, b);
printf(“\nAddition of two number is: % d”, c);
getch();
}

int sum(int num1, int num2) {
int num3;
num3 = num1 + num2;

return (num3);
}`,
	scala: `for (x <- xs; y <- ys) {
val div = x / y.toFloat
println("%d/%d = %.1f".format(x, y, div))
}`,
	dart: `import 'package:angular_router/angular_router.dart';
import 'package:angular_tour_of_heroes/app_component.template.dart' as ng;

import 'main.template.dart' as self;

@GenerateInjector(
routerProviders,
)
final InjectorFactory injector = self.injector$Injector;

void main() {
runApp(ng.AppComponentNgFactory, createInjector: injector);
}`,
	python: `class Event(object):
  events = [] # static

  def __init__(self, action, time):
      self.action = action
      self.time = time
      Event.events.append(self)

  def __cmp__ (self, other):
      "So sort() will compare only on time."
      return cmp(self.time, other.time)

  def run(self):
      print("%.2f: %s" % (self.time, self.action))

  @staticmethod
  def run_events():
      Event.events.sort();
      for e in Event.events:
          e.run()

def create_mc(description):
  "Create subclass using the 'type' metaclass"
  class_name = "".join(x.capitalize() for x in description.split())
  def __init__(self, time):
      Event.__init__(self, description + " [mc]", time)
  globals()[class_name] = \
      type(class_name, (Event,), dict(__init__ = __init__))

def create_exec(description):
  "Create subclass by exec-ing a string"
  class_name = "".join(x.capitalize() for x in description.split())
  klass = """
class %s(Event):
  def __init__(self, time):
      Event.__init__(self, "%s [exec]", time)
""" % (class_name, description)
  exec klass in globals()

if __name__ == "__main__":
  descriptions = ["Light on", "Light off", "Water on", "Water off",
                  "Thermostat night", "Thermostat day", "Ring bell"]
  initializations = "ThermostatNight(5.00); LightOff(2.00); \
      WaterOn(3.30); WaterOff(4.45); LightOn(1.00); \
      RingBell(7.00); ThermostatDay(6.00)"
  [create_mc(dsc) for dsc in descriptions]
  exec initializations in globals()
  [create_exec(dsc) for dsc in descriptions]
  exec initializations in globals()
  Event.run_events()
`,
	julia: `struct NewExcep <: Exception
  v::String
end

Base.showerror(io::IO, e::NewExcep) = print(io, "A problem with $(e.v)!")

throw(NewExcep("x"))`,
	r: `old <- c("x", "y", "x", "z")
mapping <- c("x" = "a", "y" = "b", "z" = "c")
new <- mapping[old]`,
	clojure: `(ns twitterbuzz.leaderboard
(:require [twitterbuzz.core :as buzz]
          [twitterbuzz.dom-helpers :as dom]))

(defn leaderboard-element
"Create a leaderboard element from a user map."
[user]
(dom/build [:div.tweet
            [:img.profile-pic {:src (:image-url user)}]
            [:div.tweet-details
              [:div.user-name (:username user)]
              [:div.tweet-text (dom/html (buzz/markup (:last-tweet user)))]
              [:div (str (buzz/num-mentions user))]]]))`,
	haskell: `main = do
done <- newEmptyMVar
forkIO (do putStrLn "I'm one thread!"
            putMVar done "Done!")
second <- forkIO (do threadDelay 100000
                      putStrLn "I'm another thread!")
killThread second
msg <- takeMVar done
putStrLn msg`,
	bash: `yarn workspace myPackage add react-code-blocks

Fruits=('Apple' 'Banana' 'Orange')
Fruits+=('Watermelon')
unset Fruits[2]  
lines=('cat "logfile"')`
};
